import React, { useEffect, useState } from "react";
import "./style.css";

const Timer = () => {

    const [currentTime, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const timer = currentTime.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <span className="timer">Dzisiaj jest {timer} </span>
    );
};

export default Timer;