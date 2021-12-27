import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      lightIs: "OFF"
    }  
  }

  offOn = () => {
    if (this.state.lightIs === "OFF"){
      this.setState({lightIs: "ON"})
    } else if (this.state.lightIs === "ON"){
      this.setState({lightIs: "OFF"})
    }
  }
  




  render(){
    return(
      <>
        <button onClick={this.offOn} style={{backgroundColor: 'yellow'}} id="square" >
          {this.state.lightIs}
        </button>

      </>
    )
  }
}
export default App

