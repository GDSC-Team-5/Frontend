import { atom } from "recoil";

// 홈 검색바에 검색어 입력 상태를 다룸.
export const locationState = atom({
  key: "location",
  default: "",
});

// 검색바에서 받아 온 응답을 저장하는 상태
export const locationResponseState = atom({
  key: "locationResponse",
  default: "",
});
