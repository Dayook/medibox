import React from "react";
import { Icon, ExclamationCircleOutlined } from "@ant-design/icons";
import Axios from "axios";

function AlertInfo(props) {
  const mixtureInfo = props.mixtureInfo;
  console.log(mixtureInfo);
  // console.log(cautionLog);
  return (
    <div style={{ color: "#E94545", fontSize: "x-large", float: "right" }}>
      <ExclamationCircleOutlined />
      <span style={{ fontSize: "small" }}>
        {mixtureInfo.TYPE_NAME}주의
        {mixtureInfo.ITEM_NAME}과 {mixtureInfo.MIXTURE_ITEM_NAME}을 함께 복용 시
        {mixtureInfo.PROHBT_CONTENT}이 있을 수 있습니다.
      </span>
    </div>
  );
}

export default AlertInfo;
