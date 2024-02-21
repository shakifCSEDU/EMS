import axios from "axios";
import React, { useEffect, useState } from "react";
import { AUTH_BASE_API_URL } from "../AuthService";
import { useSelector } from "react-redux";
import { STUDENT_IMG_ICON } from "../Service/Constants";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  const { teacher_id } = useSelector((state) => state.user);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    await axios
      .get(AUTH_BASE_API_URL + "/teacher/" + teacher_id + "/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelRequest = async (student_id) => {
    const obj = {
      student: {
        student_id,
      },
      teacher: {
        teacher_id,
      },
    };

    await axios
      .post(AUTH_BASE_API_URL + "/teacher/cancel_request", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleRemove = async(student_id) => {

    const obj = {
      student: {
        student_id,
      },
      teacher: {
        teacher_id,
      },
    };

    await axios
      .post(AUTH_BASE_API_URL + "/teacher/remove", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleAccept = async (student_id)=>{
    const obj = {
      student: {
        student_id,
      },
      teacher: {
        teacher_id,
      },
    };

    await axios
      .post(AUTH_BASE_API_URL + "/teacher/accept", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });



  }


  // Early binding
  if (students.length === 0) return;

  return (
    <div className="flex m-5 flex-wrap">
      {students.map((student) => (
        <div
          className="m-2 shadow-lg rounded-lg p-2 bg-gray-200 px-5"
          key={student.student_id}
        >
          <img src={STUDENT_IMG_ICON} alt="teacher_icon" />

          <h1 className="font-semibold text-2xl">{student.user.username}</h1>
          <h1 className="">{student.department_name}</h1>
          <h1>{student.batch_no}</h1>
          <h1>{student?.user?.phone}</h1>
          <h1>{student?.user?.role?.description}</h1>
          {student.request_status === "pending" ? (
            <div className="">
              <button
                className="bg-red-600 m-2 text-center bg-center p-1 text-white rounded-lg"
                onClick={() => handleCancelRequest(student.student_id)}
              >
                Cancel Request
              </button>
              <br/>
              <button className="bg-green-600 m-2 text-center bg-center p-1 text-white rounded-lg"
                onClick={()=>handleAccept(student.student_id)}
              >
                Accept Request
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-600 m-2 text-center bg-center p-1 text-white rounded-lg"
              onClick={() => handleRemove(student.student_id)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageStudents;
