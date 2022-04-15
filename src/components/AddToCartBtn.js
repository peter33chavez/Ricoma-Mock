import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart, selectItems } from "../features/cartSlice";

const AddToCartBtn = ({ item, quantity }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  let inCart = false;
  items.map((currentItem) => {
    inCart = item.id === currentItem.id ? true : false;
  });
  const addItemToCart = () => {
    if (inCart) return;
    if (quantity > 1) {
      dispatch(addToCart({ ...item, buy_quantity: quantity }));
    } else {
      dispatch(addToCart({ ...item, buy_quantity: 1 }));
    }
  };

  return (
    <StyledBtn disable={inCart} onClick={addItemToCart} inCart={inCart}>
      <BtnText>{inCart ? "Added" : "Order"}</BtnText>
    </StyledBtn>
  );
};

export default AddToCartBtn;

const StyledBtn = styled.button`
  width: 114px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.18em;
  color: white;
  background: ${({ inCart }) => (inCart ? "#7c7c7c" : "#F17D21")};
  font-family: "Work Sans";
  color: ${({ inCart }) => (inCart ? "#949494" : "white")};
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  cursor: ${({ inCart }) => (inCart ? "" : "pointer")};
  :hover {
    background: ${({ inCart }) => (inCart ? "" : "#fc9500")};
  }
`;

const BtnText = styled.span``;
