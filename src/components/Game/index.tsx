import React from "react";
import styled from "styled-components";

import paper from "./../../images/icon-paper.svg";
import rock from "./../../images/icon-rock.svg";
import scissors from "./../../images/icon-scissors.svg";
import triangle from "./../../images/bg-triangle.svg";

const StyledGameWrapper = styled.main`
  position: relative;
  margin: 2rem 0;
`;

const ExternalCircle = styled.div`
  height: 115px;
  width: 115px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: inset -2px -10px 2px 2px rgb(0 0 0 / 25%);
`;

const InternalCircle = styled.div`
  height: 85px;
  width: 85px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  vertical-align: middle;
  box-shadow: inset 0 5px 2px 2px rgb(0 0 0 / 25%);
`;

const Img = styled.img`
  height: 2.7rem;
  padding-top: 1.5rem;
`;

const PaperExternalCircle = styled(ExternalCircle)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.gradients.paperGradient};
`;

const RockExternalCircle = styled(ExternalCircle)`
  position: absolute;
  top: 50px;
  background: ${(props) => props.theme.gradients.rockGradient};
`;

const ScissorsExternalCircle = styled(ExternalCircle)`
  right: 0;
  position: absolute;
  top: 0;
  background: ${(props) => props.theme.gradients.scissorsGradient};
`;

const Triangle = styled.img`
  z-index: -1;
  padding-top: 3rem;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Game = () => {
  return (
    <StyledGameWrapper>
      <PaperExternalCircle>
        <InternalCircle>
          <Img src={paper} alt='paper' />
        </InternalCircle>
      </PaperExternalCircle>
      <RockExternalCircle>
        <InternalCircle>
          <Img src={rock} alt='rock' />
        </InternalCircle>
      </RockExternalCircle>
      <ScissorsExternalCircle>
        <InternalCircle>
          <Img src={scissors} alt='scissors' />
        </InternalCircle>
      </ScissorsExternalCircle>
      <Triangle src={triangle} alt='triangle' />
    </StyledGameWrapper>
  );
};

export default Game;
