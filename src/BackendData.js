import React, { useState, useEffect } from "react";

const BackendData = ({ handleData1 }) => {
  const [data, setData] = useState("Test");

  useEffect(() => {
    fetch("http://localhost:3001", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside 2nd then");
        console.log(data);
        setData(data);
        handleData1(data);
      })
      .catch((err) => `${err} has occured`);
  }, [handleData1]);

  return (
    <>
      <h5>Data is</h5>
      <div>{data}</div>
    </>
  );
};

export default BackendData;
