import Todoitem from "./Todoitem"

function Todolist(props){
    const activityitem=props.activityitem
    const setactivityitem=props.setactivityitem
    return(
        <>
        <div style={{flexBasis:'70%'}} className="bg-purple-600 p-5 rounded-md text-black">
                <h2 className="font-bold text-2xl">Today Activities</h2>
                {activityitem===0?<p>You have not entered anthing</p>:""}
                {
                    activityitem.map((item,index)=>{
                        return(
                            <Todoitem id={item.id} activity={item.activity} index={index+1} activityitem={activityitem} setactivityitem={setactivityitem}></Todoitem>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Todolist