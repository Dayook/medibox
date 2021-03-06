import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Section/MyPage.css";
import Profile from "./Section/Profile";
import Subscription from "./Section/Subscription";
function MyPage() {
  const [subscription, setSubscription] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const variable = {
      user: localStorage.getItem("userId"),
    };
    Axios.post("/api/users/subscription", variable).then((response) => {
      if (response.data.success) {
        setSubscription(response.data.user.subscription);
        setUserInfo(response.data.user);
      } else {
        alert("실패");
      }
    });

  }, [subscription]);

  return (
    <div className="profileContainer">
      <Profile UserInfo={userInfo} Subscription={subscription} />
      <Subscription
        Subscription={subscription}
        setSubscription={setSubscription}
      />
    </div>
  );
}

export default MyPage;
