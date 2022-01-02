import React, { Component } from "react";
import bulbOn from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOn.jpeg"
import bulbOff from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOff.jpeg";


class Bulb extends Component{
    constructor(props){
      super(props)
      this.state={
        bulbIs: bulbOff
      }  
    }

    offOn = () => {
      (this.state.bulbIs === bulbOff) ? this.setState({bulbIs: bulbOn}) : this.setState({bulbIs: bulbOff})
    }
    
  
    render(){
      return(
        <>

            <img onClick={this.offOn} src={this.state.bulbIs} alt="a light bulb"/>

  
        </>
      )
    }
  }
  export default Bulb