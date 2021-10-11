import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Section/MyPage.css";
import CheckableTag from "antd/lib/tag/CheckableTag";
import Profile from "./Section/Profile";
import Subscription from "./Section/Subscription";
function MyPage() {
  const [SubscriptionInfo, setSubscriptionInfo] = useState(0);
  useEffect(() => {
    const variable = {
      user: localStorage.getItem("userId"),
    };
    Axios.post("/api/users/subscription", variable).then((response) => {
      if (response.data.success) {
        setSubscriptionInfo(response.data.user.subscription);
      } else {
        alert("실패");
      }
    });
  });

  return (
    <div style={{ backgroundColor: "aliceblue", padding: "100px" }}>
      {/* <Profile /> */}
      <Subscription />
    </div>
  );
}

export default MyPage;
