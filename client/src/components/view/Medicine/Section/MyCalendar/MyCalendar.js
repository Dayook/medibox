import pill from "../../../../../pill.svg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./MyCalendar.css";

function MyCalendar(props) {
  let dateMap = [];
  // const renderDate = () => {
  //   props.MyLogInfo.map((log, index) => {
  //     let startDate = new Date(log.START_DATE);
  //     let endDate = new Date(log.END_DATE);
  //     let dDate = startDate.setDate(startDate.getDate());
  //     const info = log.medicineId;
  //     console.log(log);
  //     console.log(info);
  //     while (startDate <= endDate) {
  //       dateMap.push({ date: dDate });
  //       dDate = startDate.setDate(startDate.getDate() + 1);
  //     }
  //     console.log(dateMap);
  //   });
  // };

  const renderDate = props.MyLogInfo.map((log, index) => {
    let startDate = new Date(log.START_DATE);
    let endDate = new Date(log.END_DATE);
    let dDate = startDate.setDate(startDate.getDate());
    console.log(log);
    // 왜 이렇게 해줘야 하지?????
    let color;
    if (log.medicineId) {
      color = log.medicineId.COLOR;
    }
    while (startDate <= endDate) {
      dateMap.push({ date: dDate, color: color });
      // endDate 될때까지 하루 더하기
      dDate = startDate.setDate(startDate.getDate() + 1);
    }
    console.log(dateMap);
  });
  function handleDateClick(info) {
    props.setToday(info.date);
  }
  function handleEventClick(info) {
    props.setToday(info.event.start);
  }
  function renderEventContent(info) {
    return (
      <div style={{ margin: "0 auto" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: info.backgroundColor,
            borderRadius: 50,
            boxShadow: "0 1px 2px 0 rgba(31,31,31,0.15)",
          }}
        ></div>
      </div>
    );
  }
  return (
    <div
      className="myCalendar"
      style={{ width: "65vw", margin: "0px auto", paddingBottom: "100px" }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={dateMap}
        eventClick={handleEventClick}
      ></FullCalendar>
      {renderDate}
    </div>
  );
}

export default MyCalendar;
