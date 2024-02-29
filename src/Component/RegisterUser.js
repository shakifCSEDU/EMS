import axios from "axios";
import React, { useRef, useState } from "react";
import { AUTH_BASE_API_URL, getToken } from "../AuthService";
import { useNavigate } from "react-router-dom";
import OAuth from "./OAuth";

const RegisterUser = () => {
  
  const navigate = useNavigate();

  const username = useRef(null);
  const email  = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);


  const handleRegister = async () => {
    const userObj = {
          "username" : username?.current?.value,
          "email" : email?.current?.value,
          "password":password?.current?.value,
          "phone":phone?.current?.value,
          "role":null
      }
     await axios
      .post(AUTH_BASE_API_URL + "/register-user", userObj)
      .then((response) => {
        console.log(response.data);
        navigate("/wait-user");

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="p-2 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">
          Register an User Account 
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            ref={username}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            ref={password}
          />
          <input
            type="number"
            placeholder="Phone "
            className="border p-3 rounded-lg"
            ref={phone}
          />
          <button
            type="button" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <OAuth doAction="register-user"/>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
