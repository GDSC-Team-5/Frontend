import React from "react";
import Nav from "../Nav/Nav";
import "./TopList.css";
import Default1 from "../../assets/images/topList.png";

const CateData = [
  {
    id: 1,
    name: "#전체",
  },
  {
    id: 2,
    name: "#강남",
  },
  {
    id: 3,
    name: "#강남",
  },
  {
    id: 4,
    name: "#강남",
  },
  {
    id: 5,
    name: "#강남",
  },
  {
    id: 6,
    name: "#강남",
  },
  {
    id: 7,
    name: "#강남",
  },
  {
    id: 8,
    name: "#강남",
  },
  {
    id: 9,
    name: "#강남",
  },
];

const CateBtn = () => {
  return (
    <>
      {CateData.map((Cate) => (
        <button key={Cate.id} className="CateBtn">
          {Cate.name}
        </button>
      ))}
    </>
  );
};

const TopListData = [
  {
    id: 1,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
  {
    id: 2,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
  {
    id: 3,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
  {
    id: 4,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
  {
    id: 5,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
  {
    id: 6,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
];

function TopList() {
  return (
    <div>
      <Nav />
      <span className="title">
        <h5>"어-맛!" 소리 나는 맛집 리스트</h5>
      </span>
      <div id="CateWrap">
        <CateBtn />
      </div>

      <div className="TopList">
        {TopListData.map((list) => (
          <div className="TopListItem" key={list.id}>
            <a href="./detailTopList">
              <img src={list.image} alt={list.name} />
              <div className="TopListInfo">
                {list.name} 맛집 베스트 {list.count}곳<p>{list.text}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopList;
