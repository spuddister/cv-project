import { Component } from "react";

export default class Education extends Component {
  render() {
    const defaultEducation = {
      school: "Toronto Metroplitan University",
      degree: "Bachelors of Engineering",
      startYear: "2014",
      graduatingYear: "2019",
    };
    return (
      <>
        <h2>Education</h2>
        <h3>{defaultEducation.school}</h3>
        <p>{defaultEducation.degree}</p>
        <p>
          {defaultEducation.startYear} - {defaultEducation.graduatingYear}
        </p>
      </>
    );
  }
}
