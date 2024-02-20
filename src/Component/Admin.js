import React from "react";
import Student from "./Student";
import Teacher from "./Teacher";
import { ADMIN_IMG_ICON } from "../Service/Constants";

const Admin = () => {
  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Admin Profile
        </h1>
        <img
          src={ADMIN_IMG_ICON}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover
          cursor-pointer self-center mt-2 mx-auto"
        />
      </div>
      <Student />
      <Teacher />
    </div>
  );
};

export default Admin;
