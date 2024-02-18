import "./App.css";
import Admin from "./Component/Admin";
import Header from "./Component/Header";
import Login from "./Component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
