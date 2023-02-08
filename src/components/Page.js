import React, { Component } from "react";
import Header from "./Header";
import Section from "./Section";

export default class Page extends Component {
  render() {
    const defaultPerson = {
      name: "Sam Puddister",
      email: "sam.puddister@gmail.com",
      phone: "(515) 555- 1234",
      github: "spuddister",
      githubURL: "https://github.com/spuddister",
    };
    return (
      <div className="page">
        <Header {...defaultPerson} className="header" />
        <Section />
      </div>
    );
  }
}
