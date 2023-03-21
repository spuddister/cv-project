import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function School(props) {
  // const [schoolData, setSchoolData] = useState({
  //   editingSchoolName: false,
  //   editingDegree: false,
  //   editingStartYear: false,
  //   editingGraduatingYear: false,
  //   school: { ...props.schoolData },
  // });
  const [editingSchoolName, setEditingSchoolName] = useState(false);
  const [editingDegree, setEditingDegree] = useState(false);
  const [editingStartYear, setEditingStartYear] = useState(false);
  const [editingGraduatingYear, setEditingGraduatingYear] = useState(false);

  function handleFocus(key) {
    if (schoolData[key]) {
      setSchoolData({ [key]: false });
      props.updateParent(schoolData.school);
    } else {
      setSchoolData({ [key]: true });
    }
    // console.log(schoolData[key]);
    // console.log(schoolData);
  }

  function handleChange(event) {
    setSchoolData((state) => ({
      school: {
        ...state.school,
        [event.target.name]: event.target.value,
      },
    }));
  }

  const { school, degree, startYear, graduatingYear } = schoolData.school;

  const schoolNameJSX = schoolData.editingSchoolName ? (
    <input
      className="level-3-text-edit"
      name="school"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus(editingSchoolName)}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingSchoolName");
      }}
      type={"text"}
      value={school}
    />
  ) : (
    <h3
      className="level-3-text"
      onClick={() => {
        handleFocus("editingSchoolName");
      }}
    >
      {school}
    </h3>
  );

  const degreeJSX = schoolData.editingDegree ? (
    <input
      className="level-4-text-edit"
      name="degree"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingDegree")}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingDegree");
      }}
      type={"text"}
      value={degree}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        handleFocus("editingDegree");
      }}
    >
      {degree}
    </p>
  );

  const startYearJSX = schoolData.editingStartYear ? (
    <input
      className="level-4-text-edit"
      name="startYear"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingStartYear")}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingStartYear");
      }}
      type={"text"}
      value={startYear}
    />
  ) : (
    <span
      className="level-4-text"
      onClick={() => {
        handleFocus("editingStartYear");
      }}
    >
      {startYear}
    </span>
  );

  const graduatingYearJSX = schoolData.editingGraduatingYear ? (
    <input
      className="level-4-text-edit"
      name="graduatingYear"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingGraduatingYear")}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingGraduatingYear");
      }}
      type={"text"}
      value={graduatingYear}
    />
  ) : (
    <span
      className="level-4-text"
      onClick={() => {
        handleFocus("editingGraduatingYear");
      }}
    >
      {graduatingYear}
    </span>
  );

  return (
    <div className="school-data">
      <button
        className="delete-button"
        onClick={() => props.deleteSchool(props.index)}
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
