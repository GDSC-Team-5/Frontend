import { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Search from "./screens/SearchingList/SearchingList";
import SignUp from "./screens/SignUp/SignUp";
import TopList from "./screens/TopList/TopList";
import DetailTopList from "./screens/TopList/DetailTopList";
import SearchingList from "./screens/SearchingList/SearchingList";

function App() {
  const [location, setLocation] = useState("");
  const [searchinglist, setSearchinglist] = useState();
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://semtle.catholic.ac.kr:8082/search/${location}`
      );
      if (response.data) {
        console.log("검색성공:", response.data);
        setSearchinglist(response.data);
      }
    } catch (error) {
      console.error("에러:", error);
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setLocation={setLocation}
                location={location}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/top_lists" element={<TopList />} />
          <Route path="/detailTopList" element={<DetailTopList />} />
          <Route
            path="/searchinglist"
            element={
              <SearchingList
                searchinglist={searchinglist}
                location={location}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
