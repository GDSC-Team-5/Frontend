// import React from "react";
// import "../Home/Home.css"
// import Default2 from "../../assets/images/bibim.png";
// import Default1 from "../../assets/images/kal.png";
// import Nav from "./Nav";
// import Searchingbar from "./Searchingbar";

// const foodData = [
//   {
//     id: 1,
//     name: "얼큰한 칼국수",
//     count: 20,
//     image: Default1,
//     text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',

//   },
// ];

// const restaurantData = [
//   {
//     id: 1,
//     name: "신도림역",
//     count: 20,
//     image: Default2,

//   },
//   {
//     id: 2,
//     name: "온수역",
//     count: 40,
//     image: Default2,
//   },
//   {
//     id: 3,
//     name: "오류동역",
//     count: 50,
//     image: Default2,
//   },
//   {
//     id: 4,
//     name: "용산역",
//     count: 100,
//     image: Default2,
//   },
// ];

// function Home() {

//   return(
//     <div>
//       <Nav />
//       <Searchingbar/>
//       <h5 id="topText" >어맛! 소리 나는 맛집 리스트</h5>

//       <ul id="list">
//       {foodData.map((food) => (
//         <li key={food.id}>
//         <div class="user-wrap">
//           <div class="user-image"><img src={food.image} alt={food.name} /></div>
//           <div class="user-text">
//              <h2><p>{food.name} 맛집 베스트 {food.count}곳</p></h2>
//              <p>{food.text}</p>
//           </div>
//         </div>
//         </li>
//       ))}
//       </ul>

//       <ul id="list">
//         {restaurantData.map((restaurant) => (
//           <li key={restaurant.id}>
//             <div class="user-wrap">
//               <div class="user-image"><img src={restaurant.image} alt={restaurant.name} /></div>
//               <div class="user-text">
//                  <p>{restaurant.name} 맛집 베스트 {restaurant.count}곳</p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import Default2 from "../../assets/images/bibim.png";
import Default1 from "../../assets/images/kal.png";
import "../Home/Home.css";
import Nav from "../Nav/Nav";
import Searchingbar from "./Searchingbar";

const foodData = [
  {
    id: 1,
    name: "얼큰한 칼국수",
    count: 20,
    image: Default1,
    text: '"한국인 맞춤 얼큰칼칼 칼국수 다모여!"',
  },
];

const restaurantData = [
  {
    id: 1,
    name: "신도림역",
    count: 20,
    image: Default2,
  },
  {
    id: 2,
    name: "온수역",
    count: 40,
    image: Default2,
  },
  {
    id: 3,
    name: "오류동역",
    count: 50,
    image: Default2,
  },
  {
    id: 4,
    name: "용산역",
    count: 100,
    image: Default2,
  },
];

function Home({ setLocation, location, handleSearch }) {
  return (
    <div>
      <Nav />
      <Searchingbar
        setLocation={setLocation}
        location={location}
        handleSearch={handleSearch}
      />
      <div className="list">
        <text className="listText">어맛! 소리 나는 맛집 리스트</text>
        <div className="foodList">
          {foodData.map((food) => (
            <div className="foodItem" key={food.id}>
              <img src={food.image} alt={food.name} />
              <div className="foodInfo">
                {food.name} 맛집 베스트 {food.count}곳<p>{food.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="foodList2">
          {restaurantData.map((restaurant) => (
            <div className="foodItem2" key={restaurant.id}>
              <img src={restaurant.image} alt={restaurant.name} />

              <div className="foodInfo2">
                {restaurant.name} 맛집
                <p>베스트 {restaurant.count}곳</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
