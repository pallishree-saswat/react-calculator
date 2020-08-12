import React, { Component } from 'react';
import './App.css';
import Key from "./component/Key"
import Output from "./component/Output"

class App extends Component {

  constructor(){
    super();

    this.state = {
        result: ""
    }
}

buttonPressed = buttonName =>{
  if(buttonName === "="){
    this.calculate();
  }else if(buttonName === "C"){
    this.reset();
  } else if(buttonName==="CE"){
    this.backspace();
  }
  else {
    this.setState({
      result: this.state.result + buttonName
    });
  };


}
backspace =() =>{
  this.setState({
    result: this.state.result.slice(0, -1)
  })
}

reset = () => {
  this.setState({
      result: ""
  })
};



calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};



  render() {
    return (
      <div className="App">
        <div className="calculator-body">
        <Output result={this.state.result} />
        <Key  buttonPressed={this.buttonPressed}/>
        </div>
   
        
      </div>
    );
  }
}

 


export default App;
