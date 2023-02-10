import { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone, github } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{github}</p>
      </>
    );
  }
}
