import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function School(props) {
  const [school, setSchool] = useState(props.schoolData.school);
  const [degree, setDegree] = useState(props.schoolData.degree);
  const [startYear, setStartYear] = useState(props.schoolData.startYear);
  const [graduatingYear, setGraduatingYear] = useState(
    props.schoolData.graduatingYear
  );
  const [editingSchoolName, setEditingSchoolName] = useState(false);
  const [editingDegree, setEditingDegree] = useState(false);
  const [editingStartYear, setEditingStartYear] = useState(false);
  const [editingGraduatingYear, setEditingGraduatingYear] = useState(false);

  function handleChange(newValue, changeKey) {
    const newSchoolData = props.schoolData;
    newSchoolData[changeKey] = newValue;
    props.updateParent(newSchoolData, props.index);
  }

  const schoolNameJSX = editingSchoolName ? (
    <input
      className="level-3-text-edit"
      name="school"
      autoFocus
      onChange={(e) => {
        setSchool(e.target.value);
        handleChange(school, "school");
      }}
      onBlur={(e) => {
        setEditingSchoolName(false);
        handleChange(school, "school");
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingSchoolName(false);
          handleChange(school, "school");
        }
      }}
      type={"text"}
      value={school}
    />
  ) : (
    <h3 className="level-3-text" onClick={() => setEditingSchoolName(true)}>
      {school}
    </h3>
  );

  const degreeJSX = editingDegree ? (
    <input
      className="level-4-text-edit"
      name="degree"
      autoFocus
      onChange={(e) => {
        setDegree(e.target.value);
        handleChange(degree, "degree");
      }}
      onBlur={() => {
        setEditingDegree(false);
        handleChange(degree, "degree");
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingDegree(false);
          handleChange(degree, "degree");
        }
      }}
      type={"text"}
      value={degree}
    />
  ) : (
    <p className="level-4-text" onClick={() => setEditingDegree(true)}>
      {degree}
    </p>
  );

  const startYearJSX = editingStartYear ? (
    <input
      className="level-4-text-edit"
      name="startYear"
      autoFocus
      onChange={(e) => {
        setStartYear(e.target.value);
        handleChange(startYear, "startYear");
      }}
      onBlur={() => {
        setEditingStartYear(false);
        handleChange(startYear, "startYear");
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingStartYear(false);
          handleChange(startYear, "startYear");
        }
      }}
      type={"text"}
      value={startYear}
    />
  ) : (
    <span className="level-4-text" onClick={() => setEditingStartYear(true)}>
      {startYear}
    </span>
  );

  const graduatingYearJSX = editingGraduatingYear ? (
    <input
      className="level-4-text-edit"
      name="graduatingYear"
      autoFocus
      onChange={(e) => {
        setGraduatingYear(e.target.value);
        handleChange(graduatingYear, "graduatingYear");
      }}
      onBlur={() => {
        setEditingGraduatingYear(false);
        handleChange(graduatingYear, "graduatingYear");
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingGraduatingYear(false);
          handleChange(graduatingYear, "graduatingYear");
        }
      }}
      type={"text"}
      value={graduatingYear}
    />
  ) : (
    <span
      className="level-4-text"
      onClick={() => setEditingGraduatingYear(true)}
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
