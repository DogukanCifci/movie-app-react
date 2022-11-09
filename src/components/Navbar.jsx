import {
  MenuLink,
  Logo,
  NavbarContainer,
  NavbarSagKisim,
  Login,
  Register,
} from "../styles/NavbarStyle";

const Navbar = () => {
  return (
    <NavbarContainer>
      <MenuLink to="/">
        <Logo>MOVIE APP</Logo>
      </MenuLink>

      <NavbarSagKisim>
        <MenuLink to="/login">
          <Login>Login</Login>
        </MenuLink>
        <MenuLink to="/register">
          <Register>Register</Register>
        </MenuLink>
      </NavbarSagKisim>
    </NavbarContainer>
  );
};
export default Navbar;
