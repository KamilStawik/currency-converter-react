import { useState, useEffect } from "react";

export const useCurrentDate = () => {

    const [currentDate, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return currentDate;
};