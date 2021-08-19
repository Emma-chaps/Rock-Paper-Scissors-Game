import React from "react";
import styled from "styled-components";
import logo from "./../../images/logo.svg";

const HeaderContainer = styled.header`
  padding-top: 1.5em;
`;

const Header = () => {
  return (
    <HeaderContainer className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      {/*<p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a> */}
    </HeaderContainer>
  );
};

export default Header;
