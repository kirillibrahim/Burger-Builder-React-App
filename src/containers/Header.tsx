import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #c0764f;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ListItem = styled.li`
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      background-color: #111;
    }
  }
`;

const Header = () => {
  const logoutClick = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload(false);
    //  window.location.href = "/";
  };
  return (
    <HeaderContainer>
      <List>
        <ListItem style={{ float: "right" }}>
          <NavLink to="/" onClick={logoutClick}>
            Logout
          </NavLink>
        </ListItem>
      </List>
    </HeaderContainer>
  );
};

export default Header;
