import React from "react";

function PillInfo(props) {
  if (props.ITEM_NAME === "") {
    return <div>ㅎㅎ</div>;
  } else {
    return (
      <div>
        {" "}
        {props.item_name} <br></br>
        {props.insert_file}
        {props.storage_method}
      </div>
    );
  }
}

export default PillInfo;
