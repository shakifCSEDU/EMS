import React from "react";
import Login from "./Login";
import RegisterStudent from "./RegisterStudent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";

const Header = () => {
  const {user,role} = useSelector((state)=>state.user);

  const isAuth = user?true:false;
  
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const handleLogout = ()=>{
    dispatch(logOut());
    navigate("/");
  }
  const handleAddStudent = ()=>{
    navigate("/admin/add-student");
  }
  const handleAddTeacher = ()=>{
    navigate("/admin/add-teacher");
  }


  return (
    <header className="bg-gray-600 shadow-lg p-4">
      <div className="flex justify-between">
        <h1 className="font bold text-3xl text-white">
          Education Management System
        </h1>
        <div className="flex gap-2">
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
