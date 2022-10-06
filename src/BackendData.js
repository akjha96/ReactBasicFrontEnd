import React, { useState, useEffect } from "react";

const BackendData = ({ handleData1 }) => {
  const [data, setData] = useState("Test");

  useEffect(() => {
    const fetchDataFromserver = async () => {
      try {
        const backendResponse = await fetch("http://localhost:3001", {
          method: "GET",
        });
        const dataReceived = await backendResponse.json();
        setData(dataReceived);
        handleData1(dataReceived);
      } catch (err) {
        return `${err} has occured`;
      }
    };
    fetchDataFromserver();
  }, [handleData1]);

  return (
    <>
      <h5>Data is</h5>
      <div>{data}</div>
    </>
  );
};

export default BackendData;
