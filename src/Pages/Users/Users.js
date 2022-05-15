import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import { CgSortZa, CgSortAz } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Pagination from "@mui/material/Pagination";
import {
  SearchBtn,
  SearchContainer,
  SortingIcons,
  UsersPage,
  UsersTitle,
} from "../styles/Users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSearchValueSubmit = (data) => {
    console.log(data.userName);
    const searchText = data.userName;

    const matchedUsersData = users.filter((filteredUsers) =>
      (filteredUsers?.first_name + " " + filteredUsers.last_name)
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );

    setDisplayUsers(matchedUsersData);

    reset();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get(
        "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
      )
      .then((response) => {
        const allUsers = response.data;
        setUsers(allUsers);
        setDisplayUsers(allUsers);
      })
      .catch((error) => console.error(error));
  };

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleUserDetails = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      {displayUsers.length ? (
        <UsersPage>
          <UsersTitle>{displayUsers.length} Users</UsersTitle>
          <form onSubmit={handleSubmit(onSearchValueSubmit)}>
            <SearchContainer>
              <input
                type="text"
                {...register("userName")}
                placeholder="Search by first or last name"
                required
              />
              <SearchBtn type="submit">
                <BsSearch size={16} />
              </SearchBtn>
            </SearchContainer>
          </form>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ background: "#fafafa" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    First Name{" "}
                    <SortingIcons>
                      <CgSortZa size={14} />
                      <CgSortAz size={14} />
                    </SortingIcons>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      onClick={() => handleUserDetails(`${user.id}`)}
                      component="th"
                      scope="row"
                      sx={{ cursor: "pointer" }}
                    >
                      {user.first_name}
                    </TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell
                      onClick={() => openLinkInNewTab(`${user.web}`)}
                      sx={{ cursor: "pointer", color: "#2c99ff" }}
                    >
                      {user.web}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={displayUsers.length}
            variant="outlined"
            shape="rounded"
          />
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
};;

export default Users;
