import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STUDENT_IMG_ICON } from "../Service/Constants";

const StudentHomepage = () => {
  const navigate = useNavigate();

  const [requestStatus,setRequestStatus] = useState("");
 
  const handleFindAdvisors = ()=>{
      navigate("/student/find-advisors");
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Student Profile</h1>

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
          defaultValue={""}
          
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="email"
       
       
          className="border p-3 rounded-lg "
        />
      <input
          type="text"
          placeholder="phone no"
       
          defaultValue={""}
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="department name"
          
          defaultValue={""}
          className="border p-3 rounded-lg "
        />


        <input
          type="password"
          placeholder="password"
        
          className="border p-3 rounded-lg "
        />
        {
          requestStatus===null ? (
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
                send request
            </button>

          ):(

            requestStatus==="pending"?(
            <div
            className="border p-3 rounded-lg bg-cyan-400 font-semibold"  
            >
              {requestStatus}
            </div>
            ):(
              <div>
                <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 px-5"
                  onClick={()=>handleFindAdvisors()}
                >
                  find advisors
                </button>
              </div>

            ) 
          )

        }
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
    </div>
  );
};

export default StudentHomepage;
