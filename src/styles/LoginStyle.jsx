import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftImage = styled.img`
  width: 55%;
`;

export const MainRightPart = styled.div`
  background-color: lightgray;
  width: 45%;
`;

export const LoginHeader = styled.div`
  font-size: 3rem;
  color: black;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainRightDownPart = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 16px;
`;

export const ForgotPassword = styled.div`
  text-decoration: underline;
  color: blue;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
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
