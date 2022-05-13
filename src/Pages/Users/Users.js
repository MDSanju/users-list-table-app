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
import { UsersPage, UsersTitle } from "../styles/Users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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
      {users.length ? (
        <UsersPage>
          <UsersTitle>{users.length} Users</UsersTitle>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ background: "#fafafa" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
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

export default Users;
