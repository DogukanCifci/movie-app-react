//IMPORT KISIMLARI
import { ToastContainer } from "react-toastify";
//index.jste toastify css kismini da import ettik
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
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./helpers/Toastify";

//=====DEGISKENLERIN DIGER COMPONENTLERDE DE GÖZÜKMESI ICIN =======
export const ContainerContext = createContext();
//=======FUNCTION KISMINA GECIS =========
function App() {
  //========UseState KISIM ========
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState([]);
  const [movieUserSearchInput, setMovieUserSearchInput] = useState("");
  const [filmId, setFilmId] = useState("");

  //========DEGISKENLERIN KISIM ========
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieUserSearchInput}`;

  //========DATA CEKME KISMI ========
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (movieUserSearchInput === "") {
      const veri = await axios.get(url);
      setData([veri.data]);
      console.log(movieUserSearchInput);
    } else {
      const veri = await axios.get(movieUrl);
      setData([veri.data]);
    }
  };
  //console.log(data);
  //Film arama verisi

  //...Detayli veriyi id ile cekme fonksiyonu
  const detayliVeriCekme = (gönderilenFilmId) => {
    setFilmId(gönderilenFilmId);
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
  const register = async (navigate) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      //console.log("New Registered User Logged in ", user);
      toastSuccessNotify("You registered succesfully!");
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
      console.log("My Error Message : ==> ", err);
    }
  };

  //========LOGIN KISMI========
  const login = async (navigate) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("User Logged in ", user);
      toastSuccessNotify("You logged in succesfully!");
      navigate("/");
    } catch (error) {
      toastErrorNotify("Yanlis kullanici adi veya sifre!");
      console.log("My Error Message : ==> ", error);
    }
  };

  //========LOGOUT KISMI========
  const logout = async () => {
    await signOut(auth);
    if (user) {
      console.log("User logged out", user);
      toastWarnNotify("You logged out successfully!");
      setUser("");
      console.log("USER::::", user);
    } else {
      toastErrorNotify("signOutta hata olustu");
      console.log("signOutta hata olustu");
    }
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
        user,
        loginEmail,
        setMovieUserSearchInput,
        movieUserSearchInput,
        detayliVeriCekme,
      }}
    >
      <ToastContainer />
      <MyRouter />
    </ContainerContext.Provider>
  );
}

export default App;
