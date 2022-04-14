import logo from "../assets/Ricoma Logo.svg";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useState } from "react";
import OpenNavMenu from "./OpenNavMenu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <span>
            <img src={logo} alt="logo" />
          </span>
        </Logo>
        <NavItems>
          <li>
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/products">Products</Link>
            </span>
          </li>
          <li>
            <span>
              <a href="#">About</a>
            </span>
          </li>
        </NavItems>
        <IconContainer>
          <ShoppingCart>
            <span>
              <HiOutlineShoppingCart size={24} color={"white"} />
            </span>
          </ShoppingCart>
          <MenuBars onClick={() => setShowMenu(!showMenu)}>
            <FiMenu size={24} color={"white"} />
          </MenuBars>
          {showMenu ? (
            <OpenNavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          ) : (
            <></>
          )}
        </IconContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background: var(--primary-color);
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 10rem;
  align-items: center;
  @media (max-width: 840px) {
    padding: 1rem 2rem;
  }
`;
const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 5rem;
  @media (max-width: 840px) {
    display: none;
  }
  li :hover {
    color: var(--secondary-color);
  }
  li span a {
    text-decoration: none;
    color: white;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }
`;
const Logo = styled.div`
  width: 6rem;
  img {
    width: 100%;
  }
`;
const ShoppingCart = styled.div`
  cursor: pointer;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
const MenuBars = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  @media (min-width: 840px) {
    display: none;
  }
`;
