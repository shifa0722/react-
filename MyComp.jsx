import { useState } from "react";

export default function MyComp() {
    const [age, setAge] = useState(290);

    const myFun = () => {
        setAge(29)

    };

    return (
        <>
            <h2>
                my age is {age}
            </h2>
            <button onClick={myFun}>click me</button>

        </>
    );
}