// import React from "react";
// import Logo from "./components/Logo";

// const App = () => {
//   return (
//     <div className="header_wrapper appRoot">
//       <Logo />
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";
import Logo from "./components/Logo";
export default class App extends Component {
  state = {
    iconClass: "fa fa-film fa-3x",
    logoText: "Black & White Frames",
    inputVal: "Testing",
  };

  handleClick = () => {
    console.log("clicked the button");
    this.setState(() => {
      return {
        iconClass: "fa fa-leaf fa-3x",
        logoText: "Save our planet",
      };
    });
  };
  handleChange = (e) => {
    const val = e.target.value;
    this.setState(
      (state, props) => {
        return {
          inputVal: val,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <Logo data={this.state} />
        <h1> {this.state.inputVal}</h1>
        <input
          value={this.state.inputVal}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={this.handleClick} className="btn">
          Change
        </button>
      </div>
    );
  }
}
