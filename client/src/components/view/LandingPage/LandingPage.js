import React, { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  useEffect(() => {
    alert("use");
    axios.get("/api/user/logout").then((response) => {
      

    });
    return () => {};
  }, []);

  const onClickHandler = () =>{
    axios.get("/api/users/logout").then(response=> {
      console.log(response.data)
    })
  }
  return (
    <div>
      <h2><button onClick={onClickHandler}>logout</button></h2>
    </div>
  );
}
