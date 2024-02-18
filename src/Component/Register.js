import React, { useState } from "react";
import { BASE_API_URL } from "../Service/ApiService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegistration = async () => {
    const userObj = {
      username,
      email,
      phone,
      password,
    };

    try {
      const res = await fetch(BASE_API_URL + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      });

      const data = await res.text();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Register</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone "
            className="border p-3 rounded-lg"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            onClick={handleRegistration}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
