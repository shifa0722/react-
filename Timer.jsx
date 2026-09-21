import {useEffect, useState} from 'react';

export default function Timer(){
    const [count, setCount] = useState(0);

    let timer;

    useEffect(()=>{
        timer = setTimeout(()=>{
            setCount(count + 1);
        }, 1000)
        // document.title ='Count:{count}';
    })

    function stop(){
        clearTimeout(timer);
    }

    return (

        <>
        <h2> Count: {count} </h2>
        <button onClick={stop}>stop</button>
        </>
        
    );
}