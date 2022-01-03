import React,{Component} from "react";
import offToggle from "../images/offToggle.jpeg";
import onToggle from "../images/onToggle.jpeg";
import bulbOff from "../images/lightOff.jpeg";
import bulbOn from "../images/lightOn.jpeg";



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