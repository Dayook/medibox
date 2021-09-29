import pill from "../../../../pill.svg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./MyCalendar.css";

function MyCalendar(props) {
  const [Hi, setHi] = useState([]);
  const [LogData, setLogData] = useState([]);
  const [IsLoaded, setIsLoaded] = useState(false);
  // const LogDate = [{ date: "2021-09-28" }, { date: "2021-09-30" }];
  // useEffect(() => {
  //   console.log("in calendar:", props.MyLogInfo);
  // }, []);
  // async function show

  let dateMap = [];

  const renderDate = () => {
    props.MyLogInfo.map((log, index) => {
      dateMap.push({ date: log.START_DATE });
      console.log(dateMap);
    });
  };

  function handleDateClick() {
    alert("hey");
  }
  function renderEventContent() {
    return (
      <div style={{ margin: "0 auto" }}>
        <img src={pill} alt="pill" width="25px"></img>
      </div>
    );
  }
  return (
    <div
      className="myCalendar"
      style={{ width: "800px", margin: "0px auto", paddingBottom: "100px" }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick
        eventContent={renderEventContent}
        events={dateMap}
      ></FullCalendar>
      {renderDate()}
    </div>
  );
}

export default MyCalendar;
