import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: aqua;
  width: 100%;
  min-height: 80vh;
`;

export const MovieSearchPart = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 30%;
  height: 50px;
  border: none;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  background-color: brown;
  width: 110px;
  height: 50px;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 5px;
  color: white;
  font-size: larger;
  transition: all 0.5s;
  border: none;
  &:hover {
    cursor: pointer;
    filter: grayscale(1);
    transform: scale(0.9);
  }
`;
