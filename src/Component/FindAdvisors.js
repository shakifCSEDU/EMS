import axios from "axios";
import React, { useEffect, useState } from "react";
import { AUTH_BASE_API_URL } from "../AuthService";
import { TEACHER_IMG_ICON } from "../Service/Constants";

const FindAdvisors = () => {
  const [sendRequest, setSendRequest] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // here we show all available teachers
    axios.get(AUTH_BASE_API_URL + "/teachers").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  const handleSendRequest = (teacher_id)=>{
      


  }

  return (
    <div className="flex m-5 flex-wrap">
      {teachers.map((teacher) => (
        <div className="m-2 shadow-lg rounded-lg p-2 bg-gray-200" key={teacher.teacher_id}>
          <img src={TEACHER_IMG_ICON} alt="teacher_icon" />
          <h1 className="font-semibold text-2xl">{teacher.user.username}</h1>
          <h1 className="">{teacher.faculty_name}</h1>
          <h1>{teacher?.designation}</h1>
          <h1>{teacher?.user?.phone}</h1>
          <h1>{teacher?.user?.role?.description}</h1>
          {teacher.user.status ? (
            <button className="bg-blue-600 m-2 text-center bg-center p-1 text-white rounded-lg"
              onClick={()=>handleSendRequest(teacher.teacher_id)}
            >
              Send Request
            </button>
          ) : (
            <div className="text-red-700 p-2 text-white">
               This teacher is now unavailable 

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FindAdvisors;
