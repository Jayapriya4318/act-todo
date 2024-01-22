import Cardcom from "./Cardcom";
import Header from "./Header";
import Todoconntainer from "./Todocontainer";
import { useLocation } from "react-router-dom"
function Landing(){
    const data=useLocation()
    return(
        <>

        <div className="bg-black p-10">
      <div className="bg-[#efefef] p-10 rounded-md">
        <Header />
        <div className="flex gap-10 flex-wrap justify-between my-5">
        <Cardcom bgcolor={'#8272da'} title={'23'} subtitle={'Chennai'}/>
        <Cardcom bgcolor={'#fd6663'} title={'Decmber 20'} subtitle={'14:23:20'}/>
        <Cardcom bgcolor={'#fca201'} title={'Build using react'} subtitle={'React'}/>
        </div>
        <div className="flex flex-wrap my-10 gap-10">
            <Todoconntainer></Todoconntainer>
        </div>
        
      </div>
    </div>
        </>
    )
}
export default Landing