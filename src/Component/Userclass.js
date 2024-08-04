import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log('1st child constructor')
        super(props)
        // console.log('1st child',props)
        this.state = {
            namaste : "hello",
            counter : 0
        }

    }

 componentDidMount(){
    console.log('1st child componentDidMount')
    this.intervalId = setInterval(()=>{
        console.log('setInterval triggered')
        this.setState({
            counter : this.state.counter + 1
        })
    },1000)

 }

componentWillUnmount(){
    console.log('component unmount')
    clearInterval(this.intervalId)
}
    render() {
        console.log('1st child Render ')
        return(
            <div>
                <button className="btn" onClick={()=>{
                    this.setState({
                        namaste : "namaste"
                    })
                }}>{this.state.namaste}</button>
                <h2>I am  {this.props.name}</h2>
                <h2 >This is About first child</h2>
                <button className="btn" onClick={() =>{
                    this.setState({
                        counter : this.state.counter + 1 
                    })
                }}>{this.state.counter}</button>
                
                
            </div>
        )
    }
}

export default UserClass