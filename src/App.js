import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Search from "./screens/SearchingList/SearchingList";
import SignUp from "./screens/SignUp/SignUp";
import TopList from "./screens/TopList/TopList";
import DetailTopList from "./screens/TopList/DetailTopList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/top_lists" element={<TopList />} />
          <Route path="/detailTopList" element={<DetailTopList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
