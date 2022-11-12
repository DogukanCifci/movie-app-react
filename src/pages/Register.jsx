import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerContext } from "../App";
import Navbar from "../components/Navbar";
import {
  LeftImage,
  RegisterButton,
  RegisterContainer,
  RegisterHeader,
  MainRightDownPart,
  MainRightPart,
  Label,
  Name,
  Surname,
  Email,
  Password,
} from "../styles/RegisterStyles";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigate tanimlama kismi
  const navigate = useNavigate();
  //=En yukardaki verileri cagirma kismi
  const { register, setRegisterPassword, setRegisterEmail } =
    useContext(ContainerContext);

  //Register clicked
  const registerClicked = (e) => {
    e.preventDefault();
    register(navigate);
  };
  const emailChangeFunction = (value) => {
    setRegisterEmail(value);
    setEmail(value);
  };
  const passwordChangeFunction = (value) => {
    setRegisterPassword(value);
    setPassword(value);
  };

  return (
    <>
      <Navbar />
      <RegisterContainer>
        <LeftImage src="https://images.pexels.com/photos/13912832/pexels-photo-13912832.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"></LeftImage>
        <MainRightPart>
          <RegisterHeader>
            <h2 style={{ fontSize: "60px" }}>Register</h2>
          </RegisterHeader>

          <form onSubmit={registerClicked}>
            <MainRightDownPart>
              <Label htmlFor="registerName">Name</Label>
              <Name
                type="text"
                id="registerName"
                name={name}
                //  placeholder="Please Enter your name..."
                onKeyDown={(e) =>
                  e.keyCode === 13 ? registerClicked() : undefined
                }
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Label htmlFor="registerSurname">Surname</Label>
              <Surname
                surname={surname}
                type="text"
                id="registerSurame"
                //  placeholder="Please Enter your surname..."
                onKeyDown={(e) =>
                  e.keyCode === 13 ? registerClicked() : undefined
                }
                required
                onChange={(e) => setSurname(e.target.value)}
              />
              <Label htmlFor="registerEmail1">Email</Label>
              <Email
                email={email}
                type="text"
                id="registerEmail1"
                // placeholder="Enter an email adress..."
                onChange={(e) => emailChangeFunction(e.target.value)}
                onKeyDown={(e) =>
                  e.keyCode === 13 ? registerClicked() : undefined
                }
                required
              />
              <Label htmlFor="createPassword">Create a Password</Label>
              <Password
                password={password}
                required
                type="password"
                id="createPassword"
                //placeholder="Enter a password..."
                onChange={(e) => {
                  passwordChangeFunction(e.target.value);
                }}
                onKeyDown={(e) =>
                  e.keyCode === 13 ? registerClicked() : undefined
                }
              />

              <RegisterButton type="submit">Register</RegisterButton>
            </MainRightDownPart>
          </form>
        </MainRightPart>
      </RegisterContainer>
    </>
  );
};
export default Register;
