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

  function handleChange(newValue, target) {
    let tempProfileData = props.profileData;
    tempProfileData[target] = newValue;
    props.updateParent(tempProfileData);
  }

  const nameJSX = editingName ? (
    <input
      className="level-1-text-edit"
      name="name"
      autoFocus
      onChange={(e) => {
        setName(e.target.value);
        handleChange(e.target.value, "name");
      }}
      onBlur={(e) => {
        setEditingName(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingName(false);
          handleChange(e.target.value, "name");
        }
      }}
      type={"text"}
      value={name}
    />
  ) : (
    <h1
      className="level-1-text"
      onClick={() => {
        setEditingName(true);
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
      onChange={(e) => {
        setEmail(e.target.value);
        handleChange(e.target.value, "email");
      }}
      onBlur={(e) => {
        setEditingEmail(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingEmail(false);
          handleChange(e.target.value, "email");
        }
      }}
      type={"text"}
      value={email}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        setEditingEmail(true);
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
      onChange={(e) => {
        setPhone(e.target.value);
        handleChange(e.target.value, "phone");
      }}
      onBlur={(e) => {
        setEditingPhone(false);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setEditingPhone(false);
          handleChange(e.target.value, "phone");
        }
      }}
      type={"text"}
      value={phone}
    />
  ) : (
    <p
      className="level-4-text"
      onClick={() => {
        setEditingPhone(true);
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
        onChange={(e) => {
          setSocial(e.target.value);
          handleChange(e.target.value, "social");
        }}
        onBlur={(e) => {
          e.target.nextSibling.focus();
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setEditingSocial(false);
            handleChange(e.target.value, "social");
          }
        }}
        type={"text"}
        value={social}
      />
      <input
        className="level-4-text-edit"
        name="socialURL"
        onChange={(e) => {
          setSocialURL(e.target.value);
          handleChange(e.target.value, "socialURL");
        }}
        onBlur={(e) => {
          setEditingSocial(false);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setEditingSocial(false);
            handleChange(e.target.value, "socialURL");
          }
        }}
        type={"text"}
        value={socialURL}
      />
    </form>
  ) : (
    <p className="level-4-text">
      <a className="social-icon" href={socialURL}>
        <FaGithub className="icon" />
      </a>
      <span
        onClick={() => {
          setEditingSocial(true);
        }}
      >
        {social}
      </span>
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
