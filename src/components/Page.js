import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education/Education";
import Work from "./Work/Work";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "Sam Puddister",
        email: "sam.puddister@gmail.com",
        phone: "(515) 555- 1234",
        social: "spuddister",
        socialURL: "https://github.com/spuddister",
      },
      education: {
        0: {
          school: "Toronto Metroplitan University",
          degree: "Bachelors of Engineering",
          startYear: "2014",
          graduatingYear: "2019",
        },
      },
      work: {
        0: {
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
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState(data);
  }

  render() {
    return (
      <div className="page">
        <Profile
          profileData={this.state.profile}
          updateData={this.handleChange}
          className="profile"
        />
        <Education
          updateData={this.handleChange}
          education={this.state.education}
        />
        <Work updateData={this.handleChange} work={this.state.work} />
      </div>
    );
  }
}
