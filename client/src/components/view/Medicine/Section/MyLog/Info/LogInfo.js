import React, { useState } from "react";
import moment from "moment";
import { Button, InputNumber, DatePicker, Divider } from "antd";
import Axios from "axios";
import AlertInfo from "./AlertInfo";
const { RangePicker } = DatePicker;
function LogInfo(props) {
  const [isModifyVisible, setisModifyVisible] = useState(false);
  const [quantity, setQuantity] = useState(props.quantity);
  const [range, setRange] = useState(props.range);
  const handleRange = (value) => {
    setRange(value);
  };
  const handleModify = () => {
    setisModifyVisible(true);
  };

  const handleDelete = () => {
    const pillVariable = {
      id: props.logId,
    };
    if (
      window.confirm(
        "해당 약의 복용 정보가 모두 삭제됩니다.\n정말 삭제하시겠습니까?"
      )
    ) {
      Axios.post("/api/medicines/deleteLog", pillVariable).then((response) => {
        if (response.data.success) {
          props.setisModalVisible(false);
          props.setChanged(!props.Changed);
        } else {
          alert("실패");
        }
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const variable = {
      _id: props.logId,
      START_DATE: range[0],
      END_DATE: range[1],
      QUANTITY: quantity,
    };

    Axios.post("/api/medicines/logUpdate", variable).then((response) => {
      if (response.data.success) {
        alert("수정하였습니다");
        props.setChanged(!props.Changed);
        setisModifyVisible(false);
        props.setisModalVisible(false);
      } else {
        alert("실패");
      }
    });
    console.log(variable);
  };
  const handleOk = () => {
    props.setisModalVisible(false);
    setisModifyVisible(false);
  };

  if (!isModifyVisible) {
    return (
      <div>
        {moment(props.range[0]).format("YYYY-MM-DD")} ~{" "}
        {moment(props.range[1]).format("YYYY-MM-DD")}
        <br />
        복용량(하루에 먹는 개수) {props.quantity}
        <br />
        {props.mixtureInfo && (
          <div>
            <AlertInfo mixtureInfo={props.mixtureInfo} />
          </div>
        )}
        <Divider />
        <Button key="back" onClick={handleModify}>
          수정하기
        </Button>
        <Button key="delete" onClick={handleDelete}>
          삭제하기
        </Button>
        <Button key="confirm" type="primary" onClick={handleOk}>
          닫기
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        복용 기간
        <RangePicker value={range} onChange={handleRange} />
        <br />
        복용량(하루에 먹는 개수)
        <InputNumber
          value={quantity}
          onChange={(number) => {
            setQuantity(number);
          }}
          onStep={(number) => {
            setQuantity(number);
          }}
          min="1"
        />
        <Divider />
        <Button key="modify" onClick={handleSubmit}>
          수정완료
        </Button>
        <Button key="confirm" type="primary" onClick={handleOk}>
          닫기
        </Button>
      </div>
    );
  }
}

export default LogInfo;
