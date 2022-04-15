import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  increaseBuyQuantity,
  reduceBuyQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

const CartQuantityManager = ({ itemDetails }) => {
  const buyQuantity = itemDetails.buy_quantity;
  const dispatch = useDispatch();

  const updateStock = (updateOption) => {
    switch (updateOption) {
      case "increment":
        dispatch(increaseBuyQuantity(itemDetails.id));
        break;
      case "decrement":
        buyQuantity > 1 && dispatch(reduceBuyQuantity(itemDetails.id));
        break;
      default:
        break;
    }
  };

  return (
    <QuantityContainer>
      <StyledBtn value="decrement" onClick={() => updateStock("decrement")}>
        <HiMinus size={20} />
      </StyledBtn>
      <p>{itemDetails.buy_quantity}</p>
      <StyledBtn value="increment" onClick={() => updateStock("increment")}>
        <HiPlus size={20} />
      </StyledBtn>
      <RemoveBtn onClick={() => dispatch(removeFromCart(itemDetails.id))}>
        Remove
      </RemoveBtn>
    </QuantityContainer>
  );
};

export default CartQuantityManager;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  p {
    margin: 0 15px;
  }
`;
const StyledBtn = styled.button`
  background: #f4f5ef;
  color: black;
  display: flex;
  font-size: 14px;
  border: none;
  padding: 8px;
  border-radius: 200px;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #dddfd6;
  }
`;
const RemoveBtn = styled.button`
  cursor: pointer;
  margin-left: 10px;
  border: none;
  background: none;
  color: #0645ad;
`;
