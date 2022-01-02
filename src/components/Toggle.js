import React,{Component} from "react";


class Toggle extends Component{
  constructor(props){
    super(props)
    this.state={
      lightIs: "OFF",
      color: "Cornsilk"
    }  
  }
  
  // offOn = () => {
  //   (this.state.lightIs === "OFF") ? this.setState({lightIs: "ON", color: 'yellow'}) : this.setState({lightIs: "OFF", color: 'white'})
  // }
  

  render(){
    return(
      <>






        {/* <h1 id= "title" >Lightbulb Challenge</h1>
        <button onClick={this.offOn} style={{backgroundColor: this.state.color}} id="square" >
          {this.state.lightIs}
        </button> */}

      </>
    )
  }
}
export default Toggle
  

