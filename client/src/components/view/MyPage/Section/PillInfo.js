import React from "react";

function PillInfo(props) {
  const img_src =
    "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
    props.insert_file.substr(-20, 13) +
    "01.jpg";
  if (props.ITEM_NAME === "") {
    return <div>ㅎㅎ</div>;
  } else {
    return (
      <div>
        {" "}
        {props.item_name} <br></br>
        {props.insert_file}
        <img
          src={img_src}
          style={{ width: "-webkit-fill-available" }}
          alt="medicine_image"
        />
        {props.storage_method}
      </div>
    );
  }
}

export default PillInfo;
