import styled from "styled-components";
import InfoIcon from "../assets/Info Icon.svg";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({
  item,
  image,
  name,
  type,
  needles,
  description,
  price,
  discountedPrice,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Card>
      <ImageSection>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
        <button onClick={() => setShowInfo(!showInfo)}>
          <img src={InfoIcon} alt="info Button" />
        </button>
        {showInfo && (
          <InfoBox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              blandit in ullamcorper egestas massa. At nibh dictum vulputate
              gravida sollicitudin lectus metus nunc massa. Ut ac at consectetur
              non aliquet. Eget mi nunc erat.
            </p>
          </InfoBox>
        )}
      </ImageSection>
      <ProductDetails>
        <h2>{name}</h2>
        <MachineType>{type}</MachineType>
        <NeedleConfig>
          <p>{needles}</p>
          <p>SINGLE-HEAD</p>
        </NeedleConfig>
        <Description>{description}</Description>
        <ColorOptions>
          <Purple>
            <BiCheck size={30} color={"white"} />
          </Purple>
          <Green></Green>
          <Brown></Brown>
        </ColorOptions>
        <PriceOrderContainer>
          <Price>
            <h4>${price}</h4>
            <p>${discountedPrice}</p>
          </Price>
          <AddToCartBtn item={item} quantity={1} />
        </PriceOrderContainer>
      </ProductDetails>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border-radius: 16px;
  max-width: 360px;
  background: white;
`;
const ImageSection = styled.div`
  background: #c4c4c4;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: center;
  position: relative;
  height: 216px;
  button {
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
  width: 219px;
  img {
    width: 100%;
  }
`;
const NeedleConfig = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #162ec0;
`;
const Description = styled.p`
  margin: 1rem 2rem 1rem 0;
  max-width: 296px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #6e798c;
`;
const ProductDetails = styled.div`
  padding: 3.5rem 0 2rem 2rem;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #081f32;
  }
`;
const MachineType = styled.p`
  margin: 5px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000a26;
`;
const ColorOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const Purple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #22144a;
  width: 34px;
  height: 34px;
  border-radius: 136px;
`;
const Green = styled.div`
  background: #60c250;
  width: 34px;
  height: 34px;
  border-radius: 136px;
`;
const Brown = styled.div`
  background: #370405;
  width: 34px;
  height: 34px;
  border-radius: 136px;
`;
const PriceOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 0;
`;
const Price = styled.div`
  h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 25px;
  }
  display: flex;
  gap: 1rem;
  p {
    color: var(--secondary-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-decoration-line: line-through;
  }
`;

const InfoBox = styled.div`
  padding: 2rem;
  z-index: 9;
  background: white;
  position: absolute;
  width: 261px;
  height: 179px;
  left: 150px;
  top: 71px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #081f32;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
