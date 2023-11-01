import React from "react";
import "../Home/Home.css" //이거 주소 어떻게..
import DefaultImg from "../../assets/images/bibim.png";
import Nav from "./Nav";


const restaurantData = [
  {
    id: 1,
    name: "신도림역",
    count: 20,
    image: DefaultImg, //이미지가 안떠요..

  },
  {
    id: 2,
    name: "온수역",
    count: 40,
    image: DefaultImg,
  },
  {
    id: 3,
    name: "오류동역",
    count: 100,
    image: DefaultImg,
  },
];


function Home() {

  return(
    <div>
      <Nav />
      <h5 id="topText" >어맛! 소리 나는 맛집 리스트</h5>
      <ul id="list">
        {restaurantData.map((restaurant) => (
          <li key={restaurant.id}>
            <div class="user-wrap">
              <div class="user-image"><img src={restaurant.image} alt={restaurant.name} /></div>
              <div class="user-text">
                 <p>{restaurant.name} 맛집 베스트 {restaurant.count}곳</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
