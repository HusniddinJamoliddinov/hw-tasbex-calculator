import React, { Component } from "react";
import "./kalkulyator.scss";

class Kalkulyator extends Component {

  state = {
    firstNum: null,
    secondNum: null,
    currentOperator: null,
    result: null,
  }

  // handleNum(num){
  //   if(this.state.firstNum == null){
  //     this.setState(this.state.firstNum = num);
  //   }else if(this.state.secondNum == null){
  //     this.setState(this.state.secondNum = num);
  //   }else{

  //   }

  // }

  // handleOperator(operation){
  //   if(operation == "+"){
  //     this.setState({result: eval(this.state.firstNum + this.state.secondNum)})
  //   }
  //   else if(operation == "-"){
  //     this.setState({result: eval(this.state.firstNum - this.state.secondNum)})
  //   }
  //   else if(operation == "*"){
  //     this.setState({result: eval(this.state.firstNum * this.state.secondNum)})
  //   }
  //   else{
  //     this.setState({ result: (this.state.firstNum + this.state.secondNum) });
  //   }
  // }

  // calculate(){

  // }





  render() {
    return (
      <div className="container">
        <div className="renderZone">
          <input
            type="text"
            className="resultInput"
            placeholder="son kiriting..."
          />
        </div>
        <div className="btnGroup">
          <div className="numbers">
            <button onClick = {()=>this.handleNum("1")} className="number">1</button>
            <button onClick = {()=>this.handleNum("2")} className="number">2</button>
            <button onClick = {()=>this.handleNum("3")} className="number">3</button>
            <button onClick = {()=>this.handleNum("4")} className="number">4</button>
            <button onClick = {()=>this.handleNum("5")} className="number">5</button>
            <button onClick = {()=>this.handleNum("6")} className="number">6</button>
            <button onClick = {()=>this.handleNum("7")} className="number">7</button>
            <button onClick = {()=>this.handleNum("8")} className="number">8</button>
            <button onClick = {()=>this.handleNum("9")} className="number">9</button>
            <button onClick = {()=>this.handleNum("0")} className="number">0</button>
            <button onClick = {this.calculate} className="number">=</button>
            <button onClick = {this.reset} className="number">C</button>
          </div>
          <div className="operations">
            <button onClick = {()=>this.handleOperator("+")} className="operator">+</button>
            <button onClick = {()=>this.handleOperator("-")} className="operator">-</button>
            <button onClick = {()=>this.handleOperator("*")} className="operator">*</button>
            <button onClick = {()=>this.handleOperator("/")} className="operator">/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Kalkulyator;
