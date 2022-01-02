import React, { Component } from 'react';
import Toggle from './components/Toggle';
import offToggle from './images/offToggle.jpeg';//
import onToggle from './images/onToggle.jpeg';
import './App.css'
//I struggled importing these toggle switches.  I couldn't figure out the correct way of brining them in.  I was
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      position: offToggle,
    }  
  }
// I felt that a ternary operator would be ideal for the toggle
  flip = () => {
    (this.state.position === offToggle) ? this.setState({position: onToggle}) : this.setState({position: offToggle})
  }


  render(){
    return(
      <>
        <Toggle />
        <img onClick={this.flip} src={this.state.position} alt="somthing"/>


      </>
    )
  }
}
export default App

