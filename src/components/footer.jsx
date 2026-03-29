import { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      title: "My footer",
      year: 2026,
    };
  }

  render() {
    const footerStyle = {
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      bottom: "0",
      width: "100%",
    };

    const textStyle = {
      margin: "5px 0",
      fontSize: "14px",
    };

    return (
      <footer style={footerStyle}>
        <h2>{this.state.title}</h2>
        <p style={textStyle}>© {this.state.year} All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;