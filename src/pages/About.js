import React, { Component } from "react";

class About extends React.Component {
  render() {
    const divStyle = {
      border: "1px solid red",
      
    };
    return (
      <div style={divStyle}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <img src="https://unsplash.it/500/300/?random" alt="some image"/>
      </div>
    )
  }
}

export default About;