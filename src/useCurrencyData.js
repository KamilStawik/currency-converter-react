import { useState, useEffect } from "react";

export const useCurrencyData = () => {

    const initialData = {
        rates: null,
        date: null,
        status: "loading",
    };

    const [currenciesData, setCurrenciesData] = useState(initialData);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.exchangerate.host/latest?base=PLN")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => setCurrenciesData({
                    rates: (response.rates),
                    date: (response.date),
                    status: ("succes"),
                }))
                .catch(error => {
                    setCurrenciesData({ status: ("error") })
                    console.log(error)
                });
        }, 2000);
    }, []);

    return { currenciesData }
};