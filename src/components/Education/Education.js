import { Component } from "react";
import School from "./School";

export default class Education extends Component {
  render() {
    const schools = this.props.education.map((school, index) => (
      <School key={index} schoolData={school} />
    ));
    return (
      <>
        <h2>Education</h2>
        <>{schools}</>
      </>
    );
  }
}
