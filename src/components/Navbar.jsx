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
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { getData, user, logout } = useContext(ContainerContext);

  const logoClicked = () => {
    getData();
  };

  return (
    <NavbarContainer>
      <MenuLink to="/">
        <img
          src="https://logos.textgiraffe.com/logos/logo-name/Dogukan-designstyle-america-m.png"
          width={130}
          height={80}
          alt=""
        />
        <Logo onClick={logoClicked}> MOVIE</Logo>
      </MenuLink>

      <NavbarSagKisim>
        <span style={{ color: "red", fontSize: "20px" }} id="userName">
          {user?.email && user.email}
        </span>
        <MenuLink to="/login">
          <Login user={user}>Login</Login>
        </MenuLink>
        <MenuLink to="/login">
          <Logout user={user} onClick={logout}>
            Logout
          </Logout>
        </MenuLink>
        <MenuLink to="/register">
          <Register user={user}>Register</Register>
        </MenuLink>
        <FaUser style={{ color: "white", marginLeft: "10px" }} />
      </NavbarSagKisim>
    </NavbarContainer>
  );
};
export default Navbar;
