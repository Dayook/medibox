import React from "react";
import Axios from "axios";

function Profile(props) {
  const user = props.UserInfo;
  console.log(user);
  if (user) {
    return (
      <div>
        <div
          className="basicBox"
          style={{
            width: "950px",
            margin: "0 auto",
            padding: "100px 50px",
          }}
        >
          <div></div>
          <br></br>
          <div>{user.email}</div>
          <div style={{ fontSize: "larger" }}>{user.nickname}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Profile;
