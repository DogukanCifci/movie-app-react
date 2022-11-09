import React from "react";

export const LoginLogutRegister = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Register User</h1>
          <input
            type="text"
            id="userRegisterEmail"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            id="userRegisterPassword"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Register</button>
        </div>
        <div>
          <h1>Login User</h1>
          <input
            type="text"
            id="userLoginEmail"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            id="userLoginPassword"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </div>
        <h4> User Logged in : </h4>
        {user?.email}
        <button onClick={logout}>Sign Out</button>

        <br />
        <br />
        <br />
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        {/* <img src={localStorage.getItem("profilPic")} alt="" /> */}
      </div>
    </div>
  );
};
