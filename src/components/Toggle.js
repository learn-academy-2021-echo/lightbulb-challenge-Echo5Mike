import React,{Component} from "react";
import offToggle from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/offToggle.jpeg";
import onToggle from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/onToggle.jpeg";
import bulbOn from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOff.jpeg"
import bulbOff from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOn.jpeg";



class Toggle extends Component{
  constructor(props){
    super(props)
    this.state={
      position: offToggle,
      bulbIs: bulbOff
    }  
  }
  flip = () => {
    (this.state.position === offToggle) ? this.setState({position: onToggle, bulbIs: bulbOn}) : this.setState({position: offToggle, bulbIs: bulbOff})
  }
  
  render(){
    return(
      <>
        <img id="bulb" src={this.state.bulbIs} alt="a light bulb"/>
        
        <img id="toggle" onClick={this.flip} src={this.state.position} alt="a off/on toggle switch"/>


      </>
    )
  }
}
export default Toggle