import { useLocation } from "react-router-dom"
function Header(){
    const data=useLocation()
    return(
        <>
        <h1 className="text-3xl">Hello {data.state.user}</h1>
        <p>I will help you to manage activities</p>
        </>
    )
}
export default Header