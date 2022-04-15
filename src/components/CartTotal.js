import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../features/cartSlice";

const initialState = 0;
const currentTaxRate = 0.0938;

const CartTotal = () => {
  const [userSubtotal, setUserSubtotal] = useState(initialState);
  const [userTax, setUserTax] = useState(initialState);

  const cart = useSelector(selectItems);
  useEffect(() => {
    setUserSubtotal(initialState);
    setUserTax(initialState);
    cart.map((item) => {
      if (item.buy_quantity > 1) {
        let quantityPrice = item.price * item.buy_quantity;
        setUserSubtotal((value) => value + quantityPrice);
        setUserTax(
          (value) => value + (quantityPrice / 100).toFixed(2) * currentTaxRate
        );
      } else {
        setUserSubtotal((value) => value + item.price);
        setUserTax(
          (value) => value + (item.price / 100).toFixed(2) * currentTaxRate
        );
      }
    });
  }, [cart]);
  return (
    <Total>
      <div>
        <h1>Subtotal</h1>
        <p>${(userSubtotal / 100).toFixed(2)}</p>
      </div>
      <div>
        <h1>Taxes</h1>
        <p>${userTax.toFixed(2)}</p>
      </div>
    </Total>
  );
};

export default CartTotal;

const Total = styled.div`
  margin-top: 30px;
  font-family: var(--secondary-font);
  > div {
    display: flex;
    justify-content: space-between;
    > h1 {
      font-weight: bolder;
      font-size: 16px;
    }
  }
`;
