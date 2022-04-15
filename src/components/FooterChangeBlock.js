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

const FooterChangeBlock = () => {
  return (
    <>
      <MobileFormat>
        <Logo>
          <span>
            <img src={logo} alt="logo" />
          </span>
        </Logo>
        <ContentContainer>
          <VideoContainer>
            <i>
              <BsFillPlayCircleFill
                size={50}
                color={"var(--secondary-color)"}
              />
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
      </MobileFormat>
      <WebFormat>
        <Column>
          <Logo>
            <span>
              <img src={logo} alt="logo" />
            </span>
          </Logo>
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
          <RandomLinks>
            <a href="#">Lorem, ipsum.</a>
            <a href="#">Lorem</a>
          </RandomLinks>
        </Column>
        <Column>
          <OurSupporters>
            <div>
              <ul>
                <li>
                  <h3>Ultrices.</h3>
                </li>
                <li>
                  <span>Aliquet et.</span>
                </li>
                <li>
                  <span>Donec.</span>
                </li>
                <li>
                  <span>Lorem, ipsum dolor.</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Enim.</h3>
                </li>
                <li>
                  <span>Lorem.</span>
                </li>
                <li>
                  <span>Ipsium.</span>
                </li>
                <li>
                  <span>Donec.</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Fusce.</h3>
                </li>
                <li>
                  <span>Amet.</span>
                </li>
                <li>
                  <span>Tincidynt.</span>
                </li>
                <li>
                  <span>Lorem, ipsum dolor.</span>
                </li>
              </ul>
            </div>
          </OurSupporters>
        </Column>
        <Column>
          <VideoContainer>
            <i>
              <BsFillPlayCircleFill
                size={50}
                color={"var(--secondary-color)"}
              />
            </i>
            <span>
              <img src={videoPlaceholder} alt="play back video" />
            </span>
          </VideoContainer>
          <RandomLinks>
            <a href="#">Lorem ipsum dolor sit.</a>
          </RandomLinks>
        </Column>
      </WebFormat>
    </>
  );
};

export default FooterChangeBlock;

const MobileFormat = styled.section`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 840px) {
    display: none;
  }
`;
const Logo = styled.div`
  margin-top: 2rem;
  width: 10rem;
  img {
    width: 100%;
  }
  @media (min-width: 840px) {
    width: 14rem;
  }
`;
const ContentContainer = styled.div``;
const VideoContainer = styled.div`
  margin: 2rem 0;
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
//WEB VIEW SPECIFIC
const WebFormat = styled.section`
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 840px) {
    display: none;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;
const RandomLinks = styled.div`
  margin: 4rem 0 2rem 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 31px;
  a {
    color: white;
    text-decoration: none;
  }
`;
const OurSupporters = styled.div`
  color: white;
  display: flex;
  gap: 6rem;
  ul {
    list-style-type: none;
  }
  li {
    text-decoration: none;
    padding: 0.5em 0;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    color: #a0a2a6;
  }
`;

// WEB END
