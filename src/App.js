//IMPORT KISIMLARI
import "./App.css";
import { auth } from "./auth/Firebase";
import { signInWithGoogle } from "./auth/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import MyRouter from "./router/MyRouter";

//=====DEGISKENLERIN DIGER COMPONENTLERDE DE GÖZÜKMESI ICIN =======
export const ContainerContext = createContext();
//=======FUNCTION KISMINA GECIS =========
function App() {
  //========DEGISKENLERIN KISIM ========
  const url = "";
  //========UseState KISIM ========
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState([]);
  //========DATA CEKME KISMI ========

  const getData = async () => {
    //fetch(url).then((res)=>res.json()).then((data)=>setData(data))
    const veri = await axios.get(url);
    setData(veri);
  };

  //======onAuthStateChanged KISMI ========
  const [user, setUser] = useState({});
  //User giris yaptiktan sonra sayfa yenilendiginde userin kaybolmamasi icin bu statei olusuturuyoruz.

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  /*  const registerEmailInput = document.getElementById("userRegisterEmail");
  const registerPasswordInput = document.getElementById("userRegisterPassword"); */
  // console.log(registerEmail);
  // console.log(registerPassword);

  //register olurken en az 6 karakterli password kullanilmali.Default olarak kendiliginden geliyor.

  //========REGISTER KISMI ========
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log("My Error Message : ==> ", error);
    }
  };

  //========LOGIN KISMI========
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log("My Error Message : ==> ", error);
    }
  };

  //========LOGOUT KISMI========
  const logout = async () => {
    await signOut(auth);
    console.log(user);
  };

  return (
    <ContainerContext.Provider
      value={{
        login,
        logout,
        register,
        getData,
        signInWithGoogle,
        setRegisterEmail,
        setLoginEmail,
        setRegisterPassword,
        setLoginPassword,
        data,
      }}
    >
      <MyRouter />
    </ContainerContext.Provider>
  );
}

export default App;
