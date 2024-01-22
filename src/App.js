import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/signup";
import Landing from "./components/Landing";
function App() {
  const [users,setuser]=useState([
        {
            username:"jaya",
            password:"123"
        }
    ])
  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path={'/'} element={<Login users={users} setuser={setuser}></Login>}></Route>
  <Route path={'/signup'} element={<Signup users={users} setuser={setuser}></Signup>}></Route>
  <Route path={'/Landing'} element={<Landing></Landing>}></Route>
</Routes>

 </BrowserRouter>
    </>
  );
}

export default App;
