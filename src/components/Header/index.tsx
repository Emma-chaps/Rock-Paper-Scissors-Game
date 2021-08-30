import React from "react";
import styled from "styled-components";
import logo from "./../../images/logo.svg";

const StyledHeader = styled.header`
  padding: 0.7rem;
  border: 3px solid ${(props) => props.theme.colors.headerOutline};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  height: 11vh;
  max-height: 100px;
  padding: 0.3rem 0;
  @media (min-width: 800px) AND (min-height: 700px) {
    height: 16vh;
  } ;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  height: 3.3rem;
  width: 4.3rem;
  background-color: white;
  padding: 0.7rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  @media (min-width: 800px) AND (min-height: 700px) {
    height: 5rem;
    width: 6rem;
  }
`;

const PTitleScore = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.scoreText};
  @media (min-width: 800px) AND (min-height: 700px) {
    font-size: 1.3em;
  }
`;

const PNbScore = styled.p`
  font-size: 2.8em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkText};
  @media (min-width: 800px) AND (min-height: 700px) {
    font-size: 4em;
  }
`;

type AppProps = {
  counter: number;
};

const Header = ({ counter }: AppProps) => {
  return (
    <StyledHeader className='App-header'>
      <Image src={logo} className='App-logo' alt='logo' />
      <Wrapper>
        <PTitleScore>score</PTitleScore>
        <PNbScore>{counter}</PNbScore>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
