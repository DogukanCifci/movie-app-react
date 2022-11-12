// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANVuxHAs7YPTShHurhbd5C_nr0myWbAW0",
  authDomain: "movie-app-42f80.firebaseapp.com",
  projectId: "movie-app-42f80",
  storageBucket: "movie-app-42f80.appspot.com",
  messagingSenderId: "148476754574",
  appId: "1:148476754574:web:b8d6039b847dae6f87e7df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilPic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilPic", profilPic);
      console.log("User with google Logged in ", result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
