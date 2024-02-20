import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { STUDENT_IMG_ICON } from "../Service/Constants";

const StudentHomepage = () => {

  const [requestStatus,setRequestStatus] = useState("pending");


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
          id="username"
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          defaultValue={""}
          className="border p-3 rounded-lg "
        />
      <input
          type="text"
          placeholder="phone no"
          id="email"
          defaultValue={""}
          className="border p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="department name"
          id="email"
          defaultValue={""}
          className="border p-3 rounded-lg "
        />


        <input
          type="password"
          placeholder="password"
          id="password"
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
                here we query and show the advisor id
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
