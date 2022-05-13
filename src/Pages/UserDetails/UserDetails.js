import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json/${userId}`
      )
      .then((res) => {
        const userDetails = res.data;
        setUser(userDetails);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  console.log(user);

  return (
    <div>
      <h2>Name: {user.name}</h2>
    </div>
  );
};

export default UserDetails;
