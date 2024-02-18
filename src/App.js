import "./App.css";
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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
