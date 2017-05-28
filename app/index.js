import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import BootstrapTheme from "bootstrap/dist/css/bootstrap-theme.css";

const element = (
  <div className="container">
    <div className="row">
      <Button message="Call to Action!"></Button>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById("root")
);
