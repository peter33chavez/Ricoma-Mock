import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OpenNavMenu = ({ setShowMenu, showMenu }) => {
  return (
    <OpenMenu showMenu={showMenu}>
      <ul>
        <CloseBtn onClick={() => setShowMenu(!showMenu)}>
          <CgClose size={24} />
        </CloseBtn>
        <Link to="/">
          <OpenMenuItem onClick={() => setShowMenu(!showMenu)}>
            <span>Home</span>
          </OpenMenuItem>
        </Link>
        <Link to="/products">
          <OpenMenuItem onClick={() => setShowMenu(!showMenu)}>
            <span>Products</span>
          </OpenMenuItem>
        </Link>
        <a href="#">
          <OpenMenuItem onClick={() => setShowMenu(!showMenu)}>
            <span>About</span>
          </OpenMenuItem>
        </a>
      </ul>
    </OpenMenu>
  );
};

export default OpenNavMenu;

const OpenMenu = styled.div`
  z-index: 9999;
  background: white;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
  opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
  transition: ${({ showMenu }) => (showMenu ? "350ms" : "850ms")};
  @media (min-width: 840px) {
    display: none;
  }

  ul {
    font-family: var(--primary-font);
    font-weight: bold;
  }
  ul a {
    text-decoration: none;
    color: black;
  }
`;

const OpenMenuItem = styled.li`
  padding: 24px;
  border-bottom: solid 1px #d3d3d3;
  cursor: pointer;
  :hover {
    background: #d3d3d3;
  }
`;

const CloseBtn = styled.li`
  padding: 24px 24px 24px 200px;
  border-bottom: solid 1px #d3d3d3;
  cursor: pointer;
`;
