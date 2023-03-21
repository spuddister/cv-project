import School from "./School";
import { IoAdd } from "react-icons/io5";

export default function Education(props) {
  // function handleChange(data, index) {
  //   const tempEducation = props.education;
  //   tempEducation[index] = data;
  //   props.updateParent(tempEducation);
  // }

  const handleChange = (newEducationData) => {
    props.updateParent([...props.educationData, newEducationData]);
  };

  function handleDelete(indexForDelete) {
    const newParentData = props.education;
    delete newParentData[indexForDelete];
    props.updateParent({ education: newParentData });
  }

  function handleAdd() {
    const newSchool = {
      school: "School",
      degree: "Degree",
      startYear: "Start",
      graduatingYear: "End",
    };
    handleChange(newSchool);
  }

  let schools = props.educationData.map((school, index) => (
    <School
      key={index}
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
