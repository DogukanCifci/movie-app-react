import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 87.5vh;
`;

export const LeftImage = styled.img`
  width: 55%;
  height: 88vh;
`;

export const MainRightPart = styled.div`
  background-color: #3d3c42;

  width: 45%;
  border: 2px solid red;
`;

export const RegisterHeader = styled.div`
  font-size: 3rem;
  color: white;
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
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  padding-left: 10px;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.05);
    height: 50px;
    background-color: orange;
  }
`;
export const Name = styled(RegisterInput)`
  height: ${({ name }) => (name ? "50px" : "5px")};
`;
export const Surname = styled(RegisterInput)`
  height: ${({ surname }) => (surname ? "50px" : "5px")};
`;
export const Email = styled(RegisterInput)`
  height: ${({ email }) => (email ? "50px" : "5px")};
`;
export const Password = styled(RegisterInput)`
  height: ${({ password }) => (password ? "50px" : "5px")};
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: red;
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

export const Label = styled.div`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 5px;
  color: white;
`;
