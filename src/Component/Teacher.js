import axios from "axios";
import React, { useEffect, useState } from "react";
import { AUTH_BASE_API_URL } from "../AuthService";
import { TEACHER_IMG_ICON } from "../Service/Constants";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  /*
  const teachers = [
    {
      id:1,
      name:"Upama Kabir",
      email:"upama@gmail.com",
      phone:"01323538383",
      facultyName:"CSE",
      designation : "Professor",
    },
    {
      id:2,
      name:"Mosaddek Kamal",
      email:"mosaddek@gmail.com",
      phone:"013323383",
      facultyName:"EEE",
      designation : "Lecturer",
    },
    {
      id:3,
      name:"Abu ahmed",
      email:"abu@gmail.com",
      phone:"0434538383",
      facultyName:"Robotics",
      designation : "Professor",
    },
    {
      id:4,
      name:"Saifuddin Tarek",
      email:"tarek@gmail.com",
      phone:"01323538383",
      facultyName:"Bangla",
      designation : "Professor",
    },
    
  ]
  */

  useEffect(() => {
    getAllTeachers();
  }, []);

  const getAllTeachers = async () => {
    await axios
      .get(AUTH_BASE_API_URL + "/teachers")
      .then((response) => {
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleActivate= async(user_id) => {
    await axios
      .get(AUTH_BASE_API_URL + "/activate-user/"+user_id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  const handleDeActivate =async (user_id)=>{
    await axios
    .get(AUTH_BASE_API_URL + "/deactivate-user/"+user_id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  if(teachers.length ===0)return null;
  return (
    <div className="flex m-5 flex-wrap">
      {teachers.map((teacher) => (
        <div
          className="m-2 shadow-lg rounded-lg p-2 bg-gray-200"
          key={teacher.teacher_id}
        >
          <img src={TEACHER_IMG_ICON} alt="teacher_icon" />
          <h1 className="font-semibold text-2xl">{teacher.user.username}</h1>
          <h1 className="">{teacher.faculty_name}</h1>
          <h1>{teacher?.designation}</h1>
          <h1>{teacher?.user?.phone}</h1>
          <h1>{teacher?.user?.role?.description}</h1>
          {
              teacher.user.status === false ? (
                <div className="">
                  <button
                    className="bg-green-600 m-2 text-center bg-center p-2 text-white rounded-lg"
                    onClick={() => handleActivate(teacher?.user?.id)}
                  >
                    Activate
                  </button>
                  
                </div>
              ) : (
                <button
                  className="bg-blue-600 m-2 text-center bg-center p-1 text-white rounded-lg"
                  onClick={() => handleDeActivate(teacher?.user?.id)}
                >
                  De Activate
                </button>
              )
          }
        </div>
      ))}
    </div>
  );
};

export default Teacher;
