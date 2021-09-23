import React from "react";

function News() {
  return (
    <div className="news">
      <h1>뉴스뉴스 what's news</h1>
      <hr />
      <div className="container" style={{ display: "flex" }}>
        <div
          style={{
            width: "300px",
            height: "400px",
            display: "flex",
            backgroundColor: "orange",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "400px",
            display: "flex",
            backgroundColor: "orange",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "400px",
            display: "flex",
            backgroundColor: "orange",
          }}
        ></div>
      </div>
    </div>
  );
}

export default News;
