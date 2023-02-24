import { Component } from "react";
import Company from "./Company";
import { IoAdd } from "react-icons/io5";

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(data, index) {
    const tempWork = this.props.work;
    tempWork[index] = data;
    this.props.updateParent(tempWork);
  }

  handleDelete(indexForDelete) {
    const newParentData = this.props.work;
    delete newParentData[indexForDelete];
    this.props.updateParent({ work: newParentData });
  }

  handleAdd() {
    const newCompany = {
      company: "Company Name",
      startDate: "Start Date",
      endDate: "End Date",
      position: "Position Title",
      duties: ["Responsibility 1...", "Responsibility 2..."],
    };
    this.handleChange(newCompany, this.props.work.length);
  }

  render() {
    const companies = this.props.work.map((company, index) => {
      return (
        <Company
          key={index}
          index={index}
          deleteCompany={this.handleDelete}
          updateParent={this.handleChange}
          companyData={company}
        />
      );
    });
    return (
      <div className="work-data">
        <h2 className="level-2-text">
          Work Experience{" "}
          <button className="add-button" onClick={this.handleAdd}>
            <IoAdd />
          </button>
        </h2>
        <div className="company-data">{companies}</div>
      </div>
    );
  }
}
