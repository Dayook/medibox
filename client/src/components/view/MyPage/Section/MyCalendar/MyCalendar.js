import pill from "../../../../../pill.svg";
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
  let dateSet;

  const renderDate = () => {
    props.MyLogInfo.map((log, index) => {
      let startDate = new Date(log.START_DATE);
      let endDate = new Date(log.END_DATE);
      let dDate = startDate.setDate(startDate.getDate());
      while (startDate <= endDate) {
        dateMap.push({ date: dDate });
        dDate = startDate.setDate(startDate.getDate() + 1);
      }
      console.log(dateMap);
    });
  };

  function handleDateClick(info) {
    alert("클릭 시 myLog => 해당 날짜로 이동하게 만들 것");
    props.setToday(info.date);
  }
  function renderEventContent() {
    return (
      <div style={{ margin: "0 auto" }}>
        <img src={pill} alt="pill" width="20px"></img>
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
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={dateMap}
        eventClick={handleDateClick}
      ></FullCalendar>
      {renderDate()}
    </div>
  );
}

export default MyCalendar;
