import { Component } from "react";
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

export default class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editCompanyName: false,
      editPosition: false,
      editStartDate: false,
      editEndDate: false,
      company: { ...this.props.companyData },
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDutyDelete = this.handleDutyDelete.bind(this);
    this.handleDutyAdd = this.handleDutyAdd.bind(this);
  }

  componentDidMount() {
    this.state.company.duties.map((duty, index) => {
      const stateName = "editDuty" + index;
      this.setState({ [stateName]: false });
      return null;
    });
  }

  handleFocus(key) {
    if (this.state[key]) {
      this.setState({ [key]: false });
      this.props.updateParent(this.state.company, this.props.index);
    } else {
      this.setState({ [key]: true });
    }
  }

  handleChange(event) {
    if (event.currentTarget.name.includes("editDuty")) {
      const tempCompany = { ...this.state.company };
      tempCompany.duties[event.currentTarget.getAttribute("index")] =
        event.currentTarget.value;
      this.setState({ company: { ...tempCompany } });
    } else {
      this.setState((state) => ({
        company: {
          ...state.company,
          [event.target.name]: event.target.value,
        },
      }));
    }
  }

  handleDutyDelete(event) {
    event.stopPropagation();
    const tempCompany = { ...this.state.company };
    tempCompany.duties = [
      ...tempCompany.duties.slice(0, event.currentTarget.getAttribute("index")),
      ...tempCompany.duties.slice(
        event.currentTarget.getAttribute("index") * 1 + 1
      ),
    ];
    this.setState({ company: tempCompany });
  }

  handleDutyAdd() {
    const tempCompany = { ...this.state.company };
    tempCompany.duties = [...tempCompany.duties, "Responsible for..."];
    this.setState({ company: { ...tempCompany } });
  }

  render() {
    const { company, startDate, endDate, position, duties } =
      this.state.company;

    const companyNameJSX = this.state.editCompanyName ? (
      <input
        className="level-3-text-edit"
        name="company"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editCompanyName")}
        onKeyUp={(event) => {
          if (event.key === "Enter") this.handleFocus("editCompanyName");
        }}
        type={"text"}
        value={company}
      />
    ) : (
      <h3
        className="level-3-text"
        onClick={() => {
          this.handleFocus("editCompanyName");
        }}
      >
        {company}
      </h3>
    );

    const positionJSX = this.state.editPosition ? (
      <input
        className="level-4-text-edit"
        name="position"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editPosition")}
        onKeyUp={(event) => {
          if (event.key === "Enter") this.handleFocus("editPosition");
        }}
        type={"text"}
        value={position}
      />
    ) : (
      <p
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editPosition");
        }}
      >
        {position}
      </p>
    );

    const startDateJSX = this.state.editStartDate ? (
      <input
        className="level-4-text-edit"
        name="startDate"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editStartDate")}
        onKeyUp={(event) => {
          if (event.key === "Enter") this.handleFocus("editStartDate");
        }}
        type={"text"}
        value={startDate}
      />
    ) : (
      <span
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editStartDate");
        }}
      >
        {startDate}
      </span>
    );

    const endDateJSX = this.state.editEndDate ? (
      <input
        className="level-4-text-edit"
        name="endDate"
        autoFocus
        onChange={this.handleChange}
        onBlur={() => this.handleFocus("editEndDate")}
        onKeyUp={(event) => {
          if (event.key === "Enter") this.handleFocus("editEndDate");
        }}
        type={"text"}
        value={endDate}
      />
    ) : (
      <span
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editEndDate");
        }}
      >
        {endDate}
      </span>
    );

    const dutiesList = duties.map((duty, index) => {
      const dutyName = "editDuty" + index;
      if (this.state[dutyName]) {
        return (
          <li key={index}>
            <button
              className="task-delete-button"
              index={index}
              onClick={this.handleDutyDelete}
            >
              <IoClose />
            </button>
            <input
              index={index}
              className="level-4-text-edit"
              name={dutyName}
              autoFocus
              onChange={this.handleChange}
              onBlur={() => this.handleFocus(dutyName)}
              onKeyUp={(event) => {
                if (event.key === "Enter") this.handleFocus(dutyName);
              }}
              type={"text"}
              value={duty}
            ></input>
          </li>
        );
      }
      return (
        <li
          key={index}
          onClick={() => {
            this.handleFocus(dutyName);
          }}
        >
          <button
            className="duty-delete-button"
            index={index}
            onClick={this.handleDutyDelete}
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
            this.props.deleteCompany(this.props.index);
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
          <button className="duty-add-button" onClick={this.handleDutyAdd}>
            <IoAdd />
          </button>
        </ul>
      </>
    );
  }
}
