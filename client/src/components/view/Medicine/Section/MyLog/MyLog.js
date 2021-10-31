import React, { useEffect, useState } from "react";
import AddPill from "./AddPill";
import Axios from "axios";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  ExclamationCircleOutlined,
  Icon,
} from "@ant-design/icons";
import PillInfo from "./Info/PillInfo";
import { Calendar, Divider, Modal } from "antd";
import moment from "moment";
import "./MyLog.css";
import LogInfo from "./Info/LogInfo";
import AlertInfo from "./Info/AlertInfo";
import DateSelector from "./DateSelector";

function MyLog(props) {
  const today = props.today;
  const [isModifyVisible, setisModifyVisible] = useState(false);
  const [range, setRange] = useState([]);
  const [quantity, setQuantity] = useState();
  const [modalIndex, setModalIndex] = useState(0);
  const [isModalVisible, setisModalVisible] = useState(false);

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "." + month + "." + day;
  const variable = {
    user: localStorage.getItem("userId"),
  };

  const renderPills = props.MyLogInfo.map((log, index) => {
    console.log(index, "log정보");
    console.log(log);
    // setRange([moment(log.START_DATE), moment(log.END_DATE)])
    // setQuantity(log.quantity)
    const pillVariable = {
      id: log._id,
    };

    const handleClick = () => {
      setModalIndex(index);
      setisModalVisible(true);
    };

    const handleOk = () => {
      setisModalVisible(false);
      setisModifyVisible(false);
    };
    const handleModify = () => {
      setisModifyVisible(true);
    };
    // today => 현재시간까지 기록됨
    // log에 기록된 date => 아침 9시
    //
    if (
      log.user &&
      Date.parse(log.END_DATE) >= Date.parse(today) &&
      Date.parse(log.START_DATE) <= Date.parse(today)
    ) {
      return (
        <div className="medicineItem">
          <img
            src={log.IMG_SRC}
            alt="pill"
            style={{
              width: "-webkit-fill-available",
              crop: "50px",
              cursor: "pointer",
            }}
            onClick={handleClick}
          />
          <div className="itemInfo" onClick={handleClick}>
            <div className="itemName">
              {log.medicineId.ITEM_NAME}{" "}
              <div className="exclamation">
                {log.cautionWith && <ExclamationCircleOutlined />}
              </div>
            </div>
            <span className="entpName">{log.medicineId.ENTP_NAME} | </span>{" "}
            <span className="quantity">{log.QUANTITY}알</span>
          </div>
          <div></div>
        </div>
      );
    }
  });
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      <div id="medicineBox">
        <div className="basicBox">
          <center>
            <DateSelector
              setToday={props.setToday}
              dateString={dateString}
              today={today}
            />
            {/* <div className="dateDiv">
            <CaretLeftOutlined
              onClick={() => {
                props.setToday(
                  new Date(today.setDate(props.today.getDate() - 1))
                );
              }}
            />
            {""}
            {dateString}
            <div className="calendarCard">
              <Calendar fullscreen={false} onSelect={onSelect}></Calendar>
            </div>
            <CaretRightOutlined
              onClick={() => {
                props.setToday(
                  new Date(today.setDate(props.today.getDate() + 1))
                );
              }}
            />
          </div> */}
          </center>
          <br />
          <div className="logBox">
            {renderPills}
            <AddPill
              setToday={props.setToday}
              Changed={props.Changed}
              setChanged={props.setChanged}
              MyLogInfo={props.MyLogInfo}
            />
            <Divider />
            <div className="explain">
              본 서비스는 한국 약학정보원에서 제공하는
              <br />
              DUR품목정보 데이터를 기반으로 만들어졌습니다.
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
      {props.MyLogInfo[0] && (
        <Modal
          title="먹는 약 정보"
          visible={isModalVisible}
          footer={null}
          closable={false}
        >
          <center>
            {props.MyLogInfo[modalIndex] && (
              <div>
                <PillInfo
                  className="selected"
                  item_name={props.MyLogInfo[modalIndex].medicineId.ITEM_NAME}
                  drug_cd={props.MyLogInfo[modalIndex].medicineId.DRUG_CD}
                />
                <LogInfo
                  range={[
                    moment(props.MyLogInfo[modalIndex].START_DATE),
                    moment(props.MyLogInfo[modalIndex].END_DATE),
                  ]}
                  Changed={props.Changed}
                  setChanged={props.setChanged}
                  quantity={props.MyLogInfo[modalIndex].QUANTITY}
                  setQuantity={setQuantity}
                  isModalVisible={isModalVisible}
                  setisModalVisible={setisModalVisible}
                  logId={props.MyLogInfo[modalIndex]._id}
                  mixtureInfo={props.MyLogInfo[modalIndex].mixtureId}
                  storage_method={
                    props.MyLogInfo[modalIndex].medicineId.STORAGE_METHOD
                  }
                />
              </div>
            )}

            <div id="banAlert" style={{ color: "red" }}></div>
          </center>
        </Modal>
      )}
    </div>
  );
}

export default MyLog;
