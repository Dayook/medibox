import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="setting:1">칼럼</Menu.Item> */}
      <Menu.Item key="my-medicine">
        <a href="/my-medicine">나의 처방전</a>
      </Menu.Item>
      {/* <Menu.Item key="setting:2">
        <a href="/counsel">상담</a>
      </Menu.Item> */}
      {/* <SubMenu key="sub" title={<span>Articles</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
    </Menu>
  );
}

export default LeftMenu;
