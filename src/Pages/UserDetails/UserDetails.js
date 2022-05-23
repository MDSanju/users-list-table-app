import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "@mui/material/Button";
import { ScaleLoader } from "react-spinners";
import { FiLogOut } from "react-icons/fi";
import {
  ArrowNavigate,
  DetailsPage,
  DetailsPageTitleHeader,
  LogoutBtn,
  UserDetailsTable,
  UserFullName,
  UsersPage,
} from "../styles/Users.styles";

const UserDetails = () => {
  const { userId } = useParams();
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

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
    <>
      {allUsers.length ? (
        <UsersPage>
          <DetailsPageTitleHeader>
            <DetailsPage>
              <ArrowNavigate onClick={backToAllUsersPage}>
                <AiOutlineArrowLeft size={30} />
              </ArrowNavigate>
              <UserFullName>
                <h2>
                  Details: {user?.first_name} {user?.last_name}
                </h2>
              </UserFullName>
            </DetailsPage>
            <LogoutBtn>
              <Button
                variant="contained"
                endIcon={<FiLogOut />}
                onClick={logout}
              >
                Logout
              </Button>
            </LogoutBtn>
          </DetailsPageTitleHeader>
          <UserDetailsTable>
            <p>
              First Name:{" "}
              <span style={{ fontWeight: "bold" }}>{user?.first_name}</span>
            </p>
            <hr />
            <p>
              Last Name:{" "}
              <span style={{ fontWeight: "bold" }}>{user?.last_name}</span>
            </p>
            <hr />
            <p>
              Company Name:{" "}
              <span style={{ fontWeight: "bold" }}>{user?.company_name}</span>
            </p>
            <hr />
            <p>
              City: <span style={{ fontWeight: "bold" }}>{user?.city}</span>
            </p>
            <hr />
            <p>
              State: <span style={{ fontWeight: "bold" }}>{user?.state}</span>
            </p>
            <hr />
            <p>
              Zip: <span style={{ fontWeight: "bold" }}>{user?.zip}</span>
            </p>
            <hr />
            <p>
              Email: <span style={{ fontWeight: "bold" }}>{user?.email}</span>
            </p>
            <hr />
            <p>
              Website: <span style={{ fontWeight: "bold" }}>{user?.web}</span>
            </p>
            <hr />
            <p>
              Age: <span style={{ fontWeight: "bold" }}>{user?.age}</span>
            </p>
          </UserDetailsTable>
        </UsersPage>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40vh",
          }}
        >
          <ScaleLoader color={"#a3a3a3"} size={85} />
        </div>
      )}
    </>
  );
};

export default UserDetails;
