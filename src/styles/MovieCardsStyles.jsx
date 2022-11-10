import styled from "styled-components";

export const MovieShowsPart = styled.div`
  background-color: red;
`;
export const MovieCardsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
`;

export const Cards = styled.div`
  background-color: blue;
  color: orange;
  width: 300px;
  text-align: center;
`;

export const CardImg = styled.img`
  width: 300px;
  height: 400px;
  &::after {
    content: "asdsa";
  }
`;
export const CardTitle = styled.h2`
  color: white;
`;
