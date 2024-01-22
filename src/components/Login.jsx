import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Login(props){
    const users=props.users;
    const setuser=props.setuser;

    const navigate=useNavigate();

    const [euname,eunameset]=useState();
    const [epassword,epasswordset]=useState();
    const [msg,setmsg]=useState(false)
    const unameonchange=(evt)=>{
        eunameset(evt.target.value)
    }
    const epasswordonchange=(evt)=>{
        epasswordset(evt.target.value)
    }
    
    function loginform(){
        var userfound=false;
        users.forEach(function(item){
            if(item.username==euname && item.password==epassword){
                console.log("login successfully");
                setmsg(false);
                userfound=true;
                navigate("/landing",{state:{user:euname}})
            }
            eunameset("");
            epasswordset("");
        })
       if(userfound==false){
    console.log('pleaswe login first');
    setmsg(true)
    }
    }  


    return(
        <div>
        <div className="bg-black p-10">
            <div className="bg-[#efefef] border p-10 rounded-sm">
                <h1 className="text-2xl font-semibold">Hey Hi</h1>
                {
                    msg?<p className="text-red-500">please signup before your login</p>:<p>I hope you manage your activities after login</p>
                }
                <input type="text" className="p-2 border rounded-sm mt-3" placeholder="UserName" value={euname} onChange={unameonchange} /><br/>
                <input type="password" className="p-2 border rounded-sm mt-3" placeholder="Password" value={epassword} onChange={epasswordonchange} /><br/>
                <button className="btn bg-violet-400 py-3 px-5 rounded mt-3" onClick={loginform}>Login</button>
                <p className="mt-3">If don't have account? <Link to={'/signup'} className="text-violet-500 underline">signup</Link></p>
            </div>
        </div>
        
        </div>
    )
}
export default Login