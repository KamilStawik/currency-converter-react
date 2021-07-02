import { useEffect, useState } from "react";
import "./style.css";

const ResultSection = ({ calculateCurrency, amount, baseCurrency, targetCurrency, clickCounter }) => {

    const [checkValue, setCheckValue] = useState(false);

    useEffect(() => {
        setCheckValue(true);
        setTimeout(() => {
            setCheckValue(false);
        }, 1000);
    }, [clickCounter]);

    return (
        <section className="resultSection">
            <h2 className="resultSection__header">Wynik:</h2>
            <p className="resultSection__resultBox">
                <span className={`resultSection__resultText ${checkValue === true ? "resultSection__resultText--highlighted" : ""}`}>
                    {`${amount} ${baseCurrency} = `}
                </span>
                <span className={`resultSection__resultText ${checkValue === true ? "resultSection__resultText--highlighted" : ""}`}>
                    {`${calculateCurrency()} ${targetCurrency}`}
                </span>
            </p>
        </section>
    )
};

export default ResultSection;