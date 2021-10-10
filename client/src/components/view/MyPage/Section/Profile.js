import React from "react";
import Axios from "axios";

function Profile() {
  Axios.post("/api/users/info", localStorage.getItem("userId")).then(
    (response) => {
      if (response.data.success) {
        alert("success");
      } else {
      }
    }
  );
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
        ㅇㅇ
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
}

export default Profile;
