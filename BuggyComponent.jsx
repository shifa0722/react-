import React from "react";

const BuggyComponent =() => {
    const student = {
        name : "abcd",
        age : 100
    };
    return (
        <div>
            <h2>{student.name}</h2>
        </div>
    )
}

export default BuggyComponent ;