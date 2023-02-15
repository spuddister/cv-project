import { Component } from "react";
import { FaGithub } from "react-icons/fa";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: false,
      editEmail: false,
      editPhone: false,
      editSocial: false,
      profile: { ...this.props.profileData },
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus(key) {
    if (this.state[key]) {
      this.setState({ [key]: false });
      this.props.updateData(this.state.profile); //update parent with new data
    } else {
      this.setState({ [key]: true });
    }
  }

  handleChange(event) {
    this.setState((state) => ({
      profile: {
        ...state.profile,
        [event.target.name]: event.target.value,
      },
    }));
  }

  render() {
    const { name, email, phone, social, socialURL } = this.state.profile;

    const nameJSX = this.state.editName ? (
      <h1>
        <input
          className="level-1-text-edit"
          name="name"
          autoFocus
          onChange={this.handleChange}
          onBlur={() => this.handleFocus("editName")}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.handleFocus("editName");
          }}
          type={"text"}
          value={name}
        />
      </h1>
    ) : (
      <h1
        className="level-1-text"
        onClick={() => {
          this.handleFocus("editName");
        }}
      >
        {name}
      </h1>
    );

    const emailJSX = this.state.editEmail ? (
      <p>
        <input
          className="level-4-text-edit"
          name="email"
          autoFocus
          onChange={this.handleChange}
          onBlur={() => this.handleFocus("editEmail")}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.handleFocus("editEmail");
          }}
          type={"text"}
          value={email}
        />
      </p>
    ) : (
      <p
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editEmail");
        }}
      >
        {email}
      </p>
    );

    const phoneJSX = this.state.editPhone ? (
      <p>
        <input
          className="level-4-text-edit"
          name="phone"
          autoFocus
          onChange={this.handleChange}
          onBlur={() => this.handleFocus("editPhone")}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.handleFocus("editPhone");
          }}
          type={"text"}
          value={phone}
        />
      </p>
    ) : (
      <p
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editPhone");
        }}
      >
        {phone}
      </p>
    );

    const socialJSX = this.state.editSocial ? (
      <form>
        <input
          className="level-4-text-edit"
          name="social"
          autoFocus
          onChange={this.handleChange}
          onBlur={(e) => {
            e.target.nextSibling.focus();
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") e.target.nextSibling.focus();
          }}
          type={"text"}
          value={social}
        />
        <input
          className="level-4-text-edit"
          name="socialURL"
          onChange={this.handleChange}
          onBlur={() => this.handleFocus("editSocial")}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.handleFocus("editSocial");
          }}
          type={"text"}
          value={socialURL}
        />
      </form>
    ) : (
      <p
        className="level-4-text"
        onClick={() => {
          this.handleFocus("editSocial");
        }}
      >
        <a href={socialURL}>
          <FaGithub className="icon" />
        </a>{" "}
        {social}
      </p>
    );

    return (
      <div className="profile-data">
        {nameJSX}
        {emailJSX}
        {phoneJSX}
        {socialJSX}
      </div>
    );
  }
}
