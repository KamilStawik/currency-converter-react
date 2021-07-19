import { useEffect, useState } from "react";
import { Section, Header, ResultParagraph, ResultText } from "./styled";

const ResultSection = ({ amount, currency, rate, clickCounter }) => {

    const [checkValue, setCheckValue] = useState(false);

    useEffect(() => {
        setCheckValue(true);
        setTimeout(() => {
            setCheckValue(false);
        }, 1000);
    }, [clickCounter]);

    const calculateResult = () => (amount * rate).toFixed(2);

    return (
        <Section>
            <Header>Wynik:</Header>
            <ResultParagraph>
                <ResultText highlighted={checkValue}>
                    {`${amount} PLN = `}
                </ResultText>
                <ResultText highlighted={checkValue}>
                    {` ${calculateResult()} ${currency}`}
                </ResultText>
            </ResultParagraph>
        </Section>
    )
};

export default ResultSection;