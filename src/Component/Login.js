import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRole,
  loginApiCall,
  saveLoggedInUser,
  storeRole,
  storeToken,
} from "../AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const role = getRole();
  if (role != null) {
    if (role == "ROLE_ADMIN") navigate("/admin");
    else if (role == "ROLE_STUDENT") navigate("/student");
    else navigate("/teacher");
  }

  const loginHandler = async () => {
    // here check the authentication procedure..

    await loginApiCall(email, password)
      .then((response) => {
        console.log(response.data);

        const token = "Bearer " + response.data.accessToken;
        storeToken(token);
        storeRole(response.data.role);

        saveLoggedInUser(email);
        navigate("/admin");

        //window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="font-semibold text-white mx-5 border p-3 bg-blue-600 rounded-lg hover:opacity-80"
            onClick={() => loginHandler()}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
