import styled from "styled-components";
import BackgroundImg from "../assets/images/hero-background-img.png";
import BackgroundSquares from "../assets/Background-squares-mobile.png";
import secureIcon from "../assets/SecureIcon.svg";
import BBBIcon from "../assets/BBBIcon.svg";
import APlusIcon from "../assets/APlus.svg";
import quotes from "../assets/I WANT INTEREST-FREE.svg";
import star from "../assets/Star 1.svg";
import VideoImage from "../assets/images/IMG_9806 6.png";
import playIcon from "../assets/PlayIcon.svg";
import { BsHouse, BsGear, BsTelephone } from "react-icons/bs";
import CustomBtn from "./CustomBtn";
import MobileCard from "./MobileCard";

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
              <CustomBtn name="Get a free quote" />
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
          <QuoteBoxContainer>
            <QuoteBox>
              <QuoteIcon>
                <img src={quotes} alt="" />
              </QuoteIcon>
              <h4>Louis Marshall</h4>
              <quote>
                I love my Ri 1000. I got one a month or so ago and have printed
                about 1,000 shirts so far! Great product!
              </quote>
              <br />
              <div>
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
                <img src={star} alt="rating star" />
              </div>
            </QuoteBox>
          </QuoteBoxContainer>
        </FormContainer>
        <VideoContainer>
          <PlayBtn>
            <img src={playIcon} alt="play button" />
          </PlayBtn>
          <div>
            <VideoImg src={VideoImage} alt="Video placeholder" />
          </div>
        </VideoContainer>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
            aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
            bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor
            risus commodo. Tempus molestie morbi ultrices nunc.
            <span>Semper nam ridiculus duis bibendum risus, arcu arcu.</span>
          </p>
          <br />
          <p>
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
        <StatsCard>
          <StatsItem>
            <StatsIcon>
              <BsTelephone size={23} />
            </StatsIcon>
            <div>
              <h3>24/7</h3>
              <span>Lorem ipsum</span>
            </div>
          </StatsItem>
          <Divider></Divider>
          <StatsItem>
            <StatsIcon>
              <BsHouse size={24} />
            </StatsIcon>
            <div>
              <h3>30+</h3>
              <span>Lorem ipsum</span>
            </div>
          </StatsItem>
          <Divider></Divider>
          <StatsItem>
            <StatsIcon>
              <BsGear size={24} />
            </StatsIcon>
            <div>
              <h3>50+</h3>
              <span>Lorem ipsum</span>
            </div>
          </StatsItem>
        </StatsCard>
      </SectionOne>
      <SectionTwo>
        <h2>Mi tempus ultrices est tempus nibh eu vitae in.</h2>
        <MobileCard />
        <MobileCard />
      </SectionTwo>
    </LandingPage>
  );
};

export default Home;
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 100%;
  background-color: rgba(20, 125, 247);
  background-image: url(${BackgroundImg});
  background-size: cover;
  color: white;
  position: relative;
  padding-bottom: 12rem;
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
const SectionTwo = styled.div`
  padding-top: 8rem;
  h2 {
    text-align: center;
    margin: 0 2rem 2rem 2rem;
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
  }
`;
const LandingPage = styled.section``;
const FormContainer = styled.div`
  position: relative;
`;
const SquareDecoration = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${BackgroundSquares});
  background-size: cover;
`;
const Form = styled.form`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
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
const QuoteBoxContainer = styled.div`
  position: absolute;
  bottom: -110px;
`;
const QuoteBox = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: #f3f4f5;
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: relative;

  h4 {
    font-weight: 800;
    font-size: 14px;
    line-height: 21px;
  }
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
const VideoImg = styled.img`
  width: 100%;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5rem 2rem 0 2rem;
  position: relative;
`;

const PlayBtn = styled.div`
  position: absolute;
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
const TextContainer = styled.div`
  margin: 0 2rem;
  font-weight: 300;
  font-size: 24px;
  line-height: 38px;
  span {
    background: yellow;
    color: black;
    font-weight: 700;
  }
`;
const StatsCard = styled.div`
  margin: 0 2rem;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: -90px;
`;
const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  h3 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
  }
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    color: #4f5665;
  }
`;
const StatsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #ffecec;
  border-radius: 30px;
`;
const Divider = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border: 1px solid #eeeff2;
`;
