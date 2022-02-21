import { useState } from "react";
import logo from "./logo.svg";
import BackendData from "./BackendData";
import "./App.css";

const App = () => {
  const [data1, setData1] = useState();
  const handleData1 = (data) => {
    setData1(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Helloooooo <code>there</code> World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Full Stack
        </a>
      </header>
      <h4>Backend Data: </h4>

      <BackendData handleData1={handleData1} />
      <h4>data1</h4>
      <p>{data1}</p>
    </div>
  );
};

export default App;
