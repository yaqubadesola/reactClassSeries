import React,{ createContext,useState } from "react";

const UserContext  = createContext(); //Inbuilt function

function UserProvider(props) {//It returns the context created above
    const [user,setUser] = useState("Adesola Yaqub");
    const changeUser = (name)=> {
        setUser(name)
    }

    const data = {
        user,
        changeUserName : changeUser
    }
    return (
        <UserContext.Provider value={data}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserProvider, UserContext};
