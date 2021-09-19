import { React, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";

function Join(props) {
  const dispatch = useDispatch();
  // 안에서 데이터 변화를 시키기 위해서는 state
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Name, setName] = useState("");
  const [Birth, setBrith] = useState("");
  let [passwordChecking, setpasswordChecking] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
    console.log("password:", Password);
  };
  const onPasswordCheckHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
    console.log("Chcek:", PasswordCheck);
  };

  useEffect(() => {
    if (Password !== "" && Password === PasswordCheck) {
      setpasswordChecking(true);
    } else {
      setpasswordChecking(false);
    }
  }, [PasswordCheck, Password]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert(Email);
    alert(Password);

    let body = {
      email: Email,
      password: Password,
    };
  };
  return (
    <div>
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
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <label> Password Check </label>
          <input
            type="password"
            value={PasswordCheck}
            onChange={onPasswordCheckHandler}
          />
          {passwordChecking
            ? "비밀번호가 일치합니다"
            : "비밀번호가 일치하지 않습니다"}
          <span></span>
          <button>Login</button>
        </form>
      </div>
      );
    </div>
  );
}

export default Join;
