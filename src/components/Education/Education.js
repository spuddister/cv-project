import { Component } from "react";
import School from "./School";

export default class Education extends Component {
  render() {
    const schools = Object.keys(this.props.education).map((school) => (
      <School key={school} schoolData={this.props.education[school]} />
    ));
    return (
      <>
        <h2>Education</h2>
        <>{schools}</>
      </>
    );
  }
}
