import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 88vh;
`;

export const LeftImage = styled.img`
  width: 55%;
`;

export const MainRightPart = styled.div`
  background-color: #3d3c42;
  width: 45%;
  border: 2px solid red;
`;

export const LoginHeader = styled.div`
  font-size: 3rem;
  color: white;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  color: red;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: red;
  text-align: center;
  font-size: 1.1rem;
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
