import React, { createContext, useContext, useEffect } from "react";
import "./UserCard.css"; // Import CSS for custom styles
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import Card from "./Card";

const UserCard = ({ user, id }) => {
  const navigate = useNavigate();
  console.log(user.avatar);
  const { setUser } = useContext(DataContext);

  const imageURL = user.avatar;
  const handleClick = () => {
    setUser(user);
    navigate("/info");
    return;
  };

  return (
    <div className="avatar-container">
      {imageURL.includes("fakercloud") ? (
        <div>
          <p style={{ color: "black", fontSize: "20px" }}>No Image to show</p>
        </div>
      ) : (
        <img
          src={user.avatar}
          alt={`...`}
          className="avatar  float-left"
          style={{ width: "200px", height: "200px" }}
        />
      )}

      <div className="content">
        <h5 className="user-card-title">
          {user.profile.firstName} {user.profile.lastName}
        </h5>
        <p className="user-card-text">{user.jobTitle}</p>

        <p className="user-card-text">
          <button type="button" class="btn btn-primary" onClick={handleClick}>
            See More ....
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
