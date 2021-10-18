import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Icon from "@ant-design/icons";
import RightMenu from "./Sections/RightMenu";
import LeftMenu from "./Sections/LeftMenu";
import logo from "../../../medikit.svg";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="nav__container">
        <div className="menu__logo">
          <a href="/">
            <img src={logo} alt="logo" style={{ width: "110px" }}></img>
          </a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            {" "}
            sfs f
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu />
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
