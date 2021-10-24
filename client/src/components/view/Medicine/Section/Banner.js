import React from "react";

function Banner() {
  return (
    <div className="bannerContainer">
      <div className="banner" style={{}}>
        <div
          className="first"
          style={{ fontFamily: "NanumSquareRound", fontWeight: "600" }}
        >
          나의 처방전 &<br />
          의약품 달력
          <br />
          <span
            className="sub"
            style={{ fontFamily: "NanumSquareRound", fontWeight: "200" }}
          >
            복약상황을 날짜별로 확인해보세요
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
