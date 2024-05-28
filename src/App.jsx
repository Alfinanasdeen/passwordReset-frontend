import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
