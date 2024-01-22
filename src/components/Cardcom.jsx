function Cardcom(props){
    
    return(
        <>
        
            <div style={{backgroundColor:props.bgcolor,flexGrow:'1'}} className="px-10 py-5 border rounded-md text-center">
                            <h2 className="font-medium text-white">{props.title}</h2>
                            <p className="font-normal text-white">{props.subtitle}</p>
            </div>
                 
        </>
    )
}
export default Cardcom