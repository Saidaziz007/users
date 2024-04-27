import React from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../../context/userApi";
import { Link } from "react-router-dom";

const Home = () => {
  let { data, isLoading, isError } = useGetUsersQuery();
  let [
    deleteUser,
    {
      data: dataUserDelete,
      isLoading: isLoadingDeleteUser,
      isError: isErrorDeleteUser,
    },
  ] = useDeleteUserMutation();
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };
  let users = data?.data.map((el) => (
    <div key={el.id} className="card">
      <div className="car-img">
        <h1>
          {el.FirstName.slice(0, 1).toUpperCase()}
          {el.LastName.slice(0, 1).toUpperCase()}
        </h1>
      </div>
      <div className="card-info">
        <p className="card-info-name">
          {el.FirstName.charAt(0).toUpperCase() + el.FirstName.slice(1)}{" "}
          {el.LastName.charAt(0).toUpperCase() + el.LastName.slice(1)}
        </p>
        <p className="card-info-role">
          Role: <span>{el.role}</span>
        </p>
        <p className="card-info-number">
          Number: <span> {el.phones}</span>
        </p>
        <p className="card-info-role">
          Username: <span>{el.UserName}</span>
        </p>
        <button className="delete-btn" onClick={() => handleDeleteUser(el.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
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
        <div className="cards">{users}</div>
      </div>
    </div>
  );
};

export default Home;
