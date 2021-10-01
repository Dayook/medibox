import React, { useEffect, useState } from "react";
import AddPill from "./AddPill";
import Pill from "./Pill";
import Axios from "axios";
import PillInfo from "./PillInfo";
import { Button, Modal } from "antd";
import "./MyLog.css";

function MyLog(props) {
  const [today, setToday] = useState(new Date());
  const [isModalVisible, setisModalVisible] = useState(false);
  let [AlertDiv, setAlertDiv] = useState("");
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;
  const variable = {
    user: localStorage.getItem("userId"),
  };
  const renderPills = props.MyLogInfo.map((log, index) => {
    const pillVariable = {
      id: log._id,
    };
    const handleClick = () => {
      setisModalVisible(true);
    };

    const handleOk = () => {
      setisModalVisible(false);
    };
    const handleCancel = () => {
      console.log(Range);
      setisModalVisible(false);
    };
    // alert(Date.parse(log.START_DATE - ) + "today" + Date.parse(today));
    if (
      log.user &&
      Date.parse(log.END_DATE) >= Date.parse(today) &&
      Date.parse(log.START_DATE) - 46400000 <= Date.parse(today)
    ) {
      return (
        <div className="medicineItem">
          <span className="itemName">{log.ITEM_NAME}</span>
          <br></br>
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

          <span className="quantity">{log.QUANTITY}개</span>
          <button
            className="delete"
            onClick={() => {
              Axios.post("/api/medicines/deleteLog", pillVariable).then(
                (response) => {
                  if (response.data.success) {
                    props.setChanged(!props.Changed);
                  } else {
                    alert("실패");
                  }
                }
              );
            }}
          >
            X
          </button>
          <Modal
            title="먹는 약 등록"
            visible={isModalVisible}
            // onOk={handleOk}
            // onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                취소
              </Button>,
              <Button key="confirm" type="primary" onClick={handleOk}>
                확인
              </Button>,
            ]}
          >
            <center>
              <div>
                <br></br>
                <PillInfo
                  className="selected"
                  item_name={log.MATERIAL_NAME}
                  insert_file={log.INSERT_FILE}
                  storage_method={log.STORAGE_METHOD}
                />
                복용 기간
                <br />
                <br />
                복용량(하루에 먹는 개수)
                <br />
              </div>
              <div id="banAlert" style={{ color: "red" }}>
                {AlertDiv}
              </div>
            </center>
          </Modal>
        </div>
      );
    }
  });
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "100px 0",
      }}
    >
      <div className="basicBox">
        <center>
          {dateString}
          <h2>나의 처방전</h2>
        </center>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0 10px",
            margin: "0 5px",
            marginLeft: "10px",
          }}
        >
          {renderPills}
          <AddPill
            Changed={props.Changed}
            setChanged={props.setChanged}
            MyLogInfo={props.MyLogInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default MyLog;
