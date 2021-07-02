import React, { useEffect, useState } from "react";
import "./style.css";

const InfoSection = () => {

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
        < section className="infoSection" >
            <p><span className="infoSection__timer">Dzisiaj jest {timer} </span></p>
            <ul className="infoSection__unorderedList">
                <li className="infoSection__listItem">
                    Kalkulator przelicza wartość waluty po kursie średnim z dnia 24.06.2021.
                </li>
                <li className="infoSection__listItem">
                    Pola wymagane są oznaczone kolorem żółtym:
                    <span className="infoSection__requiredColor"></span>
                </li>
                <li className="infoSection__listItem">
                    Pola błędnie wypełnione są oznaczone kolorem czerwonym:
                    <span className="infoSection__invalidColor"></span>
                </li>
            </ul>
        </section >
    );
};

export default InfoSection;