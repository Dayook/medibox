import React, { useEffect, useState } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Calendar } from "antd";
function DateSelector(props) {
  const [Visibility, setVisibility] = useState(false);
  useEffect(() => {
    if (Visibility === false) {
      document.getElementById("calendarCard").style.display = "none";
    } else {
      document.getElementById("calendarCard").style.display = "";
    }
  }, [Visibility]);
  const onSelect = (value) => {
    console.log(value);
    props.setToday(new Date(value));
    setVisibility(false);
  };
  const onClicked = () => {
    setVisibility(!Visibility);
  };
  return (
    <div className="dateDiv">
      <span> </span>
      <LeftCircleOutlined
        className="arrow"
        onClick={() => {
          props.setToday(
            new Date(props.today.setDate(props.today.getDate() - 1))
          );
        }}
      />
      {""}
      <span className="dateString" onClick={onClicked}>
        {props.dateString}
      </span>
      <div className="calendarCard" id="calendarCard">
        <Calendar fullscreen={false} onSelect={onSelect}></Calendar>
      </div>
      <RightCircleOutlined
        className="arrow"
        onClick={() => {
          props.setToday(
            new Date(props.today.setDate(props.today.getDate() + 1))
          );
        }}
      />
    </div>
  );
}

export default DateSelector;
