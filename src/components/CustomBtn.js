import styled from "styled-components";

const CustomBtn = ({ name }) => {
  return <Button>{name}</Button>;
};

export default CustomBtn;

const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-size: 30px;
  line-height: 18px;
  background: linear-gradient(90deg, #ff7200 0.93%, #fc9500 100%);
  border-radius: 4px;
  border: none;
  color: white;
  padding: 1em 0;
  box-shadow: 0px 4px 5px rgba(29, 88, 238, 0.14),
    0px 4px 5px rgba(238, 29, 36, 0.04);
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  :hover {
    background: linear-gradient(90deg, #ff8827 0.93%, #ffa323 100%);
  }
`;
