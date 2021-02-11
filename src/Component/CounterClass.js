import React, { Component } from "react";
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
    alert("hello");
  };
  Decrement;
  render() {
    return (
      <div>
        <h2>Counter with Class</h2>
        <button
          onClick={() => {
            this.Increment();
            alert("hello");
          }}
        >
          +
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.Decrement}>-</button>
      </div>
    );
  }
}

export default CounterClass;
