import React, { useState,useEffect,createContext }from 'react';
import Home2 from './Home2';
//createContext, useContext, Provider
function Home(props) {
    const UserContext = createContext()
    const [colorSettings, setColorSettings] = useState({color:"white", backgroundColor:"red"}) //formular
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(true) 
    const [user,setUser] = useState("Raheem Yaqub Adesola")
    const stopWatch = () => {
        start && setTimeout(() => setCount(count => count + 5), 5000 )
        return () => {
            setStart(false)
        }
    }

    useEffect(
        stopWatch        
        , [count])
    

    const changeColor = (bgCol,col) => {
        setColorSettings({
                            ...colorSettings, 
                            color:col, 
                            backgroundColor:bgCol
                        })
    }

    return (
   
        <UserContext.Provider value={user}>
          <div>
            <div style={{backgroundColor:colorSettings.backgroundColor, color:colorSettings.color}}>{colorSettings.color}</div>
            <button onClick={() => changeColor("green","blue")}>Color green</button>
            <button onClick={() => changeColor("blue","yellow")}>Color Blue</button>
            <button onClick={() =>  changeColor("orange","black")}>Color Orange</button>
            <h1>{count < 1 ? `No Counter: ${count}` : `The Count is: ${count}`}</h1>
        </div>
        <Home2/>
        </UserContext.Provider>
      
    );
}

export default Home;