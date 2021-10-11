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
            width: "900px",
            margin: "0 auto",
            padding: "100px 0",
          }}
        >
          <div></div>
          <br></br>
          ㅇㅇ<p></p>
          ㅇㅇ ㅇㅇㅇㅇ<p></p>
          ㅇㅇ ㅇㅇㅇㅇ<p></p>
          ㅇㅇ ㅇㅇㅇㅇ<p></p>
          ㅇㅇ ㅇㅇㅇㅇ<p></p>
          ㅇㅇ ㅇㅇ
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Profile;
