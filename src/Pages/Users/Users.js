import React, { useEffect, useState } from "react";
import { UsersPage, UsersTitle } from "../styles/Users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <UsersPage>
      <UsersTitle>Users</UsersTitle>
      <h2>All users: {users.length}!</h2>
    </UsersPage>
  );
};

export default Users;
