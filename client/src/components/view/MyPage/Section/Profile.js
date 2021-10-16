import React from "react";
import Axios from "axios";
import profile from "../../../images/profile.png";

function Profile(props) {
  const user = props.UserInfo;
  console.log(user);
  if (user) {
    return (
      <div>
        <div
          style={{
            width: "65vw",
            margin: "0 auto",
            padding: "100px 20px",
            display: "flex",
          }}
        >
          <div></div>
          <br></br>
          <div>
            <img
              src={profile}
              width="200px"
              alt="profile"
              style={{ display: "flex" }}
            ></img>
          </div>
          <div style={{ fontSize: "larger" }}>{user.nickname}</div>
          <div>{user.email}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Profile;
