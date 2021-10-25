import React from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Calendar } from "antd";
function DateSelector(props) {
  const onSelect = (value) => {
    console.log(value);
    props.setToday(new Date(value));
  };
  return (
    <div className="dateDiv">
      <CaretLeftOutlined
        onClick={() => {
          props.setToday(
            new Date(props.today.setDate(props.today.getDate() - 1))
          );
        }}
      />
      {""}
      {props.dateString}
      <div className="calendarCard">
        <Calendar fullscreen={false} onSelect={onSelect}></Calendar>
      </div>
      <CaretRightOutlined
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
