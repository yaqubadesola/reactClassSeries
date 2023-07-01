import React,{useContext} from 'react';
import { UserContext } from '../userContextDetails';
function Home3(props) {
    const data = useContext(UserContext)
    //const changeUser = useContext(UserContext)
    //console.log("UserData",user)
    return (
        <div>
            <h1>User is {data.user}</h1>
            <button onClick={() => data.changeUserName("Sheriff Hammed")}>Reset User</button>

        </div>
    );
}

export default Home3;