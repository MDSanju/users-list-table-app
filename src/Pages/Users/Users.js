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
import { AiOutlineLogin } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import {
  PaginationContainer,
  SearchBtn,
  SearchContainer,
  SearchSection,
  SortingIcons,
  UsersPage,
  UsersTitle,
} from "../styles/Users.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [tableUserName, setTableUserName] = useState(false);
  const [firstNameSortAsc, setFirstNameSortAsc] = useState(false);
  const [firstNameSortDes, setFirstNameSortDes] = useState(false);
  const [lastNameSortAsc, setLastNameSortAsc] = useState(false);
  const [lastNameSortDes, setLastNameSortDes] = useState(false);
  const [ageSortAsc, setAgeSortAsc] = useState(false);
  const [ageSortDes, setAgeSortDes] = useState(false);
  const [emailSortAsc, setEmailSortAsc] = useState(false);
  const [emailSortDes, setEmailSortDes] = useState(false);
  const [websiteSortAsc, setWebsiteSortAsc] = useState(false);
  const [websiteSortDes, setWebsiteSortDes] = useState(false);
  const [firstNameSortOrder, setFirstNameSortOrder] = useState(true);
  const [lastNameSortOrder, setLastNameSortOrder] = useState(true);
  const [ageSortOrder, setAgeSortOrder] = useState(true);
  const [emailSortOrder, setEmailSortOrder] = useState(true);
  const [websiteSortOrder, setWebsiteSortOrder] = useState(true);
  const [firstNameSortColorAsc, setFirstNameSortColorAsc] = useState("#f44336");
  const [firstNameSortColorDes, setFirstNameSortColorDes] = useState("#707070");
  const [lastNameSortColorAsc, setLastNameSortColorAsc] = useState("#f44336");
  const [lastNameSortColorDes, setLastNameSortColorDes] = useState("#707070");
  const [ageSortColorAsc, setAgeSortColorAsc] = useState("#f44336");
  const [ageSortColorDes, setAgeSortColorDes] = useState("#707070");
  const [emailSortColorAsc, setEmailSortColorAsc] = useState("#f44336");
  const [emailSortColorDes, setEmailSortColorDes] = useState("#707070");
  const [websiteSortColorAsc, setWebsiteSortColorAsc] = useState("#f44336");
  const [websiteSortColorDes, setWebsiteSortColorDes] = useState("#707070");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const redirectToLogin = () => {
    navigate("/login");
  };

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

  const firstNameSortingAsc = () => {
    if (firstNameSortOrder) {
      setFirstNameSortColorAsc("#707070");
      setFirstNameSortColorDes("#f44336");
      setFirstNameSortAsc(true);
      displayUsers.sort(function (a, b) {
        let x = a.first_name.toLowerCase();
        let y = b.first_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setFirstNameSortOrder(false);
    } else {
      setFirstNameSortOrder(false);
    }
  };

  const firstNameSortingDes = () => {
    if (!firstNameSortOrder) {
      setFirstNameSortColorAsc("#f44336");
      setFirstNameSortColorDes("#707070");
      setFirstNameSortDes(true);
      displayUsers.sort(function (a, b) {
        let x = a.first_name.toLowerCase();
        let y = b.first_name.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      });
      setFirstNameSortOrder(true);
    } else {
      setFirstNameSortOrder(true);
    }
  };

  const lastNameSortingAsc = () => {
    if (lastNameSortOrder) {
      setLastNameSortColorAsc("#707070");
      setLastNameSortColorDes("#f44336");
      setLastNameSortAsc(true);
      displayUsers.sort(function (a, b) {
        let x = a.last_name.toLowerCase();
        let y = b.last_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setLastNameSortOrder(false);
    } else {
      setLastNameSortOrder(false);
    }
  };

  const lastNameSortingDes = () => {
    if (!lastNameSortOrder) {
      setLastNameSortColorAsc("#f44336");
      setLastNameSortColorDes("#707070");
      setLastNameSortDes(true);
      displayUsers.sort(function (a, b) {
        let x = a.last_name.toLowerCase();
        let y = b.last_name.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      });
      setLastNameSortOrder(true);
    } else {
      setLastNameSortOrder(true);
    }
  };

  const ageSortingAsc = () => {
    if (ageSortOrder) {
      setAgeSortColorAsc("#707070");
      setAgeSortColorDes("#f44336");
      setAgeSortAsc(true);
      displayUsers.sort(function (a, b) {
        return a.age - b.age;
      });
      setAgeSortOrder(false);
    } else {
      setAgeSortOrder(false);
    }
  };

  const ageSortingDes = () => {
    if (!ageSortOrder) {
      setAgeSortColorAsc("#f44336");
      setAgeSortColorDes("#707070");
      setAgeSortDes(true);
      displayUsers.sort(function (a, b) {
        return b.age - a.age;
      });
      setAgeSortOrder(true);
    } else {
      setAgeSortOrder(true);
    }
  };

  const emailSortingAsc = () => {
    if (emailSortOrder) {
      setEmailSortColorAsc("#707070");
      setEmailSortColorDes("#f44336");
      setEmailSortAsc(true);
      displayUsers.sort(function (a, b) {
        let x = a.email.toLowerCase();
        let y = b.email.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setEmailSortOrder(false);
    } else {
      setEmailSortOrder(false);
    }
  };

  const emailSortingDes = () => {
    if (!emailSortOrder) {
      setEmailSortColorAsc("#f44336");
      setEmailSortColorDes("#707070");
      setEmailSortDes(true);
      displayUsers.sort(function (a, b) {
        let x = a.email.toLowerCase();
        let y = b.email.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      });
      setEmailSortOrder(true);
    } else {
      setEmailSortOrder(true);
    }
  };

  const websiteSortingAsc = () => {
    if (websiteSortOrder) {
      setWebsiteSortColorAsc("#707070");
      setWebsiteSortColorDes("#f44336");
      setWebsiteSortAsc(true);
      displayUsers.sort(function (a, b) {
        let x = a.web.toLowerCase();
        let y = b.web.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setWebsiteSortOrder(false);
    } else {
      setWebsiteSortOrder(false);
    }
  };

  const websiteSortingDes = () => {
    if (!websiteSortOrder) {
      setWebsiteSortColorAsc("#f44336");
      setWebsiteSortColorDes("#707070");
      setWebsiteSortDes(true);
      displayUsers.sort(function (a, b) {
        let x = a.web.toLowerCase();
        let y = b.web.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      });
      setWebsiteSortOrder(true);
      setWebsiteSortDes(false);
    } else {
      setWebsiteSortOrder(true);
    }
  };

  return (
    <>
      {displayUsers.length ? (
        <UsersPage>
          <UsersTitle>{displayUsers.length} Users</UsersTitle>
          <SearchSection>
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
            <div>
              {user.email ? (
                <Button
                  variant="contained"
                  endIcon={<FiLogOut />}
                  onClick={logout}
                >
                  logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<AiOutlineLogin />}
                  onClick={redirectToLogin}
                >
                  login
                </Button>
              )}
            </div>
          </SearchSection>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ background: "#fafafa" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <>First Name </>
                      <SortingIcons>
                        <CgSortZa
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: firstNameSortColorAsc,
                          }}
                          onClick={firstNameSortingAsc}
                        />
                        <CgSortAz
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: firstNameSortColorDes,
                          }}
                          onClick={firstNameSortingDes}
                        />
                      </SortingIcons>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <>Last Name </>
                      <SortingIcons>
                        <CgSortZa
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: lastNameSortColorAsc,
                          }}
                          onClick={lastNameSortingAsc}
                        />
                        <CgSortAz
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: lastNameSortColorDes,
                          }}
                          onClick={lastNameSortingDes}
                        />
                      </SortingIcons>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <>Age </>
                      <SortingIcons>
                        <CgSortZa
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: ageSortColorAsc,
                          }}
                          onClick={ageSortingAsc}
                        />
                        <CgSortAz
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: ageSortColorDes,
                          }}
                          onClick={ageSortingDes}
                        />
                      </SortingIcons>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <>Email </>
                      <SortingIcons>
                        <CgSortZa
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: emailSortColorAsc,
                          }}
                          onClick={emailSortingAsc}
                        />
                        <CgSortAz
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: emailSortColorDes,
                          }}
                          onClick={emailSortingDes}
                        />
                      </SortingIcons>
                    </div>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <>Website </>
                      <SortingIcons>
                        <CgSortZa
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: websiteSortColorAsc,
                          }}
                          onClick={websiteSortingAsc}
                        />
                        <CgSortAz
                          size={10}
                          style={{
                            cursor: "pointer",
                            color: websiteSortColorDes,
                          }}
                          onClick={websiteSortingDes}
                        />
                      </SortingIcons>
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              {!tableUserName &&
              (!firstNameSortAsc ||
                !firstNameSortDes ||
                !lastNameSortAsc ||
                !lastNameSortDes ||
                !ageSortAsc ||
                !ageSortDes ||
                !emailSortAsc ||
                !emailSortDes ||
                !websiteSortAsc ||
                !websiteSortDes) ? (
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
