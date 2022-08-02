import React, { Component } from "react";
import "./tasbex.scss";

class Tasbex extends Component {
  state = {
    count: 0,
  };
  localCountValue = 0;

  handleIncrement = () => {
    console.log("incremet")
    this.setState({
      count: this.state.count + 1,
    });
    this.localCountValue = this.state.count + 1;
  };

  handleBack = () => {
    console.log("back")
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
      this.localCountValue = this.state.count - 1;
    } else if (this.state.count === 0) {
      this.setState({ count: this.localCountValue });
    }
  };

  handleReset = () => {
    console.log("reset");
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <div className="wrapper d-flex flex-column align-items-center ">
        <div onClick={this.handleIncrement} className="renderZone d-flex flex-column align-items-center justify-content-center" >
          <h3 className="countValue">{this.state.count}</h3>
          <h3 className="countName">Counter</h3>
        </div>

        <div className="btnGroup">
          <button onClick={this.handleBack} className="backBtn btn">
            Back
          </button>
          <button onClick={this.handleIncrement} className="incrementBtn btn" >
            Increment
          </button>
          <button onClick={this.handleReset} className="resetBtn btn">
            Reset
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default Tasbex;
