import React from "react";
import styled from "styled-components";

const ExternalCircle = styled.div`
  height: 110px;
  width: 110x;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: inset -2px -10px 2px 2px rgb(0 0 0 / 25%);
`;

const InternalCircle = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  vertical-align: middle;
  box-shadow: inset 0 5px 2px 2px rgb(0 0 0 / 25%);
`;

const Img = styled.img`
  height: 2.7rem;
  padding-top: 1.3rem;
`;

const PaperExternalCircle = styled(ExternalCircle)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: ${(props) => props.theme.gradients.paperGradient};
`;
type AppProps = {
  name: string;
};

const Element = ({ name }: AppProps) => {
  return (
    <PaperExternalCircle>
      <InternalCircle>
        <Img src={`./../../images/icon-${name}.svg`} alt='paper' />
      </InternalCircle>
    </PaperExternalCircle>
  );
};

export default Element;
