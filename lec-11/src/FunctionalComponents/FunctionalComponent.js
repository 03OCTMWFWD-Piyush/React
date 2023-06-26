import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FunctionalComponent() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setmessage] = useState("functional component");

    useEffect(() => {
        console.log("component mounted or updated");

    });

    // * Component not mounted for empty change :-

    useEffect(() => {
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000);
    }, [time]);


    // * Unmounent the component useEffect :-

    useEffect(() => {
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("cleanup of interval");
            clearInterval(interval);
        }
    }, [time]);

    const showDate = () => {
        setTime(new Date().toString());
    };

    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>showDate</button>
            <div>{message}</div>
            <button onClick={() => setmessage("changed functional component")}>change message</button>
        </div>
    );
}

export default FunctionalComponent;  