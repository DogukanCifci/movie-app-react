import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 85vh;
`;

export const LeftImage = styled.img`
  width: 55%;
`;

export const MainRightPart = styled.div`
  background-color: lightgray;
  width: 45%;
`;

export const RegisterHeader = styled.div`
  font-size: 3rem;
  color: black;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const MainRightDownPart = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const RegisterInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 16px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: blue;
  text-align: center;
  color: white;
  border: none;
  margin: 15px 0;
  /* border-radius: 15px; */
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    filter: grayscale(1);
  }
`;
