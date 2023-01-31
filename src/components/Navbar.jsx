import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyleNavbar = styled.div`
  background-color: black;
  color: white;
  margin: 0 0 3rem 0rem;
  height: 4rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: orange;
  font-size: larger;
  margin-left: 1rem;
`;

const StyleContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: right;
  margin: auto 2rem auto auto;
`;

const StyleUl = styled.ul`
  margin: auto 2rem auto 2rem;
  color: white;
  list-style: none;
  display: flex;
  float: left;
`;

const StyleLink = styled(Link)`
  margin-right: 1rem;
`;
//-------------------------------------------------

const Navbar = ({ search, setSearch, setRefresh }) => {
  return (
    <div>
      {/*<StyleNavbar>*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Logo className="logo" to="/">
          NewsApp
        </Logo>
        <StyleContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <StyleUl>
              <li className="nav-item">
                <StyleLink
                  className="test nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </StyleLink>
              </li>
              <li className="nav-item">
                <StyleLink
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </StyleLink>
              </li>
              <li className="nav-item">
                <StyleLink
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </StyleLink>
              </li>
              <li className="nav-item">
                <StyleLink
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </StyleLink>
              </li>
              <li className="nav-item">
                <StyleLink
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </StyleLink>
              </li>
              <SearchBar search={search} setSearch={setSearch} setRefresh={setRefresh} />
            </StyleUl>
          </div>
        </StyleContainer>
      </nav>
      {/*</StyleNavbar>*/}
    </div>
  );
};

export default Navbar;
