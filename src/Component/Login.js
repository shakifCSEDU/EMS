import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../AuthService";
import { useDispatch, useSelector } from "react-redux";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const loginHandler = async () => {
    // here check the authentication procedure..

    await loginApiCall(email, password)
      .then((response) => {
        console.log(response.data);
        dispatch(addUser(email));
        dispatch(addToken("Bearer " + response.data.accessToken));
        dispatch(addName(response.data.name));
        dispatch(addId(response.data.id));

        if (response.data.role === "ROLE_ADMIN") {
          dispatch(addRole("admin"));
          navigate("/admin");
        } else if (response.data.role === "ROLE_STUDENT") {
          dispatch(addRole("student"));
          dispatch(addStudentId(response.data.student_id));
          dispatch(addBatchNo(response.data.batch_no));
          dispatch(addDepartmentName(response.data.department_name));
          navigate("/student");
        } else {
          dispatch(addRole("teacher"));
          dispatch(addTeacherId(response.data.teacher_id));
          dispatch(addDesignation(response.data.designation));
          dispatch(addFacultyName(response.data.faculty_name));
          navigate("/teacher");
        }
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
