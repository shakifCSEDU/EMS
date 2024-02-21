import React, { useState } from 'react'
import { AUTH_BASE_API_URL } from '../AuthService';
import axios from 'axios';

const RegisterTeacher = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description,setDescription] = useState("");


  const handleRegister = async ()=>{
    const teacherObj =  {
      "faculty_name":facultyName,
      "designation":designation,
        "user": {
          "username":username,
          "email": email,
          "phone": phone,
          "password":password,
          "role":{
              "name":"ROLE_TEACHER",
              "description":description
          }
        }
    }

    await axios
      .post(AUTH_BASE_API_URL + "/register-teacher", teacherObj)
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
        Register Teacher for EMS
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
          placeholder="faculty name"
          className="border p-3 rounded-lg"
          
          onChange={(e) => setFacultyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="designation"
          className="border p-3 rounded-lg"
         
          onChange={(e) => setDesignation(e.target.value)}
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
  )
}

export default RegisterTeacher