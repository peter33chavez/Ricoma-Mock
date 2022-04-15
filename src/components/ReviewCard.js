import styled from "styled-components";
import CustomBtn from "./CustomBtn";
import quotes from "../assets/I WANT INTEREST-FREE.svg";
import star from "../assets/Star 1.svg";
import SingleMachine from "../assets/images/SingleMachine.png";
import StockHead from "../assets/images/StockHead.png";
import { BsFacebook } from "react-icons/bs";

const ReviewCard = () => {
  return (
    <Card>
      <CardHeader>
        <h4>
          Starter Single-Head <br />
          Embroidery Machine
        </h4>
      </CardHeader>
      <CardDetails>
        <CardImage>
          <div>
            <img src={SingleMachine} alt="" />
          </div>
          <h6>EM-1010</h6>
          <p>10 Needles</p>
        </CardImage>
        <QuoteCard>
          <section>
            <IconsContainer>
              <div>
                <BsFacebook size={24} color={"blue"} />
              </div>
              <QuoteIcon>
                <img src={quotes} alt="" />
              </QuoteIcon>
            </IconsContainer>
            <QuoteDetails>
              <HeadShot>
                <img src={StockHead} alt="" />
              </HeadShot>
              <p>Lorem ipsum dolor sit.</p>
              <span>Vivera</span>
              <div>
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
              </div>
            </QuoteDetails>
          </section>
        </QuoteCard>
        <DescriptionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas
            eget fermentum at eget nunc et nisi eu lorem.
          </p>
          <CustomBtn name="Dolor." />
        </DescriptionDetails>
      </CardDetails>
    </Card>
  );
};

export default ReviewCard;

const Card = styled.div`
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem 1.5rem 0 0;
  margin-bottom: 2rem;
  max-width: 570px;
`;

const CardHeader = styled.div`
  background: var(--tertiary-color);
  border-radius: 1.5rem 1.5rem 0 0;
  color: white;
  padding: 0.5rem 3rem;
  text-align: center;
  h4 {
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const CardImage = styled.div`
  background: #f5f5f5;
  font-family: "Source Sans Pro";
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  div {
    width: 70%;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  h6 {
    font-weight: 700;
    font-size: 19px;
    line-height: 27px;
  }
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 26px;
    text-transform: uppercase;
    color: #e27838;
  }
`;
const QuoteCard = styled.div`
  background: white;
  position: absolute;
  z-index: 2;
  bottom: 20rem;
  section {
    border: 1px solid #eef2f0;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
  }
`;

const IconsContainer = styled.div`
  align-self: flex-start;
  margin: 0 5px;
`;
const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #ffaa00;
`;
const QuoteDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4rem;
  color: #322e2b;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin: 1rem 0;
  }
  span {
    font-style: italic;
    font-weight: 800;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin: 1rem 0;
  }
`;
const HeadShot = styled.div`
  img {
    border-radius: 40px;
  }
`;
const DescriptionDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  padding-top: 10rem;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  margin: 2rem 2rem;
`;
