import React from "react";

function PillInfo(props) {
  var img_src = "";
  if (props.insert_file) {
    img_src =
      "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
      props.insert_file.substr(-20, 13) +
      "01.jpg";
  }
  if (props.ITEM_NAME === "") {
    return <div>ㅎㅎ</div>;
  } else {
    return (
      <div>
        {" "}
        {props.item_name} <br></br>
        <img
          src={img_src}
          style={{ width: "-webkit-fill-available" }}
          alt="medicine"
        />
        보관방법: {props.storage_method}
      </div>
    );
  }
}

export default PillInfo;
