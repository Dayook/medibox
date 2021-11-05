import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";
import { kakaoLoginUser } from "../../../_actions/user_actions";
import { Form, Input, Button, Checkbox } from "antd";
import { registerUser } from "../../../_actions/user_actions";
import axios from "axios";
const { Kakao } = window;
// 브라우저의 window 객체에서 Kakao API 가져올 수 있음

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

  const kakaoLoginHandler = () => {
    console.log("login");
    Kakao.Auth.login({
      // 요구정보 설정
      scope: "account_email, profile_nickname",
      success: function (response) {
        console.log(response);
        Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            const body = {
              email: kakao_account.email,
              nickname: kakao_account.profile.nickname,
            };

            dispatch(kakaoLoginUser(body)).then((response) => {
              if (response.payload.loginSuccess) {
                props.history.push("/");
                window.localStorage.setItem("userId", response.payload.userId);
              }
            });

            // email이 아이디로 이미 존재하는 경우  =>로그인
            // if(kakao_account.email)
            // let body = {
            //   email: kakao_account.email,
            //   nickname: kakao_account.profile.nickname,
            //   // password: Password,
            // };

            // dispatch(registerUser(body)).then((response) => {
            //   if (response.payload.success) {
            //     props.history.push("/login");
            //     alert("가입 완료");
            //   } else {
            //     alert("Failed to sign up");
            //   }
            // });

            // email이 기존에 등록되지 않은 경우(회원가입 진행)
            console.log(kakao_account.email);
            console.log(kakao_account.profile.nickname);
          },
        });
      },
    });
    // Kakao.Auth.authorize({
    //   redirectUri: "http://localhost:3000/oauth",
    //   scope: "account_email, profile_nickname",
    // });
  };
  // Kakao.Auth.setAccessToken(ACCESS_TOKEN);
  const kakaoLogoutHandler = () => {
    console.log("logout");
    if (!Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());
      Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        },
      });
    });
  };
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
        alert("일치하는 회원 정보가 존재하지 않습니다");
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
        <div
          className="noticeDiv"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          * 테스트용 계정
          <br />
          <span style={{ color: "#1890ff" }}>
            아이디 : test
            <br />
            비밀번호 : test
          </span>
        </div>
        <label>아이디</label>
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
        <Button onClick={kakaoLoginHandler}>캐캐오</Button>
        <Button onClick={kakaoLogoutHandler}>로그아웃</Button>
      </form>
    </div>
  );
}

export default Login;
