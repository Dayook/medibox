import React from "react";
import { Icon, ExclamationCircleOutlined } from "@ant-design/icons";

function AlertInfo(props) {
  const cautionLog = props.cautionLog;
  console.log(cautionLog);
  return (
    <div style={{ color: "#E94545", fontSize: "x-large", float: "right" }}>
      <ExclamationCircleOutlined /> {cautionLog.cautionWith}
      <br></br>
      {cautionLog._id}
    </div>
  );
}

export default AlertInfo;
