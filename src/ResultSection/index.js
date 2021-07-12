import { useEffect, useState } from "react";
import { Section, Header, ResultParagraph, ResultText } from "./styled";

const ResultSection = ({ calculateCurrency, amount, baseCurrency, targetCurrency, clickCounter }) => {

    const [checkValue, setCheckValue] = useState(false);

    useEffect(() => {
        setCheckValue(true);
        setTimeout(() => {
            setCheckValue(false);
        }, 1000);
    }, [clickCounter]);

    return (
        <Section>
            <Header>Wynik:</Header>
            <ResultParagraph>
                <ResultText highlighted={checkValue}>
                    {`${amount} ${baseCurrency} = `}
                </ResultText>
                <ResultText highlighted={checkValue}>
                    {`${calculateCurrency()} ${targetCurrency}`}
                </ResultText>
            </ResultParagraph>
        </Section>
    )
};

export default ResultSection;