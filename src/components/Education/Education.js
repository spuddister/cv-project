import School from "./School";
import { IoAdd } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export default function Education(props) {
  // function handleChange(data, index) {
  //   const tempEducation = props.education;
  //   tempEducation[index] = data;
  //   props.updateParent(tempEducation);
  // }

  function handleChange(changedSchoolData, index) {
    const newEducationData = props.educationData;
    newEducationData[index] = changedSchoolData;
    props.updateParent(newEducationData);
  }

  function handleDelete(indexForDelete) {
    const result = props.educationData.filter(
      (_, index) => index !== indexForDelete
    );
    props.updateParent(result);
  }

  function handleAdd() {
    const newSchool = {
      school: "School",
      degree: "Degree",
      startYear: "Start",
      graduatingYear: "End",
    };
    props.updateParent([...props.educationData, newSchool]);
  }

  let schools = props.educationData.map((school, index) => (
    <School
      key={uuidv4()}
      index={index}
      schoolData={school}
      updateParent={handleChange}
      deleteSchool={handleDelete}
    />
  ));

  return (
    <div className="education-data">
      <h2 className="level-2-text">
        Education{" "}
        <button className="add-button" onClick={handleAdd}>
          <IoAdd />
        </button>
      </h2>
      <>{schools}</>
    </div>
  );
}
