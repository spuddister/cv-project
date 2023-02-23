import React, { Component } from "react";
import Page from "./components/Page";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Page />
      </>
    );
  }
}
