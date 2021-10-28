import React, { useEffect, useState } from "react";
import noticeBtn from "../../images/notice2.png";
import "./Notice.css";

function Notice() {
  const [Visibility, setVisibility] = useState(false);
  useEffect(() => {
    if (Visibility === false) {
      document.getElementById("noticeModal").style.display = "none";
    } else {
      document.getElementById("noticeModal").style.display = "";
    }
  }, [Visibility]);
  const onClicked = () => {
    setVisibility(!Visibility);
  };
  return (
    <>
      <div className="notice" onClick={onClicked}>
        <img className="btn" src={noticeBtn} alt="notice"></img>
      </div>

      <div id="noticeModal">
        <div className="upper">
          <span className="title">Notice</span>
          <span className="close" onClick={onClicked}>
            x
          </span>
        </div>
        <div>
          - 회원가입을 원치 않으시는 경우
          <br />
          &nbsp;&nbsp;<span className="blue">email : test@test.com</span>
          <br />
          &nbsp;&nbsp;<span className="blue">password: 12345678</span>
          <br />
          &nbsp;&nbsp;로 테스트 가능합니다.
        </div>
        <div>
          {/* - 모든 의약품과 병용금기 약물 데이터가 입력되진 않은 상태입니다. */}
          <br /> - 병용금기 주의 기능 테스트 가능한 약품 : - ( , ) - ( )
        </div>
        <div className="links"></div>
      </div>
    </>
  );
}

export default Notice;
