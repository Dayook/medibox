import axios from "axios";
import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function (SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입이 가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인하면 출입 불가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
