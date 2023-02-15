import { Component } from "react";
import School from "./School";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index, data) {
    this.props.updateParent({
      education: { ...this.props.education, [index]: { ...data } },
    });
  }

  render() {
    const schools = Object.keys(this.props.education).map((school) => (
      <School
        key={school}
        index={school}
        schoolData={this.props.education[school]}
        updateParent={this.handleChange}
      />
    ));
    return (
      <>
        <h2>Education</h2>
        <>{schools}</>
        <button>+</button>
      </>
    );
  }
}
