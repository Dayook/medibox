// import { response } from "express";
import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_actions";
import { Form, Input, Button } from "antd";
import "./Join.css";
function Join(props) {
  // function password_validate(password) {
  //   var re = {
  //     capital: /[A-Z]/,
  //     digit: /[0-9]/,
  //     except: /[aeiou]/,
  //     full: /^[@#][A-Za-z0-9]{7,13}$/,
  //   };
  //   return (
  //     re.capital.test(password) &&
  //     re.digit.test(password) &&
  //     !re.except.test(password) &&
  //     re.full.test(password)
  //   );
  // }

  const dispatch = useDispatch();
  // 안에서 데이터 변화를 시키기 위해서는 state
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [NickName, setNickName] = useState("");
  // const [Birth, setBrith] = useState("");
  let [passwordChecking, setpasswordChecking] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onNickNameHandler = (e) => {
    setNickName(e.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onPasswordCheckHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
  };

  // const onBirthHandler = (e) => {};

  useEffect(() => {
    if (Password !== "" && Password === PasswordCheck) {
      setpasswordChecking(true);
    } else {
      setpasswordChecking(false);
    }
  }, [PasswordCheck, Password]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // email, 비밀번호 검증
    if (
      Password === "" ||
      Email === "" ||
      NickName === "" ||
      !setpasswordChecking
    ) {
      alert("모든 값을 입력해주세요");
      return false;
    }

    let body = {
      email: Email,
      nickname: NickName,
      password: Password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
        alert("가입 완료");
      } else {
        alert("Failed to sign up");
      }
    });
  };
  return (
    <div>
      <div className="x">
        <Form
          className="form"
          style={{
            height: window.innerHeight * 0.9,
            margin: "0 auto",
          }}
          onSubmit={onSubmitHandler}
        >
          <label>아이디</label>
          <Input value={Email} onChange={onEmailHandler} />
          <label>별명</label>
          <Input type="text" value={NickName} onChange={onNickNameHandler} />
          <label>비밀번호</label>
          <Input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <span style={{ fontSize: "0.8em" }}>
            {Password.length < 8 && "8자 이상으로 입력해주세요"}
          </span>
          <label>비밀번호 확인</label>
          <Input
            type="password"
            value={PasswordCheck}
            onChange={onPasswordCheckHandler}
          />
          <span style={{ fontSize: "0.8em" }}>
            {PasswordCheck &&
              (passwordChecking
                ? "비밀번호가 일치합니다"
                : " 비밀번호가 일치하지 않습니다")}
          </span>{" "}
          {/* {passwordChecking
            ? "비밀번호가 일치합니다"
            : "비밀번호가 일치하지 않습니다"} */}
          {/* <label>Date of Birth</label>
          <input type="date" value={Birth} onChange={onBirthHandler} /> */}
          <br></br>
          <Button type="primary" onClick={onSubmitHandler}>
            가입
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Join;
