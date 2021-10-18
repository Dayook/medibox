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
import { Button, Divider, Modal } from "antd";
import moment from "moment";
import "./MyLog.css";
import LogInfo from "./Info/LogInfo";
import AlertInfo from "./Info/AlertInfo";

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
  var dateString = year + "-" + month + "-" + day;
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

    const modifySubmit = () => {
      alert("얍");
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
    // alert(Date.parse(log.START_DATE));
    if (
      log.user &&
      Date.parse(log.END_DATE) >= Date.parse(today) &&
      Date.parse(log.START_DATE) - 60 * 60 * 24 * 1000 <= Date.parse(today)
    ) {
      return (
        <div className="medicineItem">
          <span className="itemName">{log.medicineId.ITEM_NAME}</span>
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
          <div>
            <button
              className="delete"
              onClick={() => {
                if (
                  window.confirm(
                    "다른 날짜의 복용 정보까지 모두 삭제됩니다.\n정말 삭제하시겠습니까?"
                  )
                ) {
                  Axios.post("/api/medicines/deleteLog", pillVariable).then(
                    (response) => {
                      if (response.data.success) {
                        props.setChanged(!props.Changed);
                      } else {
                        alert("실패");
                      }
                    }
                  );
                }
              }}
            >
              X
            </button>
          </div>
          {/* 경고문구 넣는자리 */}
          {log.cautionWith && <ExclamationCircleOutlined />}
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
      <div className="basicBox" id="medicineBox">
        <center>
          {/* <h2 style={{ marginBottom: "0" }}>나의 처방전</h2> */}
          <div className="dateDiv">
            <CaretLeftOutlined
              onClick={() => {
                props.setToday(
                  new Date(today.setDate(props.today.getDate() - 1))
                );
              }}
            />
            {""}
            {dateString}
            <CaretRightOutlined
              onClick={() => {
                props.setToday(
                  new Date(today.setDate(props.today.getDate() + 1))
                );
              }}
            />
          </div>
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
      {props.MyLogInfo[0] && (
        <Modal
          title="먹는 약 정보"
          visible={isModalVisible}
          // onOk={handleOk}
          // onCancel={handleCancel}
          footer={null}
          // footer={[
          // <Button key="modify" onClick={modifySubmit}>
          //   수정완료
          // </Button>,
          // <Button key="back" onClick={handleModify}>
          //   수정하기
          // </Button>,
          // <Button key="confirm" type="primary" onClick={handleOk}>
          //   닫기
          // </Button>,
          // ]}
        >
          <center>
            {props.MyLogInfo[modalIndex] && (
              <div>
                <PillInfo
                  className="selected"
                  item_name={props.MyLogInfo[modalIndex].medicineId.ITEM_NAME}
                  drug_cd={props.MyLogInfo[modalIndex].medicineId.DRUG_CD}
                  storage_method={
                    props.MyLogInfo[modalIndex].medicineId.STORAGE_METHOD
                  }
                />
                <LogInfo
                  range={[
                    moment(props.MyLogInfo[modalIndex].START_DATE),
                    moment(props.MyLogInfo[modalIndex].END_DATE),
                  ]}
                  // setRange={setRange}
                  Changed={props.Changed}
                  setChanged={props.setChanged}
                  quantity={props.MyLogInfo[modalIndex].QUANTITY}
                  setQuantity={setQuantity}
                  isModalVisible={isModalVisible}
                  setisModalVisible={setisModalVisible}
                  logId={props.MyLogInfo[modalIndex]._id}
                  mixtureInfo={props.MyLogInfo[modalIndex].mixtureId}
                  // isModifyVisible={isModifyVisible}
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
