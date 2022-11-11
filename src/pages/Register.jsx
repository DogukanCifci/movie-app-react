import { useContext } from "react";
import { ContainerContext } from "../App";
import Navbar from "../components/Navbar";
import {
  LeftImage,
  RegisterButton,
  RegisterContainer,
  RegisterHeader,
  RegisterInput,
  MainRightDownPart,
  MainRightPart,
} from "../styles/RegisterStyles";

const Register = () => {
  //Navigate tanimlama kismi

  //=En yukardaki verileri cagirma kismi
  const { register, setRegisterPassword, setRegisterEmail } =
    useContext(ContainerContext);

  //Register clicked
  const registerClicked = () => {
    register();
  };

  return (
    <>
      <Navbar />
      <RegisterContainer>
        <LeftImage src="https://media.istockphoto.com/id/1271787791/de/foto/login-und-passwort-cyber-sicherheitskonzept-datenschutz-und-gesicherter-internetzugang.jpg?b=1&s=612x612&w=0&k=20&c=LnE7pF3hnZ-o0OCYeSQ0xxxR7Fwqr2D9lOdN2QA1no4="></LeftImage>
        <MainRightPart>
          <RegisterHeader>
            <h2 style={{ fontSize: "60px" }}>Register</h2>
          </RegisterHeader>

          <MainRightDownPart>
            <label
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
              htmlFor="registerName"
            >
              Name
            </label>
            <RegisterInput
              type="text"
              id="registerName"
              placeholder="Please Enter your name..."
              required
            />
            <label
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "20px",
              }}
              htmlFor="registerSurname"
            >
              Surname
            </label>
            <RegisterInput
              type="text"
              id="registerSurame"
              placeholder="Please Enter your surname..."
              required
            />
            <label
              htmlFor="registerEmail"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Email
            </label>
            <RegisterInput
              type="text"
              id="registerEmail"
              placeholder="Enter an email adress..."
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label
              htmlFor="createPassword"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Create a Password
            </label>
            <RegisterInput
              type="password"
              id="createPassword"
              placeholder="Enter a password..."
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <RegisterButton onClick={registerClicked}>Register</RegisterButton>
          </MainRightDownPart>
        </MainRightPart>
      </RegisterContainer>
    </>
  );
};
export default Register;
