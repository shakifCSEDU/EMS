import React, { useRef } from "react";
import { useNavigate} from "react-router-dom";
import { TEACHER_IMG_ICON } from "../Service/Constants";
import { useSelector } from "react-redux";
import axios from "axios";
import { AUTH_BASE_API_URL } from "../AuthService";

const TeacherHomepage = () => {
  const {user,name,designation,faculty_name,teacher_id} = useSelector(state=>state.user);
  
  const username = useRef(name);
  const email = useRef(user);
  const password = useRef(null);
  const facultyName = useRef(faculty_name);


  const navigate = useNavigate();

  const handleManageStudents = ()=>{
    
    navigate("/teacher/manage-students");

  }
  const handleUpdate =async ()=>{
      const newTeacherObj = {
        "teacher_id":teacher_id,
        "faculty_name":facultyName?.current?.value,
        "user":{
            "username":username?.current?.value,
            "email":email?.current?.value
        }
    }
    await axios
    .post(AUTH_BASE_API_URL + "/update-teacher", newTeacherObj)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  }

  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Teacher Profile
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <img
            src={TEACHER_IMG_ICON}
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
            ref={email}
            defaultValue={user}
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="faculty name"
            ref={facultyName}
            defaultValue={faculty_name}
            className="border p-3 rounded-lg "
          />

          <input
            type="password"
            placeholder="enter your new password"
            ref={password}
            className="border p-3 rounded-lg "
          />

          <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
            onClick={()=>handleUpdate()}
          >
            update
          </button>
          <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
            onClick={()=>handleManageStudents()}
          >
            manage students
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherHomepage;
