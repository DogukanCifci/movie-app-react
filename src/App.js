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
  //========UseState KISIM ========
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState([]);
  const [movieUserSearchInput, setMovieUserSearchInput] = useState("");
  const [filmId, setFilmId] = useState("");
  const [detaylar, setDetaylar] = useState([]);
  const [videoSrc, setVideoSrc] = useState([]);

  //========DEGISKENLERIN KISIM ========
  const API_KEY = "2ffb1cad850221d084465c45e6fd0612";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const detailUrl = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${API_KEY}`;
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
    // console.log(filmId); ==> Neden Gözükmüyor ????
  };

  useEffect(() => {
    fetch(detailUrl)
      .then((res) => res.json())
      .then((data) => setDetaylar(data));
  }, [detailUrl]);

  useEffect(() => {
    fetch(videoUrl)
      .then((res) => res.json())
      .then((data) => setVideoSrc(data));
  }, [videoUrl]);

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
      console.log("New Registered User Logged in ", user);
      navigate("/");
    } catch (error) {
      alert(error);
      console.log("My Error Message : ==> ", error);
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
      navigate("/");
    } catch (error) {
      alert("Yanlis kullanici adi veya sifre!");
      console.log("My Error Message : ==> ", error);
    }
  };

  //========LOGOUT KISMI========
  const logout = async () => {
    await signOut(auth);
    if (user) {
      console.log("User logged out", user);
      setUser("");
      console.log("USER::::", user);
    } else {
      alert("Öncelikle giris yapmalisiniz!");
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
        detaylar,
        videoSrc,
      }}
    >
      <MyRouter />
    </ContainerContext.Provider>
  );
}

export default App;
