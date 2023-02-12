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
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus(key) {
    if (this.state.key) {
      this.setState({ [key]: false });
    } else {
      this.setState({ [key]: true });
    }
  }

  handleChange(key, value) {
    // const fullKey = "profile." + key;
    this.props.updateData("profile", key, value);
  }

  render() {
    const { name, email, phone, social, socialURL } = this.props;

    const nameJSX = this.state.editName ? (
      <h1>
        <input
          autoFocus
          onChange={(e) => this.handleChange("name", e.target.value)}
          type={"text"}
          value={name}
        />
      </h1>
    ) : (
      <h1
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
          autoFocus
          onChange={(e) => this.handleChange("email", e.target.value)}
          type={"text"}
          value={email}
        />
      </p>
    ) : (
      <p
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
          autoFocus
          onChange={(e) => this.handleChange("phone", e.target.value)}
          type={"text"}
          value={phone}
        />
      </p>
    ) : (
      <p
        onClick={() => {
          this.handleFocus("editPhone");
        }}
      >
        {phone}
      </p>
    );

    const socialJSX = this.state.editSocial ? (
      <>
        <input
          autoFocus
          onChange={(e) => this.handleChange("social", e.target.value)}
          onFocusOut={console.log("test")}
          type={"text"}
          value={social}
        />
        <input
          onChange={(e) => this.handleChange("socialURL", e.target.value)}
          type={"text"}
          value={socialURL}
        />
      </>
    ) : (
      <p
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
