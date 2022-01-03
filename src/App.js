import React, { Component } from 'react';
import Buttons from './components/Buttons';
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      key: "value"
    }  
  }

  render(){
    return(
      <>
        <Buttons />
      </>
    )
  }
}
export default App