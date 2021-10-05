import React from "react";
import Axios from "axios";
function MyPage() {
  Axios.post("/api/users/info", localStorage.getItem("userId")).then(
    (response) => {
      if (response.data.success) {
        alert("success");
      } else {
      }
    }
  );
  return (
    <div style={{ backgroundColor: "aliceblue", padding: "100px" }}>
      <div
        className="basicBox"
        style={{
          width: "1000px",
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
        ㅇㅇ ㅇㅇㅇㅇ<p></p>
        ㅇㅇ ㅇㅇㅇㅇ<p></p>
        ㅇㅇ ㅇㅇㅇㅇ<p></p>
        ㅇㅇ ㅇㅇ
      </div>
    </div>
  );
}

export default MyPage;
