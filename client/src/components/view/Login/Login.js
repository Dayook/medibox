import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";
import { Form, Input, Button } from "antd";

function Login(props) {
  const dispatch = useDispatch();
  // 안에서 데이터 변화를 시키기 위해서는 state
  const [Email, setEmail] = useState("");
  const [Password, setPassowrd] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassowrd(event.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("일치하는 회원 정보가 존재하지 않습니다˝");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          height: window.innerHeight * 0.9,
          justifyContent: "center",
          width: "20em",
        }}
        onSubmit={onSubmitHandler}
      >
        <label>이메일</label>
        <Input type="email" value={Email} onChange={onEmailHandler} />
        <label>비밀번호</label>
        <Input type="password" value={Password} onChange={onPasswordHandler} />
        <br></br>
        <Button type="primary" onClick={onSubmitHandler}>
          로그인
        </Button>
      </form>
    </div>
  );
}

export default Login;
