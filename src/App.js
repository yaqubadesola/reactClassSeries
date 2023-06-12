import React from "react";
import AnotherClassComponent from "./AnotherClassComponent";
import {BioData as Data} from "./BioData";
import LifeCycleMethods from "./LifeCycleMethods";

// const greetings = () => {
//   return "Welcome to React Tutorial"
// }

const App = () => {
  const dataSet = [
                {name:"Raheem Adesola Yaqub", age: "20", address: "Lagos Mainland", level:"5"},
                {name:"Sheriff Hammed", age: "25", address: "UK" , level:"2"},
                {name:"Adekunle Hammed", age: "20", address: "New Jersey", level:"3"},
                {name:"Sherifat Hammed", age: "35", address: "California", level:"7"}  ];

  const appData = (allData) => {
    return(<table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Level</th>
        </tr>
          {allData.map(data => <Data data={data}/>)}
      
      </table>)
  }
            
  return (
    <div className="App">
      {/* {appData(dataSet)}
      <AnotherClassComponent summary="First Term Grade" /> */
      }
      <LifeCycleMethods anotherName="Sheriff"/>
    </div>
  );
}

export default App;
