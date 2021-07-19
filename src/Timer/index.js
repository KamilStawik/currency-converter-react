import React from "react";
import { useCurrentDate } from "./useCurrentDate";
import { StyledTimer } from "./styled";

const Timer = () => {

    const currentDate = useCurrentDate();

    const timer = currentDate.toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <StyledTimer>Dzisiaj jest {timer} </StyledTimer>
    );
};

export default Timer;