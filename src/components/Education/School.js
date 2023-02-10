import { Component } from "react";

export default class School extends Component {
  render() {
    const { school, degree, startYear, graduatingYear } = this.props.schoolData;
    return (
      <>
        <h3>{school}</h3>
        <p>{degree}</p>
        <p>
          {startYear} - {graduatingYear}
        </p>
      </>
    );
  }
}
