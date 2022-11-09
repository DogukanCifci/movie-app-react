import { signInWithGoogle } from "./auth/Firebase";

function App() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      {/* <img src={localStorage.getItem("profilPic")} alt="" /> */}
    </div>
  );
}

export default App;
