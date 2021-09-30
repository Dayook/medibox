import React, { useEffect, useState } from "react";
import { PlusOutlined, Icon } from "@ant-design/icons";
import { Input, Modal, AutoComplete, Button, DatePicker } from "antd";
import Axios from "axios";
import PillInfo from "./PillInfo";
import { useSelector } from "react-redux";

function Pill(props) {
  const user = useSelector((state) => state.user);
  const [pillName, setpillName] = useState([]);
  const [pills, setpills] = useState([]);
  const [Selected, setSelected] = useState("");
  const [Options, setOptions] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [IsLoaded, setIsLoaded] = useState(false);
  const [Range, setRange] = useState([]);
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();

  useEffect(() => {
    Axios.get("/api/medicines/getMedicine").then((response) => {
      if (response.data.success) {
        setpills(response.data.medicines);
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const logVariables = {
      user: user.userData._id,
      ITEM_SEQ: pills[Selected].ITEM_SEQ,
      ITEM_NAME: pills[Selected].ITEM_NAME,
      IMG_SRC:
        "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
        pills[Selected].INSERT_FILE.substr(-20, 13) +
        "01.jpg",
      QUANTITY: document.getElementById("quantity").value,
      START_DATE: StartDate,
      END_DATE: EndDate,
    };
    alert(EndDate);
    Axios.post("/api/medicines/log", logVariables).then((response) => {
      if (response.data.success) {
        alert("등록하였습니다");
        props.setChanged(!props.Changed);
        setisModalVisible(false);
      } else {
        alert("failed");
      }
    });
  };
  const showModal = () => {
    if (!IsLoaded) {
      pills.map((pill, index) => {
        setpillName(pillName.push({ value: pill.ITEM_NAME, index: index }));
      });
      setOptions(pillName);
      setIsLoaded(true);
    }

    setisModalVisible(true);
    console.log(pillName);
  };
  const handleOk = () => {
    setisModalVisible(false);
  };
  const handleCancel = () => {
    console.log(Range);
    setisModalVisible(false);
  };

  const handleRange = (value) => {
    setStartDate(value[0].format("YYYY-MM-DD"));
    setEndDate(value[1].format("YYYY-MM-DD"));
  };

  const { RangePicker } = DatePicker;
  const placeHolder = ["시작일", "종료일"];
  return (
    <div className="medicineBox">
      <PlusOutlined style={{ fontSize: "3rem" }} onClick={showModal} />
      <Modal
        title="먹는 약 등록"
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
            style={{ width: "300px" }}
            placeholder="이름 검색"
            options={Options}
            onSelect={(value, option) => {
              setSelected(option.index);
            }}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          ></AutoComplete>
          <br></br>
          {pills[Selected] && (
            <PillInfo
              className="selected"
              item_name={pills[Selected].MATERIAL_NAME}
              insert_file={pills[Selected].INSERT_FILE}
              storage_method={pills[Selected].STORAGE_METHOD}
            />
          )}
          복용 기간
          <br />
          <RangePicker
            className="dateRange"
            placeholder={placeHolder}
            onChange={handleRange}
          />
          <br />
          하루동안 먹는 개수
          <br />
          <Input type="number" id="quantity" style={{ width: "262px" }}></Input>
        </form>
      </Modal>
    </div>
  );
}

export default Pill;
