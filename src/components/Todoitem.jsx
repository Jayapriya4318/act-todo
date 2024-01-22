function Todoitem(props){
    const activityitem=props.activityitem
    const setactivityitem=props.setactivityitem
    const deletedoto=(delid)=>{
        var tempval=activityitem.filter((item)=>{
            if(item.id===delid){
                return false
            }else{
                return true
            }
        })
        setactivityitem(tempval)
    }
    return(
    <>
    <div className="flex justify-between">
    <p className="mt-3">{props.index}.{props.activity}</p> 
    <button onClick={()=>deletedoto(props.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600 bg-slate-100 p-1 rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
    </button>
    </div>
    </>
    )
}
export default Todoitem