import axios from "axios";
import React, { useState } from "react";
import { AUTH_BASE_API_URL, getToken } from "../AuthService";

const RegisterStudent = () => {
  // Add a request interceptor
  

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [description,setDescription] = useState("");

  const handleRegister = async () => {
    const studentObj = {
      "department_name":departmentName,
      "batch_no": batchNo,
      "user": {
        "username":username,
        "email": email,
        "phone": phone,
        "password":password,
        "role":{
            "name":"ROLE_STUDENT",
            "description":description
        }
      },
      "teacher":null
      }
    
    console.log("called APi");
    
    await axios
      .post(AUTH_BASE_API_URL + "/register-student", studentObj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="p-2 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">
          Register Student for EMS
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone "
            className="border p-3 rounded-lg"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="department name"
            className="border p-3 rounded-lg"
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <input
            type="text"
            placeholder="batch no"
            className="border p-3 rounded-lg"
            onChange={(e) => setBatchNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="description"
            className="border p-3 rounded-lg"
            onChange={(e) => setDescription(e.target.value)}
          />




          <button
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            onClick={() => handleRegister()}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
