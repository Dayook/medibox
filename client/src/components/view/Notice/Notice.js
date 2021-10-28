import React from "react";
import "./Notice.css";

function Notice() {
  return (
    <>
      <div className="notice">dddddddd</div>

      <div className="noticeModal">
        <span className="title">Notice</span>
        <div>
          - 회원가입을 원치 않으시는 경우
          <br /> email : test@test.com
          <br /> password: 12345678 로
          <br />
          테스트 가능합니다.
        </div>
        <div>
          - 모든 의약품과 병용금기 약물 데이터가 입력되진 않은 상태입니다.
          <br /> - 병용금기 주의 기능 테스트 가능한 약품 : - ( , ) - ( )
        </div>
      </div>
    </>
  );
}

export default Notice;
