import React from "react";
import Login from "./Login";
import { getRole, isUserLoggedIn, logout } from "../AuthService";
import RegisterStudent from "./RegisterStudent";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuth = true;
  const role = getRole();

  const navigate = useNavigate();

  const handleLogout = ()=>{
    logout();
  }
  const handleAddStudent = ()=>{
      // here Admin add or register student
      navigate("/admin/add-student");    
  }

  const handleAddTeacher = () =>{
     // here Add add or register teacher
      navigate("/admin/add-teacher");


  }





  return (
    <header className="bg-gray-600 shadow-lg p-4">
      <div className="flex justify-between">
        <h1 className="font bold text-3xl text-white">
          Education Management System
        </h1>
        <div className="flex gap-2">
        {
            role == "ROLE_ADMIN" && (
                <div>
                <button className="p-4 mx-5 border bg-green-600 rounded-lg text-white font-semibold hover:opacity-80"
                  onClick={()=>handleAddStudent()}
                >
                  Add Student
                </button>
         
              <button className="p-4 mx-5 border bg-blue-600 rounded-lg text-white font-semibold hover:opacity-80"
                  onClick={()=>handleAddTeacher()}
                >
                  Add Teacher
                </button>
                </div>
            )
          }
        {isAuth && (
          <button className="p-4 mx-5 border bg-red-600 rounded-lg text-white font-bold hover:opacity-80"
            onClick={()=>handleLogout()}
          >
            Logout
          </button>
        )}
      </div>


      </div>
    </header>
  );
};

export default Header;
