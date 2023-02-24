import { Component } from "react";
import School from "./School";
import { IoAdd } from "react-icons/io5";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(data, index) {
    const tempEducation = this.props.education;
    tempEducation[index] = data;
    this.props.updateParent(tempEducation);
  }

  handleDelete(indexForDelete) {
    const newParentData = this.props.education;
    delete newParentData[indexForDelete];
    this.props.updateParent({ education: newParentData });
  }
  handleAdd() {
    const newSchool = {
      school: "School",
      degree: "Degree",
      startYear: "Start",
      graduatingYear: "End",
    };
    this.handleChange(newSchool, this.props.education.length);
  }

  render() {
    const schools = this.props.education.map((school, index) => (
      <School
        key={index}
        index={index}
        schoolData={school}
        updateParent={this.handleChange}
        deleteSchool={this.handleDelete}
      />
    ));
    return (
      <div className="education-data">
        <h2 className="level-2-text">
          Education{" "}
          <button className="add-button" onClick={this.handleAdd}>
            <IoAdd />
          </button>
        </h2>
        <>{schools}</>
      </div>
    );
  }
}
