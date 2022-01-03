import React, { Component } from "react";
import Toggle from "./Toggle";
import "../App.css"

class Buttons extends Component{
    constructor(props){
        super(props)
        this.state={
          onScreen: 0,
          onScreenArray:[]
        }  
    }
    addToScreen=()=>{
        this.setState({OnScreen: this.state.onScreen + 1})
        this.state.onScreenArray.push(this.state.onScreen)
    }

    removeFromScreen=()=>{
        this.setState({OnScreen: this.state.onScreen - 1})
        this.state.onScreenArray.pop(this.state.onScreen)
    }

    render(){
        return(
            <>
                <h1 id= "title" >Lightbulb Challenge</h1>
        
                <button id="add" onClick={this.addToScreen}>Add</button> 
                <button id= "dda"onClick={this.removeFromScreen}>ddA</button>
                <h1>{this.state.onScreenArray.map(value=><h1><Toggle /></h1>)}</h1>
                
                <h6 id= "whom" >By: Raul M.</h6>
            </>
        )
    }
}
export default Buttons