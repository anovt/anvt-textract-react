import { useState } from "react";

const DiagnosticsList = (props) => {
    //console.log(props.diagnostics, "props.diagnostics");
  return (
    

    
    <div>
      <h2>Diagnostics Report</h2>
      <ul>
      {props.diagnostics.map((item,i) => (
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiagnosticsList;
