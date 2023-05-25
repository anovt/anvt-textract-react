import './App.css';
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import TextAnalyze from './component/TextAnalyze';
function App() {


  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      
          <Route index element={<Home />} />
          <Route path="text-anazlyze/:jobsId" element={<TextAnalyze />} />
         
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
