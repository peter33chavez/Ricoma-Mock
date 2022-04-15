import styled from "styled-components";
import FooterChangeBlock from "./FooterChangeBlock";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterChangeBlock />
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

const FooterContainer = styled.footer``;

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
  @media (min-width: 840px) {
    display: none;
  }
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
