import React from "react";
import Axios from "axios";
import "./Section/MyPage.css";
import CheckableTag from "antd/lib/tag/CheckableTag";
import Profile from "./Section/Profile";
import Subscription from "./Section/Subscription";
function MyPage() {
 
  return (
    <div style={{ backgroundColor: "aliceblue", padding: "100px" }}>
      {/* <Profile /> */}
      <Subscription />
    </div>
  );
}

export default MyPage;
