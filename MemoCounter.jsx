import { useState } from "react";
import Employee from "./Employee";

const MemoCounter =() =>{

    const [count ,setCount] = useState (0);
    return (
        <div>
            <button onClick={() => setCount (count +1)}>count : {count}</button>
            <Employee 
            name= 'ABCD'
            />
        </div>
    )
}

export default MemoCounter;