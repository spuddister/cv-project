import { Component } from "react";
import { IoClose } from "react-icons/io5";

export default class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editSchoolName: false,
      editDegree: false,
      editStartYear: false,
      editGraduatingYear: false,
      school: { ...this.props.schoolData },
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus(key) {
    if (this.state[key]) {
      this.setState({ [key]: false });
      this.props.updateParent(this.state.school, this.props.index);
    } else {
      this.setState({ [key]: true });
    }
  }

  handleChange(event) {
    this.setState((state) => ({
      school: {
        ...state.school,
        [event.target.name]: event.target.value,
      },
    }));
  }

  render() {
    const { school, degree, startYear, graduatingYear } = this.state.school;

    const schoolNameJSX = this.state.editSchoolName ? (
      <input
        className="level-3-text-edit"
        name="school"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editSchoolName")}
        onKeyUp={(e) => {
          if (e.key === "Enter") this.handleFocus("editSchoolName");
        }}
        type={"text"}
        value={school}
      />
    ) : (
      <h3
        className="level-3-text"
        onClick={() => {
          this.handleFocus("editSchoolName");
        }}
      >
        {school}
      </h3>
    );

    const degreeJSX = this.state.editDegree ? (
      <input
        className="level-4-text-edit"
        name="degree"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editDegree")}
        onKeyUp={(e) => {
          if (e.key === "Enter") this.handleFocus("editDegree");
        }}
        type={"text"}
        value={degree}
      />
    ) : (
      <p
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editDegree");
        }}
      >
        {degree}
      </p>
    );

    const startYearJSX = this.state.editStartYear ? (
      <input
        className="level-4-text-edit"
        name="startYear"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editStartYear")}
        onKeyUp={(e) => {
          if (e.key === "Enter") this.handleFocus("editStartYear");
        }}
        type={"text"}
        value={startYear}
      />
    ) : (
      <span
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editStartYear");
        }}
      >
        {startYear}
      </span>
    );

    const graduatingYearJSX = this.state.editGraduatingYear ? (
      <input
        className="level-4-text-edit"
        name="graduatingYear"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editGraduatingYear")}
        onKeyUp={(e) => {
          if (e.key === "Enter") this.handleFocus("editGraduatingYear");
        }}
        type={"text"}
        value={graduatingYear}
      />
    ) : (
      <span
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editGraduatingYear");
        }}
      >
        {graduatingYear}
      </span>
    );

    return (
      <div className="school-data">
        <button
          className="delete-button"
          onClick={() => this.props.deleteSchool(this.props.index)}
        >
          <IoClose />
        </button>
        {schoolNameJSX}
        {degreeJSX}
        <p>
          {startYearJSX} - {graduatingYearJSX}
        </p>
      </div>
    );
  }
}
