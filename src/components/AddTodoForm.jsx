import { useState } from "react"

function AddTodoForm(props){
    const activityitem=props.activityitem
    const setactivityitem=props.setactivityitem
    const [newactivity,newsetactivity]=useState("")
    function handlechange(evt){
        newsetactivity(evt.target.value)
    }
    function addactivity(){
        setactivityitem([...activityitem,{id:activityitem.length+1,activity:newactivity}])
        newsetactivity("")
    }
    return(
        <>
            <div style={{flexBasis:'23%'}}>
                <h1 className="2xl font-bold text-black mb-2">Manage Activity</h1>
                <input type="text" className="border p-1" value={newactivity} onChange={handlechange}/>
                <button className="bg-black p-1 text-white" onClick={addactivity}>Add</button>
            </div>
            
        </>
    )
}
export default AddTodoForm