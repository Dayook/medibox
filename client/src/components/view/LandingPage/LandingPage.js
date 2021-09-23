import React, { useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";

export default function LandingPage() {
  useEffect(() => {
    axios.get("/api/user/logout").then((response) => {});
    return () => {};
  }, []);

  const onClickHandler = () => {
    alert("MEDIKIT START");
  };
  return (
    <div>
      <div className="main">
        <div className="copyright">
          내가 아프고 외로울 때면 <br></br> 누가 날 위로해주지?<br></br>
          <button className="main-btn" onClick={onClickHandler}>
            메디킷 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
