import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Profile(props) {
  const [name, setName] = useState(props.profileData.name);
  const [email, setEmail] = useState(props.profileData.email);
  const [phone, setPhone] = useState(props.profileData.phone);
  const [social, setSocial] = useState(props.profileData.social);
  const [socialURL, setSocialURL] = useState(props.profileData.socialURL);
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingSocial, setEditingSocial] = useState(false);

  function handleFocus(key) {
    //   if (this.state[key]) {
    //     this.setState({ [key]: false });
    //     this.props.updateParent(this.state.profile);
    //   } else {
    //     this.setState({ [key]: true });
    //   }
  }

  function handleChange(event) {
    // this.setState((state) => ({
    //   profile: {
    //     ...state.profile,
    //     [event.target.name]: event.target.value,
    //   },
    // }));
  }

  const nameJSX = editingName ? (
    <input
      className="level-1-text-edit"
      name="name"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingName")}
      onKeyUp={(e) => {
        if (e.key === "Enter") this.handleFocus("editingName");
      }}
      type={"text"}
      value={name}
    />
  ) : (
    <h1
      className="level-1-text"
      onClick={() => {
        handleFocus("editingName");
      }}
    >
      {name}
    </h1>
  );

  const emailJSX = editingEmail ? (
    <input
      className="level-4-text-edit"
      name="email"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingEmail")}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingEmail");
      }}
      type={"text"}
      value={email}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        handleFocus("editingEmail");
      }}
    >
      {email}
    </p>
  );

  const phoneJSX = editingPhone ? (
    <input
      className="level-4-text-edit"
      name="phone"
      autoFocus
      onChange={handleChange}
      onBlur={() => handleFocus("editingPhone")}
      onKeyUp={(e) => {
        if (e.key === "Enter") handleFocus("editingPhone");
      }}
      type={"text"}
      value={phone}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        handleFocus("editingPhone");
      }}
    >
      {phone}
    </p>
  );

  const socialJSX = editingSocial ? (
    <form>
      <input
        className="level-4-text-edit"
        name="social"
        autoFocus
        onChange={handleChange}
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
        onChange={handleChange}
        onBlur={() => handleFocus("editingSocial")}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleFocus("editingSocial");
        }}
        type={"text"}
        value={socialURL}
      />
    </form>
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        handleFocus("editingSocial");
      }}
    >
      <a className="social-icon" href={socialURL}>
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
