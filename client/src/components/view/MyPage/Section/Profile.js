import React from "react";
import Axios from "axios";
import profile from "../../../images/profile.png";

function Profile(props) {
  const user = props.UserInfo;
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
