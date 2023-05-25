import FileUpload from "./FileUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
    
    const navigate = useNavigate();

    const getFileName = async (filename) => {
        const data = { flname: filename };
        try {
          const res = await axios.post("http://localhost:4000/textract", data);
          console.log(res.data.jobId);
          navigate(`/text-anazlyze/${res.data.jobId}`);
        } catch (err) {}
      };


    return (
        <>
        <FileUpload ongetFileName={getFileName}></FileUpload>
        </>
      );
    
}
 
export default Home;
