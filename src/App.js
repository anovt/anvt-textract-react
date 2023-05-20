import './App.css';
import { useState, useRef } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./component/FileUpload";
function App() {
  const getFileName = async (filename) => {
    const data = { flname: filename };
    try {
      const res = await axios.post("http://localhost:4000/textract", data);
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <div className="App">
      <FileUpload ongetFileName={getFileName}></FileUpload>
    </div>
  );
}

export default App;
