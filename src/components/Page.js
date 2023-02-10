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
        github: "spuddister",
        githubURL: "https://github.com/spuddister",
      },
      education: [
        {
          school: "Toronto Metroplitan University",
          degree: "Bachelors of Engineering",
          startYear: "2014",
          graduatingYear: "2019",
        },
      ],
      work: [
        {
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
      ],
    };
  }

  updateData(newData) {
    this.setState(); //have the components pass back key:value pairs to update state, then we (me and future me) can use this single function to update state
  }

  render() {
    return (
      <div className="page">
        <Profile {...this.state.profile} className="header" />
        <Education education={this.state.education} />
        <Work work={this.state.work} />
      </div>
    );
  }
}
