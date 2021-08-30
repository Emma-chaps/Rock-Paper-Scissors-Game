import React, { useState } from "react";
import styled from "styled-components";
import rulesImg from "./../../images/image-rules.svg";
import closeBtnImg from "./../../images/icon-close.svg";

const StylesRules = styled.footer`
  text-align: center;
`;

const RulesButton = styled.button`
  border: 3px solid ${(props) => props.theme.colors.headerOutline};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.8rem 2rem 0.7rem 2.2rem;
  background-color: #182042;
  color: white;
  font-size: 0.9em;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
`;

const RulesModal = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  min-width: 90vw;
  max-width: 90vw;
  top: 35vh;
  right: 5vw;
  left: 5vw;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: start;
  @media (min-width: 700px) {
    right: 20vw;
    left: 20vw;
    min-width: 60vw;
    max-width: 60vw;
  }
  @media (min-width: 1000px) {
    right: 25vw;
    left: 25vw;
    min-width: 50vw;
    max-width: 50vw;
  }
  @media (min-width: 1050px) {
    right: 35vw;
    left: 35vw;
    min-width: 30vw;
    max-width: 30vw;
  }
  @media (min-width: 1900px) {
    right: 40vw;
    left: 40vw;
    min-width: 20vw;
    max-width: 20vw;
  }
`;

const RulesTitle = styled.p`
  justify-self: start;
  grid-column: 1/2;
  grid-row: 1/2;
  color: ${(props) => props.theme.colors.darkText};
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0.7rem 0 0 0.7rem;
`;

const CloseBtn = styled.button`
  justify-self: end;
  grid-column: 3/4;
  grid-row: 1/2;
  border: none;
  background-color: white;
  color: grey;
  margin: 0.7rem 0.7rem 0 0;
`;

const RulesImg = styled.img`
  justify-self: center;
  grid-column: 1/4;
  grid-row: 2/3;
  margin: 1.5rem 0;
`;

const Rules = () => {
  const [statusModal, setStatusModal] = useState(false);
  const handleOpenModal = () => {
    setStatusModal(true);
  };
  const handleCloseModal = () => {
    setStatusModal(false);
  };

  return (
    <StylesRules>
      <RulesButton onClick={handleOpenModal}>Rules</RulesButton>
      {statusModal && (
        <RulesModal>
          <RulesTitle>RULES</RulesTitle>
          <CloseBtn onClick={handleCloseModal}>
            <img src={closeBtnImg} alt='close button' />
          </CloseBtn>
          <RulesImg src={rulesImg} alt='Rules' />
        </RulesModal>
      )}
    </StylesRules>
  );
};

export default Rules;
