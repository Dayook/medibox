import React, { useState } from "react";
import { Button,  Drawer } from "antd";

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
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        <div className="menu__left">
          <a href="/">left</a>
        </div>
        <div className="right">
          <a href="/">right</a>
        </div>
        <Button
          className="menu__mobile-botton"
          type="primary"
          onClick={showDrawer}
        >
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {/* <LeftMenu mode="inline" />
          <RightMenu mode="inline" /> */}
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
