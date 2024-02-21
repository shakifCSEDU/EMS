import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEACHER_IMG_ICON } from "../Service/Constants";
import { useSelector } from "react-redux";

const TeacherHomepage = () => {
  const {user,name,designation,faculty_name} = useSelector(state=>state.user);



  const navigate = useNavigate();

  const handleManageStudents = ()=>{
    
    navigate("/teacher/manage-students");

  }
  const handleUpdate = ()=>{
    
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
           
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="email"
           
            defaultValue={user}
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="faculty name"
           
            defaultValue={faculty_name}
            className="border p-3 rounded-lg "
          />

          <input
            type="password"
            placeholder="enter your new password"
          
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
