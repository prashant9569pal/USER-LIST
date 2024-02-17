import React, { useContext, useState } from "react";
import "./Card.css"; // Import CSS for custom styles
import { DataContext } from "../context/DataProvider";

const Card = () => {
  const { user } = useContext(DataContext);
  // console.log(user);
  console.log(user.avatar);
  const imageURL = user.avatar;
  if (user.profile === undefined) {
    return (
      <center style={{ fontSize: "50px" }}>
        No data to show.... {alert("Please do not refresh this page")}
      </center>
    );
  } else
    return (
      <div className="card user-card">
        <div className="avatar-container">
          {imageURL.includes("fakercloud") ? (
            <center>
              <p style={{ color: "black", fontSize: "20px" }}>
                No Image to show
              </p>
            </center>
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
            <p className="user-card-text">
              <strong>Username:</strong> {user.profile.username}
            </p>
            <p className="user-card-text">
              <strong>Email:</strong> {user.profile.email}
            </p>
            <p className="user-card-text">
              <strong>Bio:</strong> {user.Bio}
            </p>
            <p className="user-card-text">
              <strong>Job Title:</strong> {user.jobTitle}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Card;
