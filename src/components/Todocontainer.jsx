import AddTodoForm from './AddTodoForm'
import Todolist from "./Todolist"
import { useState } from 'react'
function Todocontainer(){
        const [activityitem,setactivityitem]=useState([{id:1,activity:'go for walk'},{id:2,activity:'breakfast'}])
    return(
        <>
            <AddTodoForm activityitem={activityitem} setactivityitem={setactivityitem}></AddTodoForm>
            <Todolist activityitem={activityitem} setactivityitem={setactivityitem}></Todolist>
        </>
    )
}
export default Todocontainer