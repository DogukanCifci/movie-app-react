import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerContext } from "../App";
import { signInWithGoogle } from "../auth/Firebase";
import Navbar from "../components/Navbar";
import {
  ForgotPassword,
  LeftImage,
  LoginButton,
  LoginContainer,
  LoginHeader,
  LoginInput,
  MainRightDownPart,
  MainRightPart,
} from "../styles/LoginStyle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  //Navigate tanimlama kismi

  //=En yukardaki verileri cagirma kismi
  const { login, setLoginEmail, setLoginPassword } =
    useContext(ContainerContext);

  //======Logine tiklandiginda====
  const loginClicked = () => {
    login(navigate);

    //Dogru girsem de hata veriyor????
  };
  return (
    <>
      <Navbar />
      <LoginContainer>
        <LeftImage src="https://images.pexels.com/photos/13918680/pexels-photo-13918680.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></LeftImage>
        <MainRightPart>
          <LoginHeader>
            <h2>Login</h2>
          </LoginHeader>

          <MainRightDownPart>
            <label
              htmlFor="email"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Email
            </label>
            <LoginInput
              type="text"
              id="email"
              placeholder="Enter your email adress..."
              onChange={(e) => setLoginEmail(e.target.value)}
              onKeyDown={(a) => (a.keyCode === 13 ? loginClicked() : undefined)}
            />
            <label
              htmlFor="password"
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "20px",
                color: "white",
              }}
            >
              Password
            </label>
            <LoginInput
              type="password"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setLoginPassword(e.target.value)}
              onKeyDown={(a) => (a.keyCode === 13 ? loginClicked() : undefined)}
            />

            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <LoginButton onClick={loginClicked}>Login</LoginButton>
            <LoginButton onClick={() => signInWithGoogle(navigate)}>
              <FaGoogle
                style={{
                  marginRight: "10px",
                  marginTop: "3px",
                  fontSize: "1.2rem",
                }}
              />{" "}
              Continue with Google
            </LoginButton>
          </MainRightDownPart>
        </MainRightPart>
      </LoginContainer>
    </>
  );
};
export default Login;
