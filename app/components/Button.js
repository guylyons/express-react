import React from "react";
import "../styles/Button.scss";

class Button extends React.Component {

  render() {
    return (
      <a className="btn btn-default btn-lg">
        {this.props.message}
      </a>
    )
  }
}

export default Button;
