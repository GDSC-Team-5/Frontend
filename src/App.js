import { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Search from "./screens/SearchingList/SearchingList";
import SignUp from "./screens/SignUp/SignUp";
import TopList from "./screens/TopList/TopList";
import DetailTopList from "./screens/TopList/DetailTopList";
import SearchingList from "./screens/SearchingList/SearchingList";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/top_lists" element={<TopList />} />
            <Route path="/detailTopList" element={<DetailTopList />} />
            <Route path="/searchinglist" element={<SearchingList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
