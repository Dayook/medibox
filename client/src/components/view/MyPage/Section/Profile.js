import React, { useState } from "react";
import Axios from "axios";
import profile from "../../../images/profile.png";

function Profile(props) {
  const user = props.UserInfo;
  // const [subscribe, setsubscribe] = useState("");

  let subscribe;
  if (props.Subscription === 0) {
    subscribe = "개인용";
  } else if (props.Subscription === 1) {
    subscribe = "가족용";
  } else if (props.Subscription === 2) {
    subscribe = "기업용";
  }
  // const subscription = () => {

  // };
  console.log(user);
  if (user) {
    return (
      <div>
        <div className="profile" style={{}}>
          <div></div>
          <br></br>
          <div>
            <img src={profile} alt="profile" className="profilePic"></img>
          </div>
          <div className="profileInfo" style={{ fontSize: "30px" }}>
            {user.nickname}
            <br />
            <span className="email">{user.email}</span>
            <div>{subscribe} 사용중</div>
          </div>
          <br />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Profile;
