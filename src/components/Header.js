import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <h1 className="header-title">CV Editor</h1>
        <p className="directions">Click on the text to customize your CV.</p>
      </>
    );
  }
}
