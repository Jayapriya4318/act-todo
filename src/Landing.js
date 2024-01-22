import { useState } from "react"
function Userdata(){
  const [users,setuser]=useState([
        {
            username:"jaya",
            password:"123"
        }
    ])
  return(
    
    <>
    <BrowserRouter>
<Routes>
  <Route path={'/'} element={<Login users={users} setuser={setuser}></Login>}></Route>
  <Route path={'/signup'} element={<Signup users={users} setuser={setuser}></Signup>}></Route>
  <Route path={'/Landing'} element={<Landing></Landing>}></Route>
</Routes>

 </BrowserRouter>
    </>
  )
}
export default Userdata