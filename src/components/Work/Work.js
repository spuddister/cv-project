import Company from "./Company";
import { IoAdd } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

export default function Work(props) {
  function handleChange(tempCompanyData, index) {
    const tempWorkData = [...props.workData];
    tempWorkData[index] = tempCompanyData;
    props.updateParent(tempWorkData);
  }

  function handleDelete(indexForDelete) {
    const tempParentData = [...props.workData];
    let newParentData = [
      ...tempParentData.slice(0, indexForDelete),
      ...tempParentData.slice(indexForDelete + 1),
    ];
    props.updateParent(newParentData);
  }

  function handleAdd() {
    const newCompany = {
      company: "Company Name",
      startDate: "Start Date",
      endDate: "End Date",
      position: "Position Title",
      duties: ["Responsibility 1...", "Responsibility 2..."],
    };
    handleChange(newCompany, props.workData.length);
  }

  const companies = props.workData.map((company, index) => {
    return (
      <Company
        key={uuidv4()}
        index={index}
        deleteCompany={handleDelete}
        updateParent={handleChange}
        companyData={company}
      />
    );
  });

  return (
    <div className="work-data">
      <h2 className="level-2-text">
        Work Experience{" "}
        <button className="add-button" onClick={handleAdd}>
          <IoAdd />
        </button>
      </h2>
      <div className="company-data">{companies}</div>
    </div>
  );
}
