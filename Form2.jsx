import { useEffect, useRef , useState } from  "react";

export default function Form2(){
    const[name, setName] = useState("");
    const[email , setEmail] =useState("");

    const ip =useRef();
    useEffect(() =>{
        ip.current.focus();
    }, [])

    return (
        <>
        <input type="text"
        ref={ip}
        placeholder="name"
        onChange={(e) => setName (e.target.value)}
        /> <br/>
        <h2>{name}</h2>
        <input type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <h2>{email}</h2>
        </>
    );
}