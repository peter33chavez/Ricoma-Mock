import { IoLocationSharp } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import CartTotal from "./CartTotal";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectItems } from "../features/cartSlice";
import { selectShowCart, toggleShowCart } from "../features/showCartSlice";
import CustomBtn from "./CustomBtn";

const ShoppingCart = () => {
  const cart = useSelector(selectItems);
  const showCart = useSelector(selectShowCart);
  const dispatch = useDispatch();

  return (
    <ShoppingCartContainer showCart={showCart}>
      <CartHeader>
        <p>Shopping Cart</p>
        <CgClose size={19} onClick={() => dispatch(toggleShowCart())} />
      </CartHeader>

      <MainCart>
        {cart.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}

        <CartTotal />
      </MainCart>
      <BtnContainer>
        <CustomBtn name={"checkout"} />
        <ContinueShoppingBtn onClick={() => dispatch(toggleShowCart())}>
          Continue Shopping
        </ContinueShoppingBtn>
      </BtnContainer>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;

const ShoppingCartContainer = styled.div`
  background: #f5f6f7;
  width: 100vw;
  max-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: ${({ showCart }) => (showCart ? "0" : "-100vh")};
  right: 0;
  transition: 350ms;
  overflow-y: scroll;
  z-index: 3;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border-bottom: solid 1px #d3d3d3;
  > svg {
    cursor: pointer;
  }
`;

const MainCart = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: white;
  border-bottom: solid 1px #d3d3d3;
`;

const BtnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 18px;
  background: white;
`;

const ContinueShoppingBtn = styled.button`
  cursor: pointer;
  margin: 20px;
  border: none;
  background: none;
  color: #0645ad;
`;
