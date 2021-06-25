import "./style.css";

const ResultSection = ({ calculateCurrency, amount, baseCurrency, targetCurrency }) => (
    <section className="resultSection">
        <h2 className="resultSection__header">Wynik:</h2>
        <p className="resultSection__resultBox">
            <span className="resultSection__resultText">{amount} {baseCurrency} = </span>
            <span className="resultSection__resultText">{calculateCurrency()} {targetCurrency}</span>
        </p>
    </section>
);

export default ResultSection;