import styled from "styled-components";

export const UsersPage = styled.div`
  padding: 35px;
`;

export const UsersTitle = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 560px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
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
  align-items: flex-end;
  gap: 25px;
`;

export const DetailsPageTitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const LogoutBtn = styled.div`
  margin-top: 0;
  @media screen and (max-width: 560px) {
    margin-top: 36px;
  }
`;

export const ArrowNavigate = styled.div`
  cursor: pointer;
`;

export const UserFullName = styled.div`
  margin: 0;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin: 0;
  }
`;

export const UserDetailsTable = styled.div`
  padding: 64px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 36px;
  margin-bottom: 12px;
`;

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 85px;
  margin-bottom: 125px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LoginFormImg = styled.img`
  width: 60%;
  @media screen and (max-width: 1168px) {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 75%;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const FormCard = styled.div`
  box-shadow: 0 0 20px 1px rgb(0 0 0 / 10%);
  z-index: 1000;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 2.8rem 2.2rem;
  @media screen and (max-width: 450px) {
    padding: 2.5rem 0;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const RegistrationPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 85px;
  margin-bottom: 125px;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const RegFormCard = styled.div`
  box-shadow: 0 0 20px 1px rgb(0 0 0 / 10%);
  z-index: 1000;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 2.8rem 3.8rem;
  @media screen and (max-width: 450px) {
    padding: 2.5rem 2rem;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;