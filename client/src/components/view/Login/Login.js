import { React, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";

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
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error˝");
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
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label> Password </label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
