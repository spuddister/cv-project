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

  handleDelete(deleteThis) {
    const newParentData = this.props.work.filter(
      (company) => company !== deleteThis
    );
    this.props.updateParent({ work: newParentData });
  }

  handleAdd() {
    const newCompany = {
      company: "McDonald's",
      startDate: "June 2022",
      endDate: "March 2024",
      position: "Line Cook",
      duties: [
        "Flip burgers",
        "Build sandwiches",
        "Restock goods",
        "Quality control",
      ],
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
      <>
        <h2>
          Work Experience{" "}
          <button onClick={this.handleAdd}>
            <IoAdd />
          </button>
        </h2>
        <div>{companies}</div>
      </>
    );
  }
}
