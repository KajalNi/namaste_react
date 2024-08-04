import React from "react"
import UserClass from "./Userclass"
import UserClasstwo from "./Userclasstwo"
// const About = () =>{
//     return (
//         <div className="About">
//             <h1>This is about us page</h1>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(){
        super()
        console.log('Parent constructor')
    }
    componentDidMount(){
        console.log('parent componentDidMount')
    }
    render(){
        console.log('parent ')
        return(
            <div>
               <h1>This is about us Parent component</h1>
               <UserClass  name={"Sanu"}/>
               <UserClasstwo name = {'Laddu'}/>
                
            </div>
        )
    }


}


export default About