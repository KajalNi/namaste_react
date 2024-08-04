import React from "react";

class UserClasstwo extends React.Component{
    constructor(props){
        console.log('2nd child constructor')
        super(props)
        // console.log('2nd child',props)
        this.state = {
            namaste : 'hello',
            counter: 0
        }
    }

    componentDidMount(){
        console.log('2nd child componentDidMount')
        
    }
    render(){
        console.log('2nd child render')
        return(
            <div>
                <button className="btn" onClick={()=>{
                   
                    this.setState({
                        namaste : 'namaste'
                    })
                }}>{this.state.namaste}</button>
                <h2>I am {this.props.name}</h2>
                <h2>This is About second child</h2>
                <button className="btn" onClick={() =>{
                    this.setState({
                        counter: this.state.counter + 1
                    })
                }}>{this.state.counter}</button>
                
                
            </div>
        )
    }
}
export default UserClasstwo

{/* <div>
                <button className="btn" onClick={() => {
                    this.setState((prevState) => ({
                        namaste: prevState.namaste === "hello" ? "namaste" : "hello"
                    }));
                }}>{this.state.namaste}</button>
                <h2>I am {this.props.name}</h2>
                <h2>This is About second child</h2> */}