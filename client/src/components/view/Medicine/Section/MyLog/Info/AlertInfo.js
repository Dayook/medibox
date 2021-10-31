import React from "react";
import { Icon, ExclamationCircleOutlined } from "@ant-design/icons";
import Axios from "axios";

function AlertInfo(props) {
  const mixtureInfo = props.mixtureInfo;
  console.log(mixtureInfo);
  // console.log(cautionLog);
  if (props.alert) {
    return (
      <>
        <div className="exclamation">
          <ExclamationCircleOutlined />
        </div>
        <div style={{ fontSize: "small", lineHeight: "2em" }}>
          {props.alert}과 함께 복용 시 <br />
          부작용이 있을 수 있습니다.
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ color: "#E94545", fontSize: "x-large" }}>
          <ExclamationCircleOutlined />
        </div>
        <div style={{ fontSize: "small", lineHeight: "2em" }}>
          {/* {mixtureInfo.TYPE_NAME}주의 */}
          {mixtureInfo.ITEM_NAME}과 {mixtureInfo.MIXTURE_ITEM_NAME}을<br />
          함께 복용 시 {mixtureInfo.PROHBT_CONTENT}이 있을 수 있습니다.
        </div>
      </>
    );
  }
}

export default AlertInfo;
