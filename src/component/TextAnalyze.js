import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import DiagnosticsList from "./DiagnosticsList";
const TextAnalyze = () => {
  const { jobsId } = useParams();

   const [diagnostics, setDiagnostics] = useState([]);

  const textAnazlyze = async () => {

    const data = { jobsId: jobsId };
        try {
          const res = await axios.post("http://localhost:4000/textanalyze", data);
          console.log(res.data);
          setDiagnostics(res.data.parsedData['diagnostics']);
          if(res.data.status === 'error')
          {
            alert(res.data.message);
          }
         
        } catch (err) {}
  };

  return (
    <div>
      Analysing Text
      <button onClick={textAnazlyze}>Get Text Analyze Data</button>
      <DiagnosticsList diagnostics = {diagnostics}/>
    </div>
  );
};

export default TextAnalyze;
