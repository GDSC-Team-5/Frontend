import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";

function SearchingList({ searchinglist, location }) {
  const searchResults = searchinglist;

  return (
    <div>
      <Nav />
      <div>
        <h3 style={{ position: "absolute", top: "13%" }}>
          {location} 검색 결과
        </h3>
        <div>
          {searchResults.length === 0 ? (
            <p style={{ position: "absolute", top: "18%" }}>
              검색 결과가 없습니다.
            </p>
          ) : (
            searchResults.map((result) => (
              <div key={result.id}>
                <div>
                  <strong>{result.place_name}</strong>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchingList;
