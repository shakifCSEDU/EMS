import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
export const AUTH_BASE_API_URL = "http://localhost:8080/api/auth";


export const loginApiCall = (usernameOrEmail,password)=>axios.post(AUTH_BASE_API_URL+"/login",{usernameOrEmail,password});

export const storeToken = (token)=> localStorage.setItem("token",token);
export const getToken  = ()=> {
  

}
export const storeRole = (role)=>localStorage.setItem("role",role);
export const getRole = ()=>localStorage.getItem("role");

export const saveLoggedInUser = (username)=>sessionStorage.setItem("authenticatedUser",username); 

export const isUserLoggedIn = ()=>{
  const username = sessionStorage.getItem("authenticatedUser");

  if(username == null){
    return false;
  }
  else {
    return true;
  }
}

export const getLoggedInUser = ()=>{
  const username = sessionStorage.getItem("authenticatedUser");
  return username;  
}

export const logout = ()=>{
  localStorage.clear();
  sessionStorage.clear();
}