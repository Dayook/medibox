import React, { useEffect, useState } from "react";
import { PlusOutlined, Icon } from "@ant-design/icons";
import { Modal, AutoComplete, Button, DatePicker, InputNumber } from "antd";
import Axios from "axios";
import PillInfo from "./Info/PillInfo";
import { useSelector } from "react-redux";
import moment from "moment";
import AlertInfo from "./Info/AlertInfo";

function Pill(props) {
  const user = useSelector((state) => state.user);
  const [pillName, setpillName] = useState([]);
  const [pills, setpills] = useState([]);
  const [Selected, setSelected] = useState("");
  const [Options, setOptions] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [IsLoaded, setIsLoaded] = useState(false);
  // const [Range, setRange] = useState([]);
  const [StartDate, setStartDate] = useState([]);
  const [EndDate, setEndDate] = useState();
  const [SearchValue, setSearchValue] = useState("");
  const [quantity, setQuantity] = useState();
  const [cautionWith, setCautionWith] = useState();
  const [mixtureId, setMixtureId] = useState();
  let [AlertDiv, setAlertDiv] = useState();

  useEffect(() => {
    console.log("render");
    Axios.get("/api/medicines/getMedicine").then((response) => {
      if (response.data.success) {
        setpills(response.data.medicines);
      }
    });
    if (Selected && StartDate && EndDate) {
      // 날짜, 이름 둘 다 설정되었을 때 실행되도록 위치 변경할 것
      const checkVariables = {
        START_DATE: StartDate,
        END_DATE: EndDate,
        ITEM_NAME: pills[Selected].ITEM_NAME,
        ITEM_SEQ: pills[Selected].ITEM_SEQ,
      };

      Axios.post("/api/medicines/checkCaution", checkVariables).then(
        (response) => {
          if (response.data.success) {
            console.log("정보:", response.data.added);
            // 추가된 약의 병용금기약 데이터를 불러온다
            const added = response.data.added;
            var bannedItem = [];
            added.map((add, index) => {
              console.log(add.MIXTURE_ITEM_SEQ);
              bannedItem.push(add.MIXTURE_ITEM_SEQ);
            });
            const myLog = props.MyLogInfo;
            myLog.some((log, index) => {
              console.log(bannedItem);
              const bannedIndex = bannedItem.indexOf(log.medicineId.ITEM_SEQ);
              // 1. myInfo log와 기간이 겹치는지 확인
              if (
                bannedIndex !== -1 &&
                log.START_DATE <= EndDate &&
                log.END_DATE >= StartDate
              ) {
                // if (bannedItem.includes(log.medicineId.ITEM_SEQ)) {
                setAlertDiv(log.medicineId.ITEM_NAME);
                console.log(added[bannedIndex]._id);
                setCautionWith(log._id);
                setMixtureId(added[bannedIndex]._id);
                return true;
              } else {
                setAlertDiv("");
                setCautionWith();
                setMixtureId();
                return false;
              }
            });
          } else {
            alert("failed");
          }
        }
      );
    }
  }, [Selected, StartDate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity || !Selected || !StartDate || !EndDate) {
      alert("모든 값을 입력해주세요.");
      return false;
    }
    const logVariables = {
      user: user.userData._id,
      medicineId: pills[Selected]._id,
      QUANTITY: quantity,
      IMG_SRC:
        "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
        pills[Selected].DRUG_CD +
        ".jpg",
      START_DATE: StartDate,
      END_DATE: EndDate,
      cautionWith: cautionWith,
      mixtureId: mixtureId,
    };

    const myLog = props.MyLogInfo;
    if (
      !myLog.some((log, index) => {
        // 1. myInfo log와 기간이 겹치는지 확인
        if (
          log.medicineId._id === logVariables.medicineId &&
          log.START_DATE <= EndDate &&
          log.END_DATE >= StartDate
        ) {
          alert("해당 날짜에 이미 등록돼있는 약입니다.");
          return true;
        }
      })
    ) {
      Axios.post("/api/medicines/log", logVariables).then((response) => {
        if (response.data.success) {
          alert("등록하였습니다");
          props.setChanged(!props.Changed);
          props.setToday(new Date(StartDate));
          // 입력칸 초기화
          setSelected("");
          setSearchValue("");
          setQuantity("");
          setAlertDiv("");
          // setStartDate(null);
          // setEndDate(null);
          // 모달창 끄기
          setisModalVisible(false);
        } else {
          alert("failed");
        }
      });
    }

    // functino 종료
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
    console.log(pills);
  };
  const handleOk = () => {
    setisModalVisible(false);
  };
  const handleCancel = () => {
    // 입력창 초기화;
    setSelected("");
    setSearchValue("");
    setQuantity("");
    setAlertDiv("");
    setisModalVisible(false);
  };

  const handleRange = (value) => {
    // format 필수 - 지울 경우 분 표시 되어 달력에 2일씩 들어가게됨
    if (value) {
      setStartDate(value[0].format("YYYY-MM-DD"));
      setEndDate(value[1].format("YYYY-MM-DD"));
    }
  };

  const { RangePicker } = DatePicker;
  const placeHolder = ["시작일", "종료일"];
  return (
    <div className="medicineItem" style={{ display: "flex" }}>
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
              className="inputTitle"
              placeholder="이름 검색"
              options={Options}
              onSelect={(value, option) => {
                setSearchValue(option.ITEM_NAME);
                setSelected(option.index);
              }}
              allowClear="true"
              value={SearchValue}
              onChange={(value) => {
                setSearchValue(value);
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
                drug_cd={pills[Selected].DRUG_CD}
                storage_method={pills[Selected].STORAGE_METHOD}
              />
            )}
            <div className="forAlign">
              <div className="infoName">복용기간</div>
              <br />
              <RangePicker
                style={{ fontSize: "large" }}
                className="dateRangeInfo"
                placeholder={placeHolder}
                onChange={handleRange}
                // value={[moment(StartDate), moment(EndDate)]}
              />
              <br />
              <div className="infoName">복용량</div>
              <br />
              <InputNumber
                type="number"
                id="quantity"
                className="quantityInfo"
                value={quantity}
                min="1"
                onChange={(number) => {
                  setQuantity(number);
                }}
                onStep={(number) => {
                  setQuantity(number);
                }}
                placeholder="하루에 먹는 개수를 입력해주세요"
              ></InputNumber>
            </div>
          </form>
          <div id="banAlert">{AlertDiv && <AlertInfo alert={AlertDiv} />}</div>
        </center>
      </Modal>
    </div>
  );
}

export default Pill;
