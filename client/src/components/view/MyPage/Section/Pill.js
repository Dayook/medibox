import React, { useEffect, useState } from "react";
import { PlusOutlined, Icon } from "@ant-design/icons";
import { Input, Modal, AutoComplete, TimePicker, Button } from "antd";
import Axios from "axios";
import PillInfo from "./PillInfo";
import { useSelector } from "react-redux";

function Pill(props) {
  const user = useSelector((state) => state.user);
  const variable = {
    user: localStorage.getItem("userId"),
  };
  const [pillName, setpillName] = useState([]);
  const [pills, setpills] = useState([]);
  const [Selected, setSelected] = useState("");
  const [Options, setOptions] = useState([]);
  const [MyLog, setMyLog] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  useEffect(() => {
    Axios.get("/api/medicines/getMedicine").then((response) => {
      if (response.data.success) {
        setpills(response.data.medicines);
      }
    });
    Axios.post("/api/medicines/myLog", variable).then((response) => {
      if (response.data.success) {
        alert("success");
        console.log(response.data);
        console.log(response.data.myLog);
        setMyLog(response.data.myLog);
      } else {
        alert("fail");
      }
    });
    // pills.map((pill, index) => {
    //   setpillName(pillName.concat(pill.ITEM_NAME));
    // });
    // console.log("pillName: ", pillName);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const logVariables = {
      user: user.userData._id,
      ITEM_SEQ: pills[Selected].ITEM_SEQ,
      QUANTITY: document.getElementById("quantity").value,
      START_DATE: document.getElementById("start_date").value,
      END_DATE: document.getElementById("end_date").value,
    };

    Axios.post("/api/medicines/log", logVariables).then((response) => {
      if (response.data.success) {
        alert("등록하였습니다");
        setisModalVisible(false);
      } else {
        alert("failed");
      }
    });
  };
  const showModal = () => {
    pills.map((pill, index) => {
      setpillName(pillName.push({ value: pill.ITEM_NAME, index: index }));
    });
    setOptions(pillName);
    setisModalVisible(true);
    console.log(pillName);
  };

  const handleOk = () => {
    setisModalVisible(false);
  };
  const handleCancel = () => {
    setisModalVisible(false);
  };
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        display: "flex",
        border: "1px solid #dedede",
        borderRadius: "10px",
        color: "#454545",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PlusOutlined style={{ fontSize: "3rem" }} onClick={showModal} />
      <Modal
        title="hi"
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            등록
          </Button>,
        ]}
      >
        <form onSubmit={handleSubmit}>
          <AutoComplete
            style={{ width: "200px" }}
            placeholder="try"
            options={Options}
            onSelect={(value, option) => {
              setSelected(option.index);
            }}
            // onChange={selectedHandler}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          ></AutoComplete>
          {pills[Selected] && (
            <PillInfo
              className="selected"
              item_name={pills[Selected].ITEM_NAME}
              insert_file={pills[Selected].INSERT_FILE}
              storage_method={pills[Selected].STORAGE_METHOD}
            />
          )}
          startdate
          <Input type="date" id="start_date"></Input>
          enddate
          <Input type="date" id="end_date"></Input>
          수량 <Input type="number" id="quantity"></Input>
        </form>
      </Modal>
    </div>
  );
}

export default Pill;
