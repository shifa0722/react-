import {useState} from "react";

export default function MyComp2(){
    const [name,setName] = useState("John");
    const [age,setAge] = useState(25);
    const [city,setCity] = useState("New York");


    return(
        <>
        <p> Name: {name} </p>
        <button onClick={()=> setName("Jane")}>Change Name</button>
        <p> Age: {age} </p>
        <button onClick={()=> setAge(30)}>Change Age</button>
        <p> City: {city} </p>
        <button onClick={()=> setCity("Los Angeles")}>Change City</button>
        </>
    );
}