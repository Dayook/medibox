import React, { useState } from "react";
import moment from "moment";
import { Button, InputNumber, Modal, DatePicker } from "antd";
const { RangePicker } = DatePicker;
function LogInfo(props) {
  const [isModifyVisible, setisModifyVisible] = useState(false);
  const handleOk = () => {
    props.setisModalVisible(false);
    setisModifyVisible(false);
  };
  const handleModify = () => {
    setisModifyVisible(true);
    alert("NO");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isModifyVisible) {
    return (
      <div>
        {moment(props.range[0]).format("YYYY-MM-DD")} ~{" "}
        {moment(props.range[1]).format("YYYY-MM-DD")}
        <br />
        복용량(하루에 먹는 개수) {props.quantity}
        <br />
        <Button key="back" onClick={handleModify}>
          수정하기
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
        <RangePicker value={props.range} />
        <br />
        복용량(하루에 먹는 개수)
        <InputNumber value={props.quantity} />
        <Button key="modify" onClick={handleSubmit}>
          수정완료
        </Button>
        <Button key="confirm" type="primary" onClick={handleOk}>
          닫기
        </Button>
        ,
      </div>
    );
  }
}

export default LogInfo;
