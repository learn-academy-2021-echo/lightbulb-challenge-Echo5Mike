import React, { Component } from 'react';
import Toggle from 'src/components/Toggle.js'
import './App.css'
//I struggled importing these toggle switches.  I couldn't figure out the correct way of brining them in.  I was
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

                <button id="add" onClick={this.addToScreen}>Add</button> 
                <button id= "dda"onClick={this.removeFromScreen}>ddA</button>

                <h1>{this.state.onScreenArray.map(value=><h1><Toggle /></h1>)}</h1>
                


            </>
        )
    }
}
export default Buttons