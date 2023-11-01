import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import SearchingList from "./screens/SearchingList/SearchingList";
import SignUp from "./screens/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/searchinglist" element={<SearchingList />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
