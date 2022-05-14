import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ArrowNavigate, DetailsPage, UsersPage } from "../styles/Users.styles";

const UserDetails = () => {
  const { userId } = useParams();
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
      )
      .then((res) => {
        const allUsers = res.data;
        setAllUsers(allUsers);
      })
      .catch((error) => console.error(error));
  }, []);

  const singleUserDetails = allUsers.filter((user) => user.id == userId);
  const user = singleUserDetails[0];

  const backToAllUsersPage = () => {
    navigate("/users");
  };

  return (
    <UsersPage>
      <DetailsPage>
        <ArrowNavigate onClick={backToAllUsersPage}>
          <AiOutlineArrowLeft size={30} />
        </ArrowNavigate>
        <div>
          <h2>
            Details: {user?.first_name} {user?.last_name}
          </h2>
        </div>
      </DetailsPage>
    </UsersPage>
  );
};

export default UserDetails;
