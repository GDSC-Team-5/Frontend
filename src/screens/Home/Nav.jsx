import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

/*const navbarContainerStyle = {
  width: "1920px",
  flexShrink: 0,
  background: "#FFF",
  boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.20)",
};

const searchBoxStyle = {
  marginLeft: "180px",
  width: "772px",
  height: "43px",
  flexShrink: 0,
  borderRadius: "35rem",
  background: "#FFF",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
};

const searchButtonStyle = {
  width: "59px",
  height: "49.6px",
  marginLeft: "-70px",
  marginTop: "-3.2px",
  marginRight: "128px",
  flexShrink: 0,
  backgroundImage: "url('/searchBtn.png')",
  backgroundSize: "cover",
  border: "none",
};*/

const navbarContainerStyle = {
  margin: "none",
  width: "1920px",
  flexShrink: 0,
  background: "#FFF",
  boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.20)",
};

const searchBoxStyle = {
  marginLeft: "180px",
  width: "70%",
  height: "43px",
  flexShrink: 0,
  borderRadius: "35rem",
  background: "#FFF",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
};

const searchButtonStyle = {
  width: "59px",
  height: "49.6px",
  marginLeft: "-70px",
  marginTop: "-3.2px",
  marginRight: "300px",
  flexShrink: 0,
  backgroundImage: "url('/searchBtn.png')",
  backgroundSize: "cover",
  border: "none",
};

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로그아웃 로직을 처리한 후 로그인 상태를 변경
    setIsLoggedIn(false);
  };
  return (
    <Container style={navbarContainerStyle}>
      <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              alt="logo"
              width="65"
              height="65"
              style={{ borderRadius: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex me-auto">
              <FormControl
                type="search"
                placeholder="지역, 식당 또는 음식"
                className="me-2"
                style={searchBoxStyle}
                aria-label="Search"
              />
              <Button variant="white" type="submit" style={searchButtonStyle} />
            </Form>
            <Nav className="me-auto">
              <li className="nav-item">
                <a className="nav-link" href="./SearchingList">
                  맛집리스트
                </a>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={handleLogout}>
                    로그아웃
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="./login">
                    로그인
                  </a>
                </li>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
