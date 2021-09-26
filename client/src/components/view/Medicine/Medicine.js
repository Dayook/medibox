import React, { useEffect, useState } from "react";
import a from "./medicineData";
function Medicine() {
  const medicineList = a.response.body.items;
  const [medicines, setmedicines] = useState([]);
  useEffect(() => {
    setmedicines({
      name: medicineList.item[0].CLASS_NAME,
      blach: medicineList.item[0].CLASS_CODE,
    });
  }, [medicines]);
  return <div style={{ padding: "500px" }}>{medicines.blach}</div>;
}

export default Medicine;
