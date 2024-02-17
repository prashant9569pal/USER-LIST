import React, { createContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { Spinner } from "react-bootstrap"; // Import Bootstrap Spinner

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error in fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="spinners">
        {loading && (
          <div class="text-center">
            <div
              class="spinner-border"
              role="status"
              style={{ marginTop: "50vh" }}
            >
              <span class="sr-only"></span>
            </div>
          </div>
        )}
      </div>

      {error && <p>{error}</p>}
      {!loading && !error && users.length === 0 && <p>No data to show</p>}
      {!loading &&
        users.length > 0 &&
        users.map((user, id) => <UserCard key={id} user={user} />)}
    </>
  );
};

export default UserList;
