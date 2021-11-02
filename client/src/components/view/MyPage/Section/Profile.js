import React, { useState } from "react";
import Axios from "axios";
import profile from "../../../images/profile.png";

function Profile(props) {
  const user = props.UserInfo;

  let subscribe;
  if (props.Subscription === 0) {
    subscribe = "개인용";
  } else if (props.Subscription === 1) {
    subscribe = "가족용";
  } else if (props.Subscription === 2) {
    subscribe = "기관용";
  }
  if (user) {
    return (
      <div>
        <div className="profile" style={{}}>
          <div></div>
          <br></br>
          <div>
            <img src={profile} alt="profile" className="profilePic"></img>
          </div>
          <div className="profileInfo">
            <span className="nickName">{user.nickname}</span>
            <br />
            <span className="email">{user.email}</span>
            <div className="subInfo">{subscribe} 사용중</div>
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
