import { useState } from "react";
import { Link } from "react-router-dom"
import {useNavigate } from "react-router-dom";

function Signup(props){
    const users=props.users;
    const setuser=props.setuser;
    const navigate=useNavigate();

    const [euname,eunameset]=useState();
    const [eupassword,eupasswordset]=useState();
    function handlename(evt){
        eunameset(evt.target.value)
    }
    function handlepassword(evt){
        eupasswordset(evt.target.value)
    }
    function signupfun(){
        setuser([...users,{username:euname,password:eupassword}]);
         navigate("/")
    }
    return(
        <>
        <div className="p-10 bg-black">
            <div className="bg-black p-10">
            <div className="bg-[#efefef] border p-10 rounded-sm">
                <h1 className="text-2xl font-semibold">Hey Hi</h1>
                <p>I hope you manage your activities after login</p>
                <input type="text" className="p-2 border rounded-sm mt-3" placeholder="UserName" value={euname} onChange={handlename} /><br/>
                <input type="password" className="p-2 border rounded-sm mt-3" placeholder="Password" value={eupassword} onChange={handlepassword} /><br/>
                <input type="password" className="p-2 border rounded-sm mt-3" placeholder="Confirm Password" /><br/>
                <button className="btn bg-violet-400 py-3 px-5 rounded mt-3" onClick={signupfun}>Signup</button>
                <p className="mt-3">Already have an account? <Link to={'/'} className="text-violet-500 underline">Login</Link></p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Signup