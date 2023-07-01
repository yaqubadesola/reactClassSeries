import React from "react";
// import TableComp from "./TableComp";
// import AnotherClassComponent from "./AnotherClassComponent";
// import {BioData as Data} from "./BioData";
// import LifeCycleMethods from "./LifeCycleMethods";
// import styles from './app.module.css'
import TestCondition from "./TestCondition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Page404 from "./pages/404";
import Home3 from "./pages/Home3";
import {UserProvider} from './userContextDetails'

//import FormRefComponent from "./FormRefComponent";

// const greetings = () => {
//   return "Welcome to React Tutorial"
// }

const App = () => {
  const myStyles = {
        appClass: {
          backgroundColor:"green"
        }
  }
  // const dataSet = [
  //               {name:"Raheem Adesola Yaqub", age: "20", address: "Lagos Mainland", level:"5"},
  //               {name:"Sheriff Hammed", age: "25", address: "UK" , level:"2"},
  //               {name:"Adekunle Hammed", age: "20", address: "New Jersey", level:"3"},
  //               {name:"Sherifat Hammed", age: "35", address: "California", level:"7"} 
  //              ];
 
  // const appData = (allData) => {
  //   const result = allData ?
  //   (<table>
  //       <tr>
  //         <th>Name</th>
  //         <th>Age</th>
  //         <th>Address</th>
  //         <th>Level</th>
  //       </tr>
  //         {allData.map(data => <Data data={data}/>)}
      
  //     </table>) 
  //     : "No record found"

  //     return result
  // }
            
  return (
    <UserProvider>
      <div className={myStyles.appClass}>
        {/* {appData(dataSet)} */}
      
        <BrowserRouter>
        
            <Routes>
            
              <Route path="/"         element={<Layout/>}>

                <Route index path="/" element={<Home/>} />
                <Route path="about"   element={<About/>} />
                <Route path="service/:id"   element={<Service/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="home3" element={<Home3/>} />
                <Route path="*" element={<Page404/>} />
              </Route>
            </Routes>
        </BrowserRouter>
        
        {/* <TestCondition show={false}/> */}
        {/* <FormRefComponent/> */}
        {/* <AnotherClassComponent summary="First Term Grade" /> */
        }
        {/* <LifeCycleMethods anotherName="Sheriff"/> */}
        {/* <TableComp/> */}
      </div>
    </UserProvider>

  );
}

export default App;
