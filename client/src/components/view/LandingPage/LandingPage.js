import React, { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  useEffect(() => {
    axios.get("/api/user/logout").then((response) => {});
    return () => {};
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {});
  };
  return (
    <div>
      <h2>
        <button onClick={onClickHandler}>logout</button>
      </h2>
    </div>
  );
}
