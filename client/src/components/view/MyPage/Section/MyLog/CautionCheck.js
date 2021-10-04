import axios from "axios";
import React from "react";

function CautionCheck(props) {
  // axios.post("/api/medicines/checkCaution", props.checkVariables).then(
  //   (response) => {
  //     if (response.data.success) {
  //       console.log("정보:", response.data.added);
  //       // 추가된 약의 병용금기약 데이터를 불러온다
  //       const added = response.data.added;
  //       var bannedItem = [];
  //       added.map((add, index) => {
  //         console.log(add.MIXTURE_ITEM_SEQ);
  //         bannedItem.push(add.MIXTURE_ITEM_SEQ);
  //       });
  //       const myLog = props.MyLogInfo;
  //       myLog.some((log, index) => {
  //         console.log(bannedItem);
  //         // 1. myInfo log와 기간이 겹치는지 확인
  //         if (
  //           log.START_DATE <= EndDate &&
  //           !(log.END_DATE < StartDate) &&
  //           bannedItem.includes(log.medicineId.ITEM_SEQ)
  //         ) {
  //           setCautionWith(log.medicineId);
  //           return true;
  //         } else {
  //           setCautionWith();
  //           return false;
  //         }
  //       });
  //     } else {
  //       alert("failed");
  //     }
  //   }
  // );
  return <div></div>;
}

export default CautionCheck;
