import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Company(props) {
  const [companyName, setCompany] = useState(props.companyData.company);
  const [position, setPosition] = useState(props.companyData.position);
  const [startDate, setStartDate] = useState(props.companyData.startDate);
  const [endDate, setEndDate] = useState(props.companyData.endDate);
  const [duties, setDuties] = useState(props.companyData.duties);
  const [editingCompany, setEditingCompany] = useState(false);
  const [editingPosition, setEditingPosition] = useState(false);
  const [editingStartDate, setEditingStartDate] = useState(false);
  const [editingEndDate, setEditingEndDate] = useState(false);
  const [editingDuties, setEditingDuties] = useState({});

  //initilizes the editingDuties state for each duty present to false originally
  useEffect(() => {
    let tempEditingDuties = {};
    props.companyData.duties.map((duty, index) => {
      const stateName = "editDuty" + index;
      tempEditingDuties[stateName] = false;
      return null;
    });
    setEditingDuties(tempEditingDuties);
  }, []);

  function handleDutyFocus(key) {
    //Used when selecting and de-selecting a duty
    if (editingDuties[key]) {
      setEditingDuties({ ...editingDuties, [key]: false });
    } else {
      setEditingDuties({ ...editingDuties, [key]: true });
    }
  }

  function handleChange(newValue, changeKey) {
    const newCompanyData = { ...props.companyData };
    newCompanyData[changeKey] = newValue;
    props.updateParent(newCompanyData, props.index);
  }

  function handleDutyDelete(event) {
    event.stopPropagation();
    const tempDuties = [
      ...duties.slice(0, event.currentTarget.getAttribute("index")),
      ...duties.slice(event.currentTarget.getAttribute("index") * 1 + 1),
    ];
    setDuties(tempDuties);
    handleChange(tempDuties, "duties");
  }

  function handleDutyAdd() {
    let tempDuties = [...duties, "Responsible for..."];
    setDuties(tempDuties);
    handleChange(tempDuties, "duties");
  }

  const companyNameJSX = editingCompany ? (
    <input
      className="level-3-text-edit"
      name="company"
      autoFocus
      onChange={(e) => {
        setCompany(e.target.value);
        handleChange(companyName, e.target.name);
      }}
      onBlur={(e) => {
        setEditingCompany(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingCompany(false);
          handleChange(companyName, e.target.name);
        }
      }}
      type={"text"}
      value={companyName}
    />
  ) : (
    <h3 className="level-3-text" onClick={() => setEditingCompany(true)}>
      {companyName}
    </h3>
  );

  const positionJSX = editingPosition ? (
    <input
      className="level-4-text-edit"
      name="position"
      autoFocus
      onChange={(e) => {
        setPosition(e.target.value);
        handleChange(position, e.target.name);
      }}
      onBlur={(e) => {
        setEditingPosition(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingPosition(false);
          handleChange(position, e.target.name);
        }
      }}
      type={"text"}
      value={position}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        setEditingPosition(true);
      }}
    >
      {position}
    </p>
  );

  const startDateJSX = editingStartDate ? (
    <input
      className="level-4-text-edit"
      name="startDate"
      autoFocus
      onChange={(e) => {
        setStartDate(e.target.value);
        handleChange(startDate, e.target.name);
      }}
      onBlur={(e) => {
        setEditingStartDate(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingStartDate(false);
          handleChange(startDate, e.target.name);
        }
      }}
      type={"text"}
      value={startDate}
    />
  ) : (
    <span
      className="level-4-text"
      onClick={() => {
        setEditingStartDate(true);
      }}
    >
      {startDate}
    </span>
  );

  const endDateJSX = editingEndDate ? (
    <input
      className="level-4-text-edit"
      name="endDate"
      autoFocus
      onChange={(e) => {
        setEndDate(e.target.value);
        handleChange(endDate, e.target.name);
      }}
      onBlur={(e) => {
        setEditingEndDate(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingEndDate(false);
          handleChange(endDate, e.target.name);
        }
      }}
      type={"text"}
      value={endDate}
    />
  ) : (
    <span
      className="level-4-text"
      onClick={() => {
        setEditingEndDate(true);
      }}
    >
      {endDate}
    </span>
  );

  const dutiesList = duties.map((duty, index) => {
    const dutyName = "editDuty" + index;
    if (editingDuties[dutyName]) {
      return (
        <li key={uuidv4()}>
          <button
            className="duty-delete-button"
            index={index}
            onClick={handleDutyDelete}
          >
            <IoClose />
          </button>
          <input
            index={index}
            className="level-4-text-edit"
            name={dutyName}
            style={{ width: "100%" }}
            cols="110"
            rows="2"
            autoFocus
            onChange={(e) => {
              let tempDuties = [...duties];
              tempDuties[index] = e.target.value;
              setDuties(tempDuties);
              handleChange(tempDuties, "duties");
            }}
            onBlur={() => handleDutyFocus(dutyName)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                let tempDuties = [...duties];
                tempDuties[index] = e.target.value;
                setDuties(tempDuties);
                handleChange(tempDuties, "duties");
                handleDutyFocus(dutyName);
              }
            }}
            type={"text"}
            value={duty}
          ></input>
        </li>
      );
    }
    return (
      <li
        key={uuidv4()}
        onClick={() => {
          handleDutyFocus(dutyName);
        }}
      >
        <button
          className="duty-delete-button"
          index={index}
          onClick={handleDutyDelete}
        >
          <IoClose />
        </button>
        {duty}
      </li>
    );
  });

  return (
    <>
      <button
        className="delete-button"
        onClick={() => {
          props.deleteCompany(props.index);
        }}
      >
        <IoClose />
      </button>
      {companyNameJSX}
      {positionJSX}
      <p>
        {startDateJSX} - {endDateJSX}
      </p>
      <ul>
        {dutiesList}
        <button className="duty-add-button" onClick={handleDutyAdd}>
          <IoAdd />
        </button>
      </ul>
    </>
  );
}
