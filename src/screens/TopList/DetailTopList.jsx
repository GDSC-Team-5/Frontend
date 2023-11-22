import Nav from "../Nav/Nav";
import "./DetailTopList.css";
import BestImg from "../../assets/images/bestList.png";

const BestListData = [
  {
    id: 1,
    name: "가양칼국수버섯매운탕",
    image: BestImg,
  },
  {
    id: 2,
    name: "가양칼국수버섯매운탕",
    image: BestImg,
  },
  {
    id: 3,
    name: "가양칼국수버섯매운탕",
    image: BestImg,
  },
  {
    id: 4,
    name: "가양칼국수버섯매운탕",
    image: BestImg,
  },
];

function DetailTopList() {
  return (
    <div>
      <Nav />
      <span className="detailTitle">
        <h3>얼큰한 칼국수 맛집 베스트 20곳</h3>
      </span>
      <span className="detailSubTitle">
        <h6>"한국인 맞춤 얼큰칼칼 칼국수 다모여!"</h6>
      </span>
      <hr className="line" />

      <div className="BestList">
        {BestListData.map((list) => (
          <div className="BestListItem" key={list.id}>
            <img src={list.image} alt={list.name} />

            <span className="BestText">
              {list.id}.{list.name}
            </span>
            <hr className="line2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailTopList;
