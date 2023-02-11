import { Component } from "react";
import Company from "./Company";

export default class Work extends Component {
  render() {
    const companies = Object.keys(this.props.work).map((company) => {
      return <Company key={company} companyData={this.props.work[company]} />;
    });
    return (
      <>
        <h2>Work Experience</h2>
        <div>{companies}</div>
      </>
    );
  }
}
