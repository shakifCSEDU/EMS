import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_BASE_API_URL, loginApiCall } from "../AuthService";
import { useDispatch} from "react-redux";
import {
  addBatchNo,
  addDepartmentName,
  addDesignation,
  addFacultyName,
  addId,
  addName,
  addRole,
  addStudentId,
  addTeacherId,
  addToken,
  addUser,
} from "../redux/userSlice";
import axios from "axios";

const Login = () => {
  const email = useRef(null);

  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async () => {
    // here check the authentication procedure..

    const loginObj = {
      usernameOrEmail: email?.current?.value,
      password: password?.current?.value,
    };

    await axios
      .post(AUTH_BASE_API_URL + "/login", loginObj)
      .then((response) => {
        console.log(response.data);

        dispatch(addUser(email?.current?.value));
        dispatch(addToken("Bearer " + response.data.accessToken));
        dispatch(addName(response.data.name));
        dispatch(addId(response.data.id));
        dispatch(addRole(response.data.role));

        const role = response.data.role;
        const status = response.data.status;

        if (response.data.role === "ROLE_ADMIN") {

          navigate('/admin');
        }
        else if(role === "ROLE_STUDENT"){
          dispatch(addStudentId(response.data.student_id));
          dispatch(addBatchNo(response.data.batch_no));
          dispatch(addDepartmentName(response.data.department_name));
          if(status)
            navigate("/student");
          else
            navigate("/wait-user");
        }else{
       
          dispatch(addTeacherId(response.data.teacher_id));
          dispatch(addDesignation(response.data.designation));
          dispatch(addFacultyName(response.data.faculty_name));
          if(status)
            navigate("/teacher");
          else
            navigate("/wait-user");  
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  const handleRegisterStudent = ()=>{
    navigate('/register-student');

  }
  const handleRegisterTeacher = ()=>{
    navigate('/register-teacher');
  }


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
            ref={email}
          />

          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            ref={password}
          />
          <button
            className="font-semibold text-white mx-5 border p-3 bg-blue-600 rounded-lg hover:opacity-80"
            onClick={() => loginHandler()}
          >
            Log in
          </button>
          <div className="flex font-semibold">
            Register an account
            <h1 className="mx-3 text-green-600 font-semibold hover:cursor-pointer underline"
              onClick={()=>handleRegisterStudent()}
            >
              Student
            </h1>
            <h1 className="text-blue-600 font-semibold hover:cursor-pointer underline"
              onClick={()=>handleRegisterTeacher()}
            >
              Teacher
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
