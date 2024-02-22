import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STUDENT_IMG_ICON } from "../Service/Constants";
import { useSelector } from "react-redux";
import { AUTH_BASE_API_URL } from "../AuthService";
import axios from "axios";

const StudentHomepage = () => {
  const navigate = useNavigate();
  const { user, name, department_name, student_id } = useSelector(
    (store) => store.user
  );

  const [requestStatus, setRequestStatus] = useState("");
  const email = useRef(user);
  const username = useRef(name);
  const departmentName = useRef(department_name);
  const password = useRef(null);

  useEffect(() => {
    getRequestStatus();
  }, []);

  const getRequestStatus = async () => {
    await axios
      .get(AUTH_BASE_API_URL + "/student/check-status/" + student_id)
      .then((response) => {
        setRequestStatus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFindAdvisors = () => {
    navigate("/student/find-advisors");
  };
  const handleUpdate = async () => {
    // update student profile himself

    const newStudentObj = {
      student_id: student_id,
      department_name: departmentName?.current?.value,
      user: {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      },
    };

    await axios
      .post(AUTH_BASE_API_URL + "/update-student", newStudentObj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });



  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Student Profile
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        <img
          src={STUDENT_IMG_ICON}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover
          cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="username"
          defaultValue={name}
          ref={username}
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="email"
          defaultValue={user}
          ref={email}
          className="border p-3 rounded-lg "
        />

        <input
          type="text"
          placeholder="department name"
          ref={departmentName}
          defaultValue={department_name}
          className="border p-3 rounded-lg "
        />

        <input
          type="password"
          placeholder="enter your new password"
          ref={password}
          className="border p-3 rounded-lg "
        />
        {requestStatus === null ? (
          <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
            send request
          </button>
        ) : requestStatus === "pending" ? (
          <div className="border p-3 rounded-lg bg-cyan-400 font-semibold">
            {requestStatus}
          </div>
        ) : (
          <div>
            <button
              className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 px-5"
              onClick={() => handleFindAdvisors()}
            >
              find advisors
            </button>
          </div>
        )}
        <button
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
          onClick={() => handleUpdate()}
        >
          update
        </button>
      </form>
    </div>
  );
};

export default StudentHomepage;
