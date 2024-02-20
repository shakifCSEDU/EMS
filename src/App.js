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

function App() {
  const AuthenticatedRoute = ({ children }) => {
    const isAuth = isUserLoggedIn();
    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/admin"
            element={
              <AuthenticatedRoute>
                <Admin />
              </AuthenticatedRoute>
            }
          />
          <Route path="/admin/add-student" element={<RegisterStudent />} />
          <Route path="/admin/add-teacher" element = {<RegisterTeacher/>}/>
          <Route path="/student" element={<StudentHomepage />} />
          <Route path="/teacher" element={<TeacherHomepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
