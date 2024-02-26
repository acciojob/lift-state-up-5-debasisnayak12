import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [isLoggedIn,setisLoggedIn] = useState(false);

    return (
        <div>
            <h1>Parent Component</h1>
            { !isLoggedIn && <Child setisLoggedIn={setisLoggedIn} />}
            {isLoggedIn && <p>You are logged in!</p>}
        </div>
    )
}
export default Parent;