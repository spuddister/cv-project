import { Component } from "react";
import Company from "./Company";

export default class Work extends Component {
  render() {
    const companies = this.props.work.map((company, index) => (
      <Company key={index} companyData={company} />
    ));
    return (
      <>
        <h2>Work Experience</h2>
        <>{companies}</>
      </>
    );
  }
}
