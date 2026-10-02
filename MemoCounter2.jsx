import { useState } from "react";
import Employee2 from "./Employee2";

const MemoCounter2 =() =>{

    const [count ,setCount] = useState (0);

    const handleClick = useCallback(() => {
        console.log("button clicked");
    }, []);

    return (
        <div>
            <button onClick={() => setCount (count +1)}>count : {count}</button>
            <Employee2 
            name= 'ABCD'
            click ={handleClick}
            />
        </div>
    )
}

export default MemoCounter2;