import React, { Component } from "react";
import unicorn from "../assets/unicorn.gif";
import "./styles/Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={unicorn} alt="unicorn gif felix" />
        Carregando...
      </div>
    );
  }
}

export default Loading;
