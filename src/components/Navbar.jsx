import { useContext } from "react";
import { ContainerContext } from "../App";
import {
  MenuLink,
  Logo,
  NavbarContainer,
  NavbarSagKisim,
  Login,
  Register,
  Logout,
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
          <Login user={user}>Login</Login>
        </MenuLink>
        <MenuLink to="/login">
          <Logout onClick={logout}>Logout</Logout>
        </MenuLink>
        <MenuLink to="/register">
          <Register user={user}>Register</Register>
        </MenuLink>
      </NavbarSagKisim>
    </NavbarContainer>
  );
};
export default Navbar;
