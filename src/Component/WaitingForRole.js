import axios from "axios";
import React, { useEffect, useState } from "react";
import { AUTH_BASE_API_URL } from "../AuthService";
import { STUDENT_IMG_ICON, USER_IMG_ICON } from "../Service/Constants";

const WaitingForRole = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllWaitingUser();
  }, []);

  const getAllWaitingUser = async () => {
    await axios
      .get(AUTH_BASE_API_URL + "/get-unalloted-users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTeacherRole = async (id) => {
    const teacher_role = {
      role: {
        name: "ROLE_TEACHER",
      },
    };

    await axios
      .put(AUTH_BASE_API_URL + "user-to-role/" + id, teacher_role)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleStudentRole = async (id) => {
    const student_role = {
      role: {
        name: "ROLE_STUDENT",
      },
    };

    await axios
      .put(AUTH_BASE_API_URL + "/user-to-role/" + id, student_role)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-purple-600  font-bold text-center">
        List of Waiting User
      </h1>
      <div className="flex m-5 flex-wrap">
        {users.map((user) => (
          <div
            className="m-2 shadow-lg rounded-lg p-2 bg-gray-200 px-5"
            key={user.id}
          >
            <img src={USER_IMG_ICON} alt="user_icon" />

            <h1 className="font-semibold text-2xl">{user.username}</h1>
            <h1 className="font-semibold">{user.email}</h1>

            <h1>{user?.phone}</h1>
            <div className="flex p-1">
              <h1 className="p-1 font-semibold">Role for:</h1>
              <button
                className="bg-blue-600 text-white p-1 rounded-lg mx-1"
                onClick={() => handleStudentRole(user.id)}
              >
                Student
              </button>
              <button
                className="bg-yellow-600 text-white p-1 rounded-lg"
                onClick={() => handleTeacherRole(user.id)}
              >
                Teacher
              </button>
            </div>

            {/* {user.status === false ? (
              <div className="">
                <button className="bg-green-600 m-2 text-center bg-center p-2 text-white rounded-lg">
                  Activate
                </button>
              </div>
            ) : (
              <button className="bg-blue-600 m-2 text-center bg-center p-1 text-white rounded-lg">
                De Activate
              </button>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaitingForRole;
