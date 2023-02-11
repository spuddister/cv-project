import { Component } from "react";

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
    this.setState({ [key]: true });
  }

  handleChange(key, value) {
    // const fullKey = "profile." + key;
    this.props.updateData("profile", key, value);
  }

  render() {
    const { name, email, phone, social } = this.props;
    return (
      <>
        {this.state.editName ? (
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
        )}
        <p>{email}</p>
        <p>{phone}</p>
        <p>{social}</p>
      </>
    );
  }
}
