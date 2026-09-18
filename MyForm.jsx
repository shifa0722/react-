import { useEffect , useRef} from "react";

export default function MyForm(){

    const ip =useRef();

    useEffect(() =>{
        ip.current.focus();
    }, [])

return (
        <form>
            <input type="text"
            ref={ip}
            placeholder="Enter name"
            /> <br />
            <input type="email"
            ref={ip}
            placeholder="Enter email"
            /> <br />
            <input type="password"
            ref={ip}
            placeholder="Enter password"
            /> <br />
        </form>
    );
}