import { useContext } from "react";
import { ContainerContext } from "../App";
import {
  MenuLink,
  Logo,
  NavbarContainer,
  NavbarSagKisim,
  Login,
  Register,
} from "../styles/NavbarStyle";

const Navbar = () => {
  const { getData, user, logout } = useContext(ContainerContext);

  const logoClicked = () => {
    getData();
  };

  return (
    <NavbarContainer>
      <MenuLink to="/">
        <Logo onClick={logoClicked}>MOVIE APP</Logo>
      </MenuLink>

      <NavbarSagKisim>
        <span style={{ color: "white" }} id="userName">
          {user?.email && user.email}
        </span>
        <MenuLink to="/login">
          <Login>Login</Login>
        </MenuLink>
        <MenuLink to="/login">
          <Login onClick={logout}>Logout</Login>
        </MenuLink>
        <MenuLink to="/register">
          <Register>Register</Register>
        </MenuLink>
      </NavbarSagKisim>
    </NavbarContainer>
  );
};
export default Navbar;
