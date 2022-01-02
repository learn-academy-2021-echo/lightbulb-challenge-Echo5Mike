import React,{Component} from "react";
import offToggle from '/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/offToggle.jpeg';
import onToggle from '/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/onToggle.jpeg';
import bulbOn from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOn.jpeg"
import bulbOff from "/Users/learnacademy/Desktop/Echo/lightbulb-challenge-Echo5Mike/src/images/lightOff.jpeg";



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

  // offOn = () => {
  //   (this.state.bulbIs === bulbOff) ? this.setState({bulbIs: bulbOn}) : this.setState({bulbIs: bulbOff})
  // }
  

  render(){
    return(
      <>
        <img src={this.state.bulbIs} alt="a light bulb"/>
        <brk/>
        <img onClick={this.flip} src={this.state.position} alt="a off/on toggle switch"/>



        {/* <h1 id= "title" >Lightbulb Challenge</h1>
        <button onClick={this.offOn} style={{backgroundColor: this.state.color}} id="square" >
          {this.state.lightIs}
        </button> */}

      </>
    )
  }
}
export default Toggle