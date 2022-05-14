import styled from "styled-components";

export const UsersPage = styled.div`
  padding: 35px;
`;

export const UsersTitle = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-top: 28px;
  margin-bottom: 28px;
  & input {
    width: 285px;
    height: 41px;
    padding-left: 12px;
    font-size: 16px;
    border: 1px solid;
  }
`;

export const SearchBtn = styled.button`
  width: 50px;
  height: 45.5px;
  background: transparent;
  border: 1px solid;
  cursor: pointer;
`;

export const SortingIcons = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailsPage = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ArrowNavigate = styled.div`
  cursor: pointer;
`;