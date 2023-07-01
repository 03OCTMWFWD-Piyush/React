import { useState, useMemo } from "react";
import React from "react";



function Memo() {
    const [myNumber, setNumber] = useState(1);
    const [value, setvalue] = useState(0);

    // const factofNumber = factorialof(myNumber);  

    const factofNumber = useMemo(() => factorialof = (myNumber), [myNumber]);

    const onChange = (event) => {
        setNumber(Number(event.target.value));
    };

    const onClick = () => setvalue((i) => i + 1);
    return (
        <div>
            factorial of Number:
            <input type="number" value={myNumber} onChange={onChange}></input>  is {factofNumber}
            <button onClick={onClick}>Re-Rend</button>
        </div>
    )

    function factorialof(n) {
        console.log("factorial of number is:");
        return n <= 0 ? 1 : n * factorialof(n - 1);
    }
};

export default Memo;  