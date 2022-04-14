import styled from "styled-components";
import videoPlaceholder from "../assets/images/video-placeholder.png";
import logo from "../assets/Ricoma Logo.svg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <span>
          <img src={logo} alt="logo" />
        </span>
      </Logo>
      <ContentContainer>
        <VideoContainer>
          <i>
            <BsFillPlayCircleFill size={50} color={"var(--secondary-color)"} />
          </i>
          <span>
            <img src={videoPlaceholder} alt="play back video" />
          </span>
        </VideoContainer>
        <SocialsContainer>
          <span>
            <FaFacebookF size={24} color={"white"} />
          </span>
          <span>
            <FaTwitter size={24} color={"white"} />
          </span>
          <span>
            <FaInstagram size={24} color={"white"} />
          </span>
          <span>
            <FaYoutube size={24} color={"white"} />
          </span>
          <span>
            <FaPinterestP size={24} color={"white"} />
          </span>
        </SocialsContainer>
        <AddableItems>
          <div>
            <span>Ultrices.</span>
            <span>
              <AiOutlinePlus size={15} color={"#7C7C7D"} />
            </span>
          </div>
          <Divider></Divider>
          <div>
            <span>Lorem.</span>
            <span>
              <AiOutlinePlus size={15} color={"#7C7C7D"} />
            </span>
          </div>
          <Divider></Divider>
          <div>
            <span>Amet.</span>
            <span>
              <AiOutlinePlus size={15} color={"#7C7C7D"} />
            </span>
          </div>
        </AddableItems>
      </ContentContainer>
      <RandomSection>
        <div>
          <span>Lorem, ipsum dolor.</span>
          <span>Ultrices.</span>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </RandomSection>
      <MarchMadness>
        <div>
          <h4>
            March Madness Sale <br /> Expires Soon
          </h4>
        </div>
        <div>
          <p>
            <span>00</span>
            Days
            <span>:</span>
            <span>01</span>
            Hours
            <span>:</span>
            <span>48</span>
            Minutes
            <span>:</span>
            <span>45</span>
            Seconds
          </p>
        </div>
        <button>Lorem ipsum</button>
      </MarchMadness>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  margin-top: 2rem;
  width: 10rem;
  img {
    width: 100%;
  }
`;
const ContentContainer = styled.div``;
const VideoContainer = styled.div`
  margin: 2rem 0;
  width: 80vw;
  img {
    width: 100%;
  }
  position: relative;
  i {
    position: absolute;
    left: 43%;
    top: 35%;
  }
`;
const SocialsContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`;
const AddableItems = styled.div`
  color: white;
  margin: 2rem 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 31px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const Divider = styled.div`
  border: 0.5px solid #ffffff;
  margin: 1rem 0;
`;
const RandomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 31px;
  background: black;
  color: white;
  width: 100%;
  padding: 1rem 0;
`;
const MarchMadness = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcd002;
  width: 100vw;
  h4 {
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 1rem;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding: 0 0.2em;
  }
  button {
    background: var(--tertiary-color);
    border: 2px solid white;
    border-radius: 30px;
    color: white;
    padding: 10px 60px;
    margin: 1rem 0;
    font-family: "Source Sans Pr" o, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
  }
`;
