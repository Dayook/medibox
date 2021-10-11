import React from "react";

function Description(props) {
  if (props.purpose === "personal") {
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
  } else if (props.purpose === "family") {
    return <div>가족용</div>;
  } else if (props.purpose === "institute") {
    return <div>기업용</div>;
  }
  return <div></div>;
}

export default Description;
