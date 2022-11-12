import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #181818;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
export const Logo = styled.h1`
  color: white;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: aqua;
  }
`;

export const NavbarSagKisim = styled.div`
  display: flex;
  font-size: 27px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Login = styled.div`
  color: white;
  display: ${({ user }) => (user ? "none" : "block")};
  transition: 0.5s all ease-in-out;
  &:hover {
    color: aqua;
    transform: scale(1.2);
  }
`;
export const Register = styled.div`
  color: white;
  display: ${({ user }) => (user ? "none" : "block")};
  transition: 0.5s all ease-in-out;
  &:hover {
    color: aqua;
    transform: scale(1.2);
  }
`;
export const Logout = styled.div`
  color: white;
  display: ${({ user }) => (user ? "block" : "none")};
  transition: 0.5s all ease-in-out;
  &:hover {
    color: aqua;
    transform: scale(1.2);
  }
`;
