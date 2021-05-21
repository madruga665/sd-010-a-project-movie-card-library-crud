import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </footer>
    );
  }
}
export default Footer;
