import React from "react";
import MyCalendar from "./MyCalendar";
import MyLog from "./MyLog/MyLog";

function MyMedicine() {
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <div
        className="container"
        style={{
          width: "1100px",
          margin: "0 auto",
        }}
      >
        <MyLog style={{ padding: " 100px" }} />
        <MyCalendar
          style={{ padding: "50px 0px", width: "768px" }}
        ></MyCalendar>
      </div>
    </div>
  );
}

export default MyMedicine;
