import React from "react";
//import React from 'react'

const CountState = () => {
    let count = 0;
    const handleInscrease = () => {
        console.log;
        ("Đã Bấm Nút");
    };
    return (
        <div>
            CountState
            <p> Count:{count}</p>
            <button onClick={handleInscrease}>Tăng</button>
        </div>
    );
};

export default CountState;
