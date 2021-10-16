import React from "react";

function Banner() {
  return (
    <div style={{ padding: " 100px 0", margin: "0 auto", width: "65vw" }}>
      <div className="banner" style={{}}>
        <div className="first">
          나의 처방전
          <br />
          &<br />
          의약품 달력
          <br />
          <span className="sub">복약상황을 날짜별로 확인해보세요</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
