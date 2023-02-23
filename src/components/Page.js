import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education/Education";
import Work from "./Work/Work";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "Homer J. Simpson",
        email: "chunkylover53@aol.com",
        phone: "(939) 555- 0113",
        social: "HomerJSimpson",
        socialURL: "https://github.com/spuddister",
      },
      education: [
        {
          school: "Springfield High School, Springfield, USA",
          degree: "HS Diploma College Prep",
          startYear: "1984",
          graduatingYear: "1989",
        },
      ],
      work: [
        {
          company: "Springfield Nuclear Power Plant, Springfield, USA",
          startDate: "1989",
          endDate: "Present",
          position: "Safety Inspector",
          duties: [
            "Strengthened safety procedures that resulted in 75% fewer accidents on days I was absent.",
            "Pioneered workplace stress-reduction methods that worked for at least one employee.",
          ],
        },
        {
          company: "City of Springfield, Springfield, USA",
          startDate: "2002",
          endDate: "2002",
          position: "Chief of Police",
          duties: [
            "Broke up weasel-selling ring.",
            "Secured community support in almost-successful effort to expel organized crime from city.",
          ],
        },
        {
          company: "Mr. Plow, Springfield, USA",
          startDate: "1992",
          endDate: "1993",
          position:
            "Owner, Chief Marketing Officer, and Chief Driver for Snow-Plowing Business",
          duties: [
            "Boosted business 15% by executing late-night TV marketing campaign targeting homeowners who were too wasted to shovel their driveways.",
            "Deliberated at length before rescuing man trapped beneath mountain avalanche.",
          ],
        },
      ],
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
          updateParent={this.handleChange}
          className="profile"
        />
        <Education
          updateParent={this.handleChange}
          education={this.state.education}
        />
        <Work updateParent={this.handleChange} work={this.state.work} />
      </div>
    );
  }
}
