import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../features/cartSlice";

const initialState = 0;

const CartTotal = () => {
  const [userSubtotal, setUserSubtotal] = useState(initialState);

  const cart = useSelector(selectItems);
  useEffect(() => {
    setUserSubtotal(initialState);

    cart.map((item) => {
      if (item.buy_quantity > 1) {
        let quantityPrice = item.price * item.buy_quantity;
        setUserSubtotal((value) => value + quantityPrice);
      } else {
        setUserSubtotal((value) => value + item.price);
      }
    });
  }, [cart]);
  return (
    <Total>
      <div>
        <h1>Total</h1>
        <p>${userSubtotal}</p>
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
