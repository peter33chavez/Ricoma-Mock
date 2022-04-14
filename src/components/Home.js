import styled from "styled-components";
import BackgroundImg from "../assets/images/hero-background-img.png";
import BackgroundSquares from "../assets/Background-squares-mobile.png";

import secureIcon from "../assets/SecureIcon.svg";
import BBBIcon from "../assets/BBBIcon.svg";
import APlusIcon from "../assets/APlus.svg";
import quotes from "../assets/I WANT INTEREST-FREE.svg";
import star from "../assets/Star 1.svg";
import VideoImage from "../assets/images/IMG_9806 6.jpg";
import playIcon from "../assets/PlayIcon.svg";
import SingleMachine from "../assets/images/SingleMachine.png";
import StockHead from "../assets/images/StockHead.png";
import { BsFacebook } from "react-icons/bs";

const Home = () => {
  return (
    <LandingPage>
      <SectionOne>
        <div>
          <h1>Dui Augue Lectus In Ut At Lorem</h1>
        </div>
        <FormContainer>
          <SquareDecoration></SquareDecoration>
          <Form>
            <h4>
              Fill out the form to <br /> secure the best deal!
            </h4>
            <div>
              <input required type="text" placeholder="First name*" />
              <input required type="text" placeholder="Last name*" />
            </div>
            <div>
              <input required type="text" placeholder="Email address*" />
              <input required type="text" placeholder="Phone number*" />
            </div>
            <FormSeperateInputs>
              <input required type="select" placeholder="Country*" />
              <button>Get a free quote</button>
              <div>
                <img src={secureIcon} alt="SecureIcon" />
                <img src={BBBIcon} alt="SecureIcon" />
                <img src={APlusIcon} alt="SecureIcon" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur varius faucibus nisl quis non. Magna ultrices nec
                enim, aenean morbi. Dui tincidunt posuere malesuada rhoncus
                facilisi mauris non.
              </p>
            </FormSeperateInputs>
            <div></div>
          </Form>
          <QuoteBox>
            <QuoteIcon>
              <img src={quotes} alt="" />
            </QuoteIcon>
            <h4>Louis Marshall</h4>
            <quote>
              I love my Ri 1000. I got one a month or so ago and have printed
              about 1,000 shirts so far! Great product!
            </quote>
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
          </QuoteBox>
        </FormContainer>

        <VideoContainer>
          <PlayBtn>
            <img src={playIcon} alt="play button" />
          </PlayBtn>
          <img src={VideoImage} alt="Video placeholder" />
        </VideoContainer>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
            aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
            bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor
            risus commodo. Tempus molestie morbi ultrices nunc.
            <span>Semper nam ridiculus duis bibendum risus, arcu arcu.</span>
            Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
            condimentum posuere cursus quis risus. Mauris, auctor ridiculus
            blandit lacus.
            <span>
              Porttitor diam a amet pharetra tellus, senectus augue. Id sed a
              quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas
              non mauris.
            </span>
            Elit, scelerisque mauris aenean justo.
          </p>
        </TextContainer>
      </SectionOne>
      <StatsCard>
        <div>
          <div></div>
          <span>24/7</span>
          <span>Lorem ipsum</span>
          <Divider></Divider>
          <div></div>
          <span>30+</span>
          <span>Lorem ipsum</span>
          <Divider></Divider>
          <div></div>
          <span>50+</span>
          <span>Lorem ipsum</span>
        </div>
      </StatsCard>
      <SectionTwo>
        <h2>Mi tempus ultrices est tempus nibh eu vitae in.</h2>
        <Card>
          <div>
            <h4>Starter Single-Head Embroidery Machine </h4>
          </div>
          <img src={SingleMachine} alt="" />
          <h6>EM-1010</h6>
          <p>10 Needles</p>
          <QuoteCard>
            <span>
              <BsFacebook size={10} color={"blue"} />
              <div>
                <img src={quotes} alt="" />
              </div>
              <img src={StockHead} alt="" />
            </span>
            <p>Lorem ipsum dolor sit.</p>
            <span>Vivera</span>
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
          </QuoteCard>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas
            eget fermentum at eget nunc et nisi eu lorem.
          </p>
          <button>Dolor.</button>
        </Card>
        <Card>
          <div>
            <h4>Starter Single-Head Embroidery Machine </h4>
          </div>
          <img src={SingleMachine} alt="" />
          <h6>EM-1010</h6>
          <p>10 Needles</p>
          <QuoteCard>
            <span>
              <BsFacebook size={10} color={"blue"} />
              <div>
                <img src={quotes} alt="" />
              </div>
              <img src={StockHead} alt="" />
            </span>
            <p>Lorem ipsum dolor sit.</p>
            <span>Vivera</span>
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
          </QuoteCard>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas
            eget fermentum at eget nunc et nisi eu lorem.
          </p>
          <button>Dolor.</button>
        </Card>
      </SectionTwo>
    </LandingPage>
  );
};

export default Home;
const SectionOne = styled.div`
  min-height: 100%;
  background-color: rgba(20, 125, 247);
  background-image: url(${BackgroundImg});
  background-size: cover;
  color: white;
  div h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 43px;
    text-align: center;
    text-transform: capitalize;
    padding: 2rem 0;
  }
`;
const SectionTwo = styled.div``;
const LandingPage = styled.section``;
const FormContainer = styled.div``;
const SquareDecoration = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${BackgroundSquares});
  background-size: cover;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  gap: 10px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h4 {
    color: black;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }
  input {
    padding: 0.8rem 0.5rem;
    margin: 3px;
  }
  button {
    font-weight: 700;
    font-size: 30px;
    line-height: 18px;
    background: linear-gradient(90deg, #ff7200 0.93%, #fc9500 100%);
    border-radius: 4px;
    border: none;
    color: white;
    padding: 1em 0;
  }
  p {
    color: black;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
  }
`;

const FormSeperateInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const QuoteBox = styled.div``;
const QuoteIcon = styled.div`
  background: var(--secondary-color);
`;
const VideoContainer = styled.div`
  width: auto;
  img {
    width: 100%;
  }
`;
const PlayBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  img {
    width: 20px;
  }
`;
const TextContainer = styled.div``;
const StatsCard = styled.div``;
const Divider = styled.div``;
const Card = styled.div``;
const QuoteCard = styled.div``;
