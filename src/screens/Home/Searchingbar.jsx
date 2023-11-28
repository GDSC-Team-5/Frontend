import React, { useState } from "react";
import mainBackgroundImg from "../../assets/images/mainBackground.jpg";
import "./Searchingbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const searchBoxStyle = {
  marginLeft: "25%",
  width: "50%",
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

function Searchingbar({ setLocation, location, handleSearch }) {
  // const [location, setLocation] = useState("");

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://semtle.catholic.ac.kr:8082/search/${location}`
  //     );
  //     if (response.data) {
  //       console.log("검색성공:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("에러:", error);
  //   }
  // };

  // const navigate = useNavigate();

  // const handleSearch = () => {
  //   navigate(`/search?location=${location}`);
  // };

  return (
    <div id="main-wrap">
      <img src={mainBackgroundImg} alt="mainBackgroundImg" id="mainImg" />

      <div id="searching">
        <Form className="d-flex me-auto">
          <FormControl
            list="locations" // 연결할 데이터리스트의 id를 지정
            type="search"
            placeholder="지역, 식당 또는 음식"
            className="me-2"
            style={searchBoxStyle}
            aria-label="Search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Button
            variant="white"
            // type="submit"
            style={searchButtonStyle}
            onClick={handleSearch}
          />
        </Form>
      </div>
    </div>
  );
}

export default Searchingbar;
