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
  let [AlertDiv, setAlertDiv] = useState("");

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
      medicineId: pills[Selected]._id,
      QUANTITY: document.getElementById("quantity").value,
      IMG_SRC:
        "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
        pills[Selected].INSERT_FILE.substr(-20, 13) +
        "01.jpg",
      START_DATE: StartDate,
      END_DATE: EndDate,
    };
    Axios.post("/api/medicines/log", logVariables).then((response) => {
      if (response.data.success) {
        alert("등록하였습니다");
        props.setChanged(!props.Changed);
        // 입력칸 초기화
        setSelected("");
        document.getElementById("quantity").value = "";
        props.setToday(new Date(StartDate));
        // props.setToday(Date(StartDate));
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
    // 입력칸 초기화
  };

  const handleRange = (value) => {
    // format 필수 - 지울 경우 분 표시 되어 달력에 2일씩 들어가게됨
    if (value) {
      setStartDate(value[0].format("YYYY-MM-DD"));
      setEndDate(value[1].format("YYYY-MM-DD"));
    }

    // 날짜, 이름 둘 다 설정되었을 때 실행되도록 위치 변경할 것
    const checkVariables = {
      START_DATE: StartDate,
      END_DATE: EndDate,
      ITEM_NAME: pills[Selected].ITEM_NAME,
    };

    Axios.post("/api/medicines/checkCaution", checkVariables).then(
      (response) => {
        if (response.data.success) {
          console.log("정보:", response.data.added);
          const added = response.data.added;
          var bannedItem = [];
          added.map((add, index) => {
            console.log(add.MIXTURE_ITEM_SEQ);
            bannedItem.push(add.MIXTURE_ITEM_SEQ);
          });
          const myLog = props.MyLogInfo;
          myLog.map((log, index) => {
            // 1. myInfo log와 기간이 겹치는지 확인
            if (!(log.START_DATE > EndDate) && !(log.END_DATE < StartDate)) {
              if (bannedItem.includes(log.ITEM_SEQ)) {
                setAlertDiv(
                  "주의: " + log.ITEM_NAME + "과 함께 먹으면 안되는 약입니다."
                );
              }
            }
          });
        } else {
          alert("failed");
        }
      }
    );
  };

  const { RangePicker } = DatePicker;
  const placeHolder = ["시작일", "종료일"];
  return (
    <div className="medicineItem">
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
        <center>
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
            복용량
            <br />
            <Input
              type="number"
              id="quantity"
              style={{ width: "262px" }}
              min="0"
              placeholder="하루에 먹는 개수 입력해주세요"
            ></Input>
          </form>
          <div id="banAlert" style={{ color: "red" }}>
            {AlertDiv}
          </div>
        </center>
      </Modal>
    </div>
  );
}

export default Pill;
