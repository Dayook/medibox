import React, { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  useEffect(() => {
    alert("use");
    axios.get("/api/hello").then((response) => {
      alert("hh");
      console.log(response);
    });
    return () => {};
  }, []);

  return (
    <div>
      <h2>LandingPage 랜딩페이지</h2>
    </div>
  );
}
