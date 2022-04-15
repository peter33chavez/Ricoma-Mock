import styled from "styled-components";
import CartQuantityManager from "./CartQuantityManager";

const CartItemCard = ({ item, quantity, setQuantity }) => {
  return (
    <ProductCard>
      <ImgContainer>
        {/* TODO - set fixed width and height  */}
        <img src={item.image_url} alt="" />
      </ImgContainer>
      <CheckoutDetails>
        <TitleAndPrice>
          <h3>{item.name}</h3>
          <p>${(item.price / 100).toFixed(2)}</p>
        </TitleAndPrice>
        <Quantity>
          <CartQuantityManager
            itemDetails={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Quantity>
        <p>Pickup</p>
      </CheckoutDetails>
    </ProductCard>
  );
};

export default CartItemCard;

const ProductCard = styled.div`
  display: flex;
  border-bottom: solid 1px #d3d3d3;
`;

const ImgContainer = styled.div`
  margin-bottom: 20px;
  > img {
    max-width: 114px;
    max-height: 114px;
    object-fit: cover;
  }
`;

const CheckoutDetails = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-family: var(--secondary-font);
  width: 100%;
  > p {
    margin: 16px 16px 16px 0;
  }
`;

const TitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 20px;
  margin-bottom: 10px;
  > h3 {
    font-size: 14px;
  }
`;
const Quantity = styled.div`
  display: flex;
  > input {
    height: 40px;
    width: 70px;
    border: solid 1px #d3d3d3;
  }
`;
