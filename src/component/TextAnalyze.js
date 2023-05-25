import { Link, useParams } from "react-router-dom";
import axios from 'axios';
const TextAnalyze = () => {
  const { jobsId } = useParams();

  const textAnazlyze = async () => {

    const data = { jobsId: jobsId };
        try {
          const res = await axios.post("http://localhost:4000/textanalyze", data);
          console.log(res.data);

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
    </div>
  );
};

export default TextAnalyze;
