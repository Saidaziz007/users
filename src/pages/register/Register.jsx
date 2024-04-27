import React, { useState } from "react";
import { useCreateUserMutation } from "../../context/userApi";
import { Link } from "react-router-dom";

const Register = () => {
  let [createUser, { data, isError, error }] = useCreateUserMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      FirstName: firstName,
      LastName: lastName,
      phones: [number],
      role: role,
      UserName: username,
      password: password,
      isActive: true,
    };
    createUser(user);
  };
  return (
    <div className="home">
      <div className="container">
        <div className="home-header">
          <h1>USERS</h1>
          <div className="home-header-a">
            <Link to={"/"}>Home</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Firstname"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Lastname"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="Role"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
