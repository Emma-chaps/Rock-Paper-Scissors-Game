import React from "react";
import styled from "styled-components";
// import { myTheme } from "../../my-theme";
import logo from "./../../images/logo.svg";

const StyledHeader = styled.header`
  padding: 0.9rem;
  border: 3px solid ${(props) => props.theme.colors.headerOutline};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 12vh;
  padding: 0.3rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  height: 4.3rem;
  width: 5rem;
  background-color: white;
  padding: 0.7rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const PTitleScore = styled.p`
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.scoreText};
`;

const PNbScore = styled.p`
  font-size: 3.5em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkText};
`;

const Header = () => {
  return (
    <StyledHeader className='App-header'>
      <Image src={logo} className='App-logo' alt='logo' />
      <Wrapper>
        <PTitleScore>score</PTitleScore>
        <PNbScore>1</PNbScore>
      </Wrapper>
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
    </StyledHeader>
  );
};

export default Header;
