import styled from "styled-components";

type CircleType = {
  optionName: string;
  color: string;
};

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
  grid-area: ${(props: CircleType) => props.optionName};
  background: ${(props: CircleType) => props.color};
`;

export const InternalCircle = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  vertical-align: middle;
  box-shadow: inset 0 5px 2px 2px rgb(0 0 0 / 25%);
`;

export const Img = styled.img`
  height: 2.7rem;
  padding-top: 1.3rem;
`;
