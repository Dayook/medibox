import React from "react";

function Description(props) {
  const subscription = props.subscription;
  if (props.purpose === 0) {
    return (
      <div>
        하이
        <p />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  } else if (props.purpose === 1) {
    return (
      <div>
        가족용
        {props.purpose === subscription && "현재 사용하고있는 정보입니다"}
      </div>
    );
  } else if (props.purpose === 2) {
    return <div>기업용</div>;
  }
  return <div></div>;
}

export default Description;
