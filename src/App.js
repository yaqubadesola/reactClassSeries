import React from "react";
import {BioData as Data} from "./BioData";

// const greetings = () => {
//   return "Welcome to React Tutorial"
// }

const App = () => {
  const dataSet = [
                {name:"Raheem Adesola Yaqub", age: "20", address: "Lagos Mainland", level:"5"},
                {name:"Sheriff Hammed", age: "25", address: "UK" , level:"2"},
                {name:"Adekunle Hammed", age: "20", address: "New Jersey", level:"3"},
                {name:"Sherifat Hammed", age: "35", address: "California", level:"7"}
              ]
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Level</th>
        </tr>
          {dataSet.map(data => <Data data={data}/>)}
      
      </table>
    </div>
  );
}

export default App;
