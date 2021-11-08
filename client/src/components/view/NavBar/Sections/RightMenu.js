/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Button } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
const { Kakao } = window;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    if (Kakao.Auth.getAccessToken()) {
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
    }

    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        alert("로그아웃하였습니다");
        window.location.replace("/");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="/login">로그인</a>
        </Menu.Item>
        <Menu.Item key="app">
          {/* <div style={{ border: "1px solid black", borderRadius: "8px" }}> */}
          <a href="/register">회원가입</a>
          {/* </div> */}
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu style={{ float: "right" }} mode={props.mode}>
        <SubMenu key="sub" title={<span>마이 페이지</span>}>
          <Menu.Item key="myPage">
            <a href="/myPage">프로필/요금</a>
          </Menu.Item>
          <Menu.Item key="logout">
            <a onClick={logoutHandler}>로그아웃</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
