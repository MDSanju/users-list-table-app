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
import { CgSortZa, CgSortAz } from "react-icons/cg";
import { useForm } from "react-hook-form";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../../hooks/usePagination";
import {
  PaginationContainer,
  SearchBtn,
  SearchContainer,
  SortingIcons,
  UsersPage,
  UsersTitle,
} from "../styles/Users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [tableUserName, setTableUserName] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSearchValueSubmit = (data) => {
    if (data.userName) {
      setTableUserName(true);
    }

    const searchText = data.userName;

    const matchedUsersData = users.filter((filteredUsers) =>
      (filteredUsers?.first_name + " " + filteredUsers?.last_name)
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

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(10, displayUsers.length);

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
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    First Name{" "}
                    <SortingIcons>
                      <CgSortZa
                        size={10}
                        style={{ cursor: "pointer", color: "#707070" }}
                      />
                      <CgSortAz
                        size={10}
                        style={{ cursor: "pointer", color: "#707070" }}
                      />
                    </SortingIcons>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
                </TableRow>
              </TableHead>
              {!tableUserName ? (
                <TableBody>
                  {(() => {
                    const showUsers = [];
                    for (let i = startPageIndex; i <= endPageIndex; i++) {
                      showUsers.push(
                        <TableRow
                          key={displayUsers[i].id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            onClick={() =>
                              handleUserDetails(`${displayUsers[i].id}`)
                            }
                            component="th"
                            scope="row"
                            sx={{ cursor: "pointer" }}
                          >
                            {displayUsers[i].first_name}
                          </TableCell>
                          <TableCell>{displayUsers[i].last_name}</TableCell>
                          <TableCell>{displayUsers[i].age}</TableCell>
                          <TableCell>{displayUsers[i].email}</TableCell>
                          <TableCell
                            onClick={() =>
                              openLinkInNewTab(`${displayUsers[i].web}`)
                            }
                            sx={{ cursor: "pointer", color: "#2c99ff" }}
                          >
                            {displayUsers[i].web}
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return showUsers;
                  })()}
                </TableBody>
              ) : (
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
              )}
            </Table>
          </TableContainer>
          <PaginationContainer>
            <Pagination
              count={totalPages}
              onChange={(event, value) => displayPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </PaginationContainer>
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
