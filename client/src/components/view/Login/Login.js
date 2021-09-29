import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";
import { Form, Input, Button, Checkbox } from "antd";

function Login(props) {
  const dispatch = useDispatch();
  // 안에서 데이터 변화를 시키기 위해서는 state
  const [Email, setEmail] = useState("");
  const [Password, setPassowrd] = useState("");
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
  const [RememberMe, setRememberMe] = useState(rememberMeChecked);
  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  useEffect(() => {
    setEmail(initialEmail);
  }, []);
  const handleRememberMe = () => {
    setRememberMe(!RememberMe);
  };
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
        window.localStorage.setItem("userId", response.payload.userId);
        if (RememberMe === true) {
          window.localStorage.setItem("rememberMe", body.email);
        }
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
        <Checkbox
          id="rememberMe"
          onChange={handleRememberMe}
          checked={RememberMe}
        >
          {" "}
          아이디 기억하기{" "}
        </Checkbox>
        <br></br>
        <Button type="primary" onClick={onSubmitHandler}>
          로그인
        </Button>
      </form>
    </div>
  );
}

export default Login;
