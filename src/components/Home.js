import styled from "styled-components";
import BackgroundImg from "../assets/images/hero-background-img.png";
import { BsHouse, BsGear, BsTelephone } from "react-icons/bs";
import ReviewCard from "./ReviewCard";
import LandingPageBlock from "./LandingPageBlock";
import { useState } from "react";
import VideoImageWeb from "../assets/images/FullScreenVideo.png";
import VideoImageMobile from "../assets/images/IMG_9806 6.png";
import { CgClose } from "react-icons/cg";

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      {playVideo && (
        <VideoView>
          <VideoContainer>
            <CloseIcon onClick={() => setPlayVideo(false)}>
              <CgClose size={30} />
            </CloseIcon>
            <div>
              <VideoImgWeb src={VideoImageWeb} alt="Video placeholder" />
              <VideoImgMobile src={VideoImageMobile} alt="Video placeholder" />
            </div>
          </VideoContainer>
        </VideoView>
      )}
      <LandingPage>
        <SectionOne>
          <div>
            <h1>Dui Augue Lectus In Ut At Lorem</h1>
          </div>
          <LandingPageBlock playVideo={playVideo} setPlayVideo={setPlayVideo} />
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
          <Cards>
            <ReviewCard />
            <ReviewCard />
          </Cards>
        </SectionTwo>
      </LandingPage>
    </>
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
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 840px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    margin: 0 2rem;
    padding: 1rem 8rem;
  }
`;
const LandingPage = styled.section``;

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

  @media (min-width: 840px) {
    flex-direction: row;
  }
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

  @media (min-width: 840px) {
    width: 0;
    height: 100px;
    margin: 0 3rem;
  }
`;

//video overlay

const VideoView = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 500vh;
  @media (max-width: 840px) {
    background: rgba(0, 0, 0, 1);
  }
`;

const VideoContainer = styled.div`
  top: 20rem;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 840px) {
    top: 80rem;
  }
`;

const VideoImgWeb = styled.img`
  width: 100%;
  @media (max-width: 840px) {
    display: none;
  }
`;
const VideoImgMobile = styled.img`
  width: 100%;
  @media (min-width: 840px) {
    display: none;
  }
`;

const CloseIcon = styled.button`
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 134px;
  border: none;
`;
