import styled, { keyframes } from "styled-components";

type CircleType = {
  selectedOption: { name: string; color: string };
  rotate?: string;
  cursor?: string;
};

type CursorType = {
  cursor?: string;
};

/*------------------------
       Animations
-------------------------*/

export const rotate = keyframes`
from {
  transform: rotateX(0deg);
}

to {
  transform: rotateX(359deg);
}
`;

/*------------------------
       Game Option's
-------------------------*/
export const ExternalCircle = styled.div<CircleType>`
  height: 110px;
  width: 110x;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: inset -2px -10px 2px 2px rgb(0 0 0 / 25%);
  grid-area: ${(props: CircleType) => props.selectedOption.name};
  background: ${(props: CircleType) => props.selectedOption.color};
  animation: ${(props: CircleType) => (props.rotate ? rotate : "none")} 1s
    backwards;
  cursor: ${(props: CircleType) => (props.cursor ? "pointer" : "auto")};
  @media (min-width: 700px) {
    height: 130px;
    width: 130px;
  }
`;

export const InternalCircle = styled.div<CursorType>`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  vertical-align: middle;
  box-shadow: inset 0 5px 2px 2px rgb(0 0 0 / 25%);
  cursor: ${(props: CursorType) => (props.cursor ? "pointer" : "auto")};
  @media (min-width: 700px) {
    height: 100px;
    width: 100px;
  }
`;

export const Img = styled.img<CursorType>`
  height: 40px;
  padding-top: 1.3rem;
  cursor: ${(props: CursorType) => (props.cursor ? "pointer" : "auto")};
  @media (min-width: 700px) {
    height: 50px;
    padding-top: 1.6rem;
  }
`;
