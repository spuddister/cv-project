import { Component } from "react";

export default class Company extends Component {
  render() {
    const { company, startDate, endDate, position, duties } =
      this.props.companyData;
    const dutiesList = duties.map((duty, i) => <li key={i}>{duty}</li>);
    return (
      <>
        <h3>{company}</h3>
        <p>{position}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <ul>{dutiesList}</ul>
      </>
    );
  }
}
