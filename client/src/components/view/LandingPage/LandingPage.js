import React, { useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";

export default function LandingPage() {
  useEffect(() => {
    axios.get("/api/user/logout").then((response) => {});
    return () => {};
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {});
  };
  return (
    <div>
      <div className="main">
        <div
          className="copywrite"
          style={{ padding: "100px 0px", width: "1000px", margin: "0 auto" }}
        >
          손 안에서 시작하는 <br></br> 의약품 관리
        </div>
      </div>
    </div>
  );
}
