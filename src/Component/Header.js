import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlinestatus"



const Header = () =>{
    const [btn,setbtn]= useState("Login")
    console.log("this is useState ",useState())
    console.log('header rendered ')
    const onlineStatus = useOnlineStatus()
    console.log('value of onlinestatus',onlineStatus)

    

    

    return(
        <div className="header flex justify-between  bg-green-200">
            
                <img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" className="img w-28"></img>
            
                <ul className="flex  items-center  ">
                <li>OnlineStatus : {onlineStatus ? '✅' : '🔴'}</li>
                <Link to={"/"}> <li className="mx-5">Home</li></Link> 
                <Link to={"/about"}><li className="mx-5">About Us</li></Link> 
                <Link to={"/contact"}><li className="mx-5">Contact Us</li></Link> 
                 <li className="mx-5">Cart🛒</li>
                 <Link to = "/swiggyMart"><li className="mx-5">SwiggyMart</li></Link>
                 <button className="mx-5  border border-black p-2 rounded-md bg-gray-300 border-none px-3 font-semibold" onClick={()=>{
                    btn === "Login" ? setbtn('Logout') : setbtn('Login')
                     }}>{btn}</button>
 
                
                </ul>
            
  
            

            
            
            
        </div>
    )
  }

export default Header