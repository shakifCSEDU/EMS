import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Service/firebase";
import axios from "axios";
import { AUTH_BASE_API_URL } from "../AuthService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRole, addToken } from "../redux/userSlice";

const OAuth = ({doAction}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try{
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth,provider);
        
        if(doAction === "register-student"){
          
          const obj = {
            "department_name":null,
            "batch_no":null,
            "user": {
              "username":result.user.displayName,
              "email": result.user.email,
              "phone":null,
              "password":"password",
              "role":{
                  "name":"ROLE_STUDENT",
                  "description":null
              }
            },
            "teacher":null
                      }
        
          await axios
          .post(AUTH_BASE_API_URL + "/register-student",obj)
          .then((response) => {

          console.log(response.data);
          navigate("/wait-user");
        })
        .catch((error) => {
          console.error(error);
      });
      
    }else if(doAction === "register-teacher"){

      const obj =  {
        "faculty_name":null,
        "designation":null,
          "user": {
            "username":result.user.displayName,
            "email": result.user.email,
            "phone": null,
            "password":"password",
            "role":{
                "name":"ROLE_TEACHER",
                "description":null
            }
          }
      }
  
      await axios
        .post(AUTH_BASE_API_URL + "/register-teacher",obj)
        .then((response) => {
          console.log(response.data);
          navigate("/wait-user");
        })
        .catch((error) => {
          console.error(error);
        });


    }
    else{
          // log in function
          const loginObj = {
            usernameOrEmail: result.user.displayName,
            password: "password",
          };
      
          await axios
            .post(AUTH_BASE_API_URL + "/login", loginObj)
            .then((response) => {
              console.log(response.data);
              dispatch(addToken("Bearer " + response.data.accessToken));
              dispatch(addRole(response.data.role));
      
              const role = response.data.role;
              
              if (response.data.role === "ROLE_ADMIN") {
                navigate("/admin");
              } else if (role === "ROLE_STUDENT") {
                navigate("/student");
                
              } else {
                navigate("/teacher");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }

    }catch(error){
      console.log('could not sign in with google',error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase opacity-85"
    >
      Continue with google
    </button>
  );
};

export default OAuth;
