import React, { useEffect, useState } from "react";
import { PlusOutlined, Icon } from "@ant-design/icons";
import { Input, Modal, AutoComplete } from "antd";
import Axios from "axios";

function Pill() {
  const [pillName, setpillName] = useState([]);
  const [pills, setpills] = useState([]);
  useEffect(() => {
    Axios.get("/api/medicines/getMedicine").then((response) => {
      if (response.data.success) {
        setpills(response.data.medicines);
      }
    });
    // pills.map((pill, index) => {
    //   setpillName(pillName.concat(pill.ITEM_NAME));
    // });
    // console.log("pillName: ", pillName);
  });

  const [Options, setOptions] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const selectedHandler = (value) => {
    alert(value);
  };
  const showModal = () => {
    pills.map((pill, index) => {
      setpillName(pillName.push({ value: pill.ITEM_NAME }));
    });
    setOptions(pillName);
    setisModalVisible(true);
  };

  const handleOk = () => {
    setisModalVisible(false);
  };
  const handleCancel = () => {
    setisModalVisible(false);
  };
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        display: "flex",
        border: "1px solid #dedede",
        borderRadius: "10px",
        color: "#454545",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PlusOutlined style={{ fontSize: "3rem" }} onClick={showModal} />
      <Modal
        title="hi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <AutoComplete
            style={{ width: "200px" }}
            placeholder="try"
            options={Options}
            onSelect={(value) => {
              alert(value);
            }}
            // onChange={selectedHandler}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          ></AutoComplete>
          <Input type="text"></Input>
        </p>
      </Modal>
    </div>
  );
}

export default Pill;