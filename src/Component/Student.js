import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AUTH_BASE_API_URL } from '../AuthService';
import { STUDENT_IMG_ICON } from '../Service/Constants';

const Student = () => {
  const [students,setStudents] = useState([]);
  /*
  const students = [
    {
      id:1,
      name:"Md Shakif Sahriar",
      email:"shakif@gmail.com",
      phone:"01859538383",
      departmentName:"CSE",
      batchNo : "25",
      advisorName:"Upama kabir"
    },
    {
      id:2,
      name:"Asif Ahmed",
      email:"asif@gmail.com",
      phone:"0133438383",
      departmentName:"EEE",
      batchNo : "23",
      advisorName:"Mosaddek kamal"
    },
    {
      id:3,
      name:"Shah Ali rafi",
      email:"rafi@gmail.com",
      phone:"09432438383",
      departmentName:"Robotics",
      batchNo : "15",
      advisorName:"Kamal hossain"
    },
    {
      id:4,
      name:"Farhad nayeem",
      email:"farhad@gmail.com",
      phone:"01832338383",
      departmentName:"PENTA",
      batchNo : "13",
      advisorName:"Abu ahmed"
    }
  ]
  */


  // fetch all students
  useEffect(()=>{
    getAllStudents();
  },[]);

  const getAllStudents = async()=>{
    await axios
      .get(AUTH_BASE_API_URL + "/students")
      .then((response) => {
        //console.log(response.data);
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleActivate = async(user_id)=>{
    await axios
      .get(AUTH_BASE_API_URL + "/activate-user/"+user_id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleDeActivate = async(user_id)=>{
    await axios
    .get(AUTH_BASE_API_URL + "/deactivate-user/"+user_id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }



  if(students.length === 0)return null;

  return (
    <div >
      <h1 className='text-2xl text-purple-600  font-bold text-center'>List of All Students</h1>
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
          {student.user.status === false ? (
            <div className="">
              <button
                className="bg-green-600 m-2 text-center bg-center p-2 text-white rounded-lg"
                onClick={() => handleActivate(student?.user?.id)}
              >
                Activate
              </button>
              
            </div>
          ) : (
            <button
              className="bg-blue-600 m-2 text-center bg-center p-1 text-white rounded-lg"
              onClick={() => handleDeActivate(student?.user?.id)}
            >
              De Activate
            </button>
          )}
        </div>
      ))}

      </div>

    </div>
  );
}

export default Student