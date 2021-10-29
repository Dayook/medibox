import React, { useEffect, useState } from "react";
import noticeBtn from "../../images/notice2.png";
import "./Notice.css";

function Notice() {
  const [Visibility, setVisibility] = useState(false);
  const [NoticeVisibility, setNoticeVisibility] = useState(false);
  const [NoticeVisibility2, setNoticeVisibility2] = useState(false);
  useEffect(() => {
    if (Visibility === false) {
      document.getElementById("noticeModal").style.display = "none";
    } else {
      document.getElementById("noticeModal").style.display = "";
    }
    if (NoticeVisibility === false) {
      document.getElementById("hiddenText").style.display = "none";
    } else {
      document.getElementById("hiddenText").style.display = "";
    }

    // if (NoticeVisibility2 === false) {
    //   document.getElementById("hiddenText2").style.display = "none";
    // } else {
    //   document.getElementById("hiddenText2").style.display = "";
    // }
  }, [Visibility, NoticeVisibility, NoticeVisibility2]);
  const onClicked = () => {
    setVisibility(!Visibility);
  };
  const onNoticeClicked = () => {
    setNoticeVisibility(!NoticeVisibility);
  };
  const onNoticeClicked2 = () => {
    setNoticeVisibility2(!NoticeVisibility2);
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
          <span className="noticeTitle" onClick={onNoticeClicked}>
            + 회원가입을 원치 않으시는 경우
          </span>
          <br />
          <div id="hiddenText">
            &nbsp;&nbsp;<span className="blue">ID : test</span>
            <br />
            &nbsp;&nbsp;<span className="blue">password: test</span>
            <br />
            &nbsp;&nbsp;로 테스트 가능합니다.
          </div>
        </div>
        <div>
          {/* - 모든 의약품과 병용금기 약물 데이터가 입력되진 않은 상태입니다. */}
          <br />
          {/* <span className="noticeTitle" onClick={onNoticeClicked2}>
            + 병용금기 주의 기능 테스트 가능한 약품
          </span>
          <br /> <div id="hiddenText2">- ( , ) - ( )</div> */}
        </div>
        <div className="links"></div>
      </div>
    </>
  );
}

export default Notice;
