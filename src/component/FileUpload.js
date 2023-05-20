import React,{useState,useRef } from 'react'
import axios from 'axios';
 
const FileUpload = (props) => {
 
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
      const ref = useRef();
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:4000/upload",
            formData
          );
          console.log(res.data);
         if(res.data.status === 'success')
         {
          //alert("File uploaded");
          setFile('');
          setFileName('');
          ref.current.value = "";
          props.ongetFileName(res.data.filename);
         }
        } catch (ex) {
          console.log(ex);
        }
      };
 
   


      
      return (
        <div className="App">
          <input type="file" onChange={saveFile} ref={ref}  />
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
    
}
 
export default FileUpload;