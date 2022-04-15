import styled from "styled-components";
import BackgroundSquaresMobile from "../assets/images/Background-squares-mobile.png";
import BackgroundSquaresWeb from "../assets/images/Background-Square.png";
import secureIcon from "../assets/SecureIcon.svg";
import BBBIcon from "../assets/BBBIcon.svg";
import APlusIcon from "../assets/APlus.svg";
import quotes from "../assets/I WANT INTEREST-FREE.svg";
import star from "../assets/Star 1.svg";
import VideoImage from "../assets/images/IMG_9806 6.png";
import playIcon from "../assets/PlayIcon.svg";
import CustomBtn from "./CustomBtn";

const LandingPageBlock = () => {
  return (
    <>
      <MobileContainer>
        <FormContainer>
          <SquareDecoration></SquareDecoration>
          <Form>
            <h4>
              Fill out the form to <br /> secure the best deal!
            </h4>
            <FormInputs>
              <input required type="text" placeholder="First name*" />
              <input required type="text" placeholder="Last name*" />
            </FormInputs>
            <FormInputs>
              <input required type="text" placeholder="Email address*" />
              <input required type="text" placeholder="Phone number*" />
            </FormInputs>
            <FormSeperateInputs>
              <input required type="select" placeholder="Country*" />
              <CustomBtn name="Get a free quote" />
              <Badges>
                <img src={secureIcon} alt="SecureIcon" />
                <img src={BBBIcon} alt="SecureIcon" />
                <img src={APlusIcon} alt="SecureIcon" />
              </Badges>
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
      </MobileContainer>
      <WebContainer>
        <Column>
          <TextContainer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
              aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
              bibendum et in mattis nec duis nec, magna. Nunc, mattis purus
              dolor risus commodo. Tempus molestie morbi ultrices nunc.
              <span>Semper nam ridiculus duis bibendum risus, arcu arcu.</span>
            </p>
            <br />
            <p>
              Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
              condimentum posuere cursus quis risus. Mauris, auctor ridiculus
              blandit lacus.
              <span>
                Porttitor diam a amet pharetra tellus, senectus augue. Id sed a
                quis morbi ac odio cursus metus sit. Sapien ut non eu non
                egestas non mauris.
              </span>
              Elit, scelerisque mauris aenean justo.
            </p>
          </TextContainer>
          <VideoContainer>
            <PlayBtn>
              <img src={playIcon} alt="play button" />
            </PlayBtn>
            <div>
              <VideoImg src={VideoImage} alt="Video placeholder" />
            </div>
          </VideoContainer>
        </Column>
        <Column>
          <FormContainer>
            <SquareDecoration>
              <img src={BackgroundSquaresWeb} alt="" />
            </SquareDecoration>
            <Form>
              <h4>
                Fill out the form to <br /> secure the best deal!
              </h4>
              <FormInputs>
                <input required type="text" placeholder="First name*" />
                <input required type="text" placeholder="Last name*" />
              </FormInputs>
              <FormInputs>
                <input required type="text" placeholder="Email address*" />
                <input required type="text" placeholder="Phone number*" />
              </FormInputs>

              <FormSeperateInputs>
                <input required type="select" placeholder="Country*" />
                <CustomBtn name="Get a free quote" />
                <Badges>
                  <img src={secureIcon} alt="SecureIcon" />
                  <img src={BBBIcon} alt="SecureIcon" />
                  <img src={APlusIcon} alt="SecureIcon" />
                </Badges>
                <QuoteBoxContainer>
                  <QuoteBox>
                    <QuoteIcon>
                      <img src={quotes} alt="" />
                    </QuoteIcon>
                    <h4>Louis Marshall</h4>
                    <quote>
                      I love my Ri 1000. I got one a month or so ago and have
                      printed about 1,000 shirts so far! Great product!
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur varius faucibus nisl quis non. Magna ultrices nec
                  enim, aenean morbi. Dui tincidunt posuere malesuada rhoncus
                  facilisi mauris non.
                </p>
              </FormSeperateInputs>
              <div></div>
            </Form>
          </FormContainer>
        </Column>
      </WebContainer>
    </>
  );
};

export default LandingPageBlock;

const MobileContainer = styled.div`
  @media (min-width: 840px) {
    display: none;
  }
`;
const FormContainer = styled.div`
  position: relative;
  @media (min-width: 840px) {
    max-width: 592px;
  }
`;
const SquareDecoration = styled.div`
  @media (max-width: 840px) {
    height: 300px;
    width: 100%;
    background-image: url(${BackgroundSquaresMobile});
    background-size: cover;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 8rem 2rem;
  background: white;
  gap: 1.5rem;

  h4 {
    color: black;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    text-align: center;
  }
  input {
    padding: 1.2rem 0.5rem;
    border: 1px solid #315787;
    border-radius: 5px;
  }
  p {
    color: black;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
  }
  @media (min-width: 840px) {
    position: absolute;
    top: 200px;
  }
`;

const FormInputs = styled.div`
  display: flex;
  gap: 1.5rem 1.5rem;
  input {
    width: 45%;
  }
`;
const FormSeperateInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;
const Badges = styled.div`
  display: flex;
  justify-content: center;

  img {
    padding: 0 1rem;
    width: 100%;
    max-width: 90px;
  }
`;

const QuoteBoxContainer = styled.div`
  @media (max-width: 840px) {
    position: absolute;
    bottom: -110px;
  }
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
  padding-top: 3rem;
  margin: 5rem 2rem 0 2rem;
  position: relative;
  @media (min-width: 840px) {
    padding: 0;
    max-width: 461px;
  }
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
// WEB SPECIFIC COMPONENTS
const WebContainer = styled.div`
  display: flex;
  padding: 0 8rem;
  gap: 2rem;
  @media (max-width: 840px) {
    display: none;
  }
`;
const Column = styled.div`
  max-width: 642px;
`;
