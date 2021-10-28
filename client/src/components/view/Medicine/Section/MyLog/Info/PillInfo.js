import React from "react";
import AlertInfo from "./AlertInfo";

function PillInfo(props) {
  var img_src = "";
  var materialName;
  if (props.drug_cd) {
    img_src =
      "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
      props.drug_cd +
      ".jpg";
  }
  if (props.material_name) {
    materialName = (
      <div>
        재료명:
        {props.material_name}
      </div>
    );
  }
  if (props.ITEM_NAME === "") {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <span style={{ fontWeight: 500 }}>{materialName}</span>
        <span style={{ fontSize: "larger" }}>{props.item_name}</span>
        <img
          src={img_src}
          style={{
            width: "-webkit-fill-available",
            marginBottom: "10px",
          }}
          alt="medicine"
        />
        {props.mixtureId && <AlertInfo mixtureInfo={props.mixtureId} />}
      </div>
    );
  }
}

export default PillInfo;
