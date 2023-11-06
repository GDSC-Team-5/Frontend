import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const navbarContainerStyle = {
  position: "fixed",

  width: "100%",
  zIndex: "100",
  opacity: "0.9",
};

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로그아웃 로직을 처리한 후 로그인 상태를 변경
    setIsLoggedIn(false);
  };
  return (
    <div style={navbarContainerStyle}>
      <Navbar expand="lg" variant="light" bg="white">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              alt="logo"
              width="50"
              height="50"
              style={{ borderRadius: "10px", marginLeft: "100%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ marginLeft: "88%", fontWeight: "800" }}
            >
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
    </div>
  );
}

export default NavBar;
