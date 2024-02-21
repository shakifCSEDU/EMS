import "./App.css";
import Admin from "./Component/Admin";
import Header from "./Component/Header";
import Login from "./Component/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentHomepage from "./Component/StudentHomepage";
import TeacherHomepage from "./Component/TeacherHomepage";
import { isUserLoggedIn } from "./AuthService";
import RegisterStudent from "./Component/RegisterStudent";
import RegisterTeacher from "./Component/RegisterTeacher";
import Home from "./Component/Home";
import { useSelector } from "react-redux";
import ManageStudents from "./Component/ManageStudents";
import FindAdvisors from "./Component/FindAdvisors";
import axios from "axios";

function App() {

  const { user ,token} = useSelector((state) => state.user);
  axios.interceptors.request.use(
    function (config) {
      
      config.headers["Authorization"] = token;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );





  const AuthenticatedRoute = ({ children }) => {
    const isAuth = user?true:false;
    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  };

  /*
<Route
            path="/admin"
            element={
              <AuthenticatedRoute>
                <Admin />
              </AuthenticatedRoute>
            }
          />
*/

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin" element={
                 <AuthenticatedRoute>
                 <Admin />
               </AuthenticatedRoute>
           }/>
         
          <Route path="/student" element={
            <AuthenticatedRoute>
              <StudentHomepage />
            </AuthenticatedRoute>
          
          }/>

          <Route path="/teacher" element={
                <AuthenticatedRoute>
                <TeacherHomepage />
              </AuthenticatedRoute>
            
          }/>
          <Route path="/admin/add-student" element={
                <AuthenticatedRoute>
                <RegisterStudent />
              </AuthenticatedRoute>
            
          }/>
          <Route path="/admin/add-teacher" element={
                <AuthenticatedRoute>
                <RegisterTeacher />
              </AuthenticatedRoute>
            
          }/>
          <Route path="/teacher/manage-students" element={
                <AuthenticatedRoute>
                <ManageStudents />
              </AuthenticatedRoute>
            
          }/>
      <Route path="/student/find-advisors" element={
                <AuthenticatedRoute>
                <FindAdvisors/>
              </AuthenticatedRoute>
            
          }/>


        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
