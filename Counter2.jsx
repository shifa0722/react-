import {useffect , useState} from "react";

export default function Counter2(){
    const [ct1 , srCt1] = useState(100);
    const [ct2 , srCt2] = useState(200);

    useffect(()=>{
        console.log("ct1 is changed");
        
    },[ct2]);

    return (
        <>
        <div>Counter 2 : {ct1}</div>
        <button onClick={() => srCt1(ct1 + 1)}>Increment Counter 1</button>
        <div>Counter 2 : {ct2}</div>
        <button onClick={() => srCt2(ct2 + 1)}>Increment Counter 2</button>
        </>
    )
}