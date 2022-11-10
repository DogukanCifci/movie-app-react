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
  position: relative;
`;

export const ImageContainer = styled.div`
  border: 1px solid red;
  &::before {
    content: attr(data-tooltip);
    color: black;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: red;
    position: absolute;
  }
`;
export const CardImg = styled.img`
  width: 300px;
  height: 400px;
`;
export const CardTitle = styled.h2`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
