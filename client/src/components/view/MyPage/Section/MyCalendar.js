import { Calendar, Badge } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import Axios from "axios"
import "./MyCalendar.css";
import axios from "axios";

function MyCalendar() {
  useEffect(() => {
    Axios.post("/api/")
  }, [])

  function handleDateClick() {
    alert("hey");
  }
  function renderEventContent() {
    return (
      <>
        <b>냥</b>
        <i>냥냥</i>
      </>
    );
  }
  return (
    <div className="myCalendar" style={{ width: "800px", margin: "0 auto" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={[{ title: "hi", date: "2021-09-21" }]}
        style={{ height: "800px" }}
      ></FullCalendar>
    </div>
  );
}

export default MyCalendar;
