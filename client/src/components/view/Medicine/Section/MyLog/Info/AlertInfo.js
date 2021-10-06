import React from "react";
import { Icon, ExclamationCircleOutlined } from "@ant-design/icons";
import Axios from "axios";

function AlertInfo(props) {
  const cautionLog = props.cautionLog;
  const variables = {
    medicineId: cautionLog._id,
    cautionWith: cautionLog.cautionWith,
  };

  Axios.post("/api/medicines/getCaution",variables).then((response) => {
    if (response.data.success) {
      alert("성공");
    } else {
      alert("실패");
    }
  });

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
