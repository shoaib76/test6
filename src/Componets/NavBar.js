import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyels } from './ButtonStyels';

import styled from "styled-components";

export const NavBar = () =>
(

  <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
  {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}


        <Link to='/'>Home</Link>
        <Link to='/ProdectList' className="ml-3">Prodects</Link>
        <Link to='/About' className="ml-3">About</Link>
        
        <Link to="/Cart" className="ml-auto">
          <ButtonStyels>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonStyels>
        </Link>  
        </Nav>
)


const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
