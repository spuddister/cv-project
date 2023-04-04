import React, { useState } from "react";
import Profile from "./Profile";
import Education from "./Education/Education";
import Work from "./Work/Work";

export default function Page() {
  const [profileData, setProfileData] = useState({
    name: "Homer J. Simpson",
    email: "chunkylover53@aol.com",
    phone: "(939) 555- 0113",
    social: "HomerJSimpson",
    socialURL: "https://github.com/spuddister",
  });
  const [educationData, setEducationData] = useState([
    {
      school: "Springfield High School, Springfield, USA",
      degree: "HS Diploma College Prep",
      startYear: "1984",
      graduatingYear: "1989",
    },
  ]);
  const [workData, setWorkData] = useState([
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
  ]);

  return (
    <div className="page">
      <Profile
        updateParent={setProfileData.bind(null)}
        profileData={profileData}
      />
      <Education
        updateParent={(newData) => {
          setEducationData(newData);
        }}
        educationData={educationData}
      />
      {/* <Work updateParent={setWorkData.bind(null)} workData={workData} /> */}
    </div>
  );
}
