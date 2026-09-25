import { Component, createContext, useContext } from "react";

const UseContext =createContext();

export default function UseContextExample(){
    let userName ="shifa";
    return (
        <UseContext.Provider value={userName}>
            <h2>hello,{userName}</h2>
            <Component1/>
        </UseContext.Provider>
    );
}

function Component1(){
    return(
        <>
        <p>this is my component</p>
        <Component2/>
        </>
    );
}

function Component2(){
    const user =useContext(useContext);
    return(
        <>
        <p>component2</p>
        <h4>hello again ,{user}</h4>
        </>
    );
}