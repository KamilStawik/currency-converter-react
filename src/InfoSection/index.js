import "./style.css";

const InfoSection = () => (
    <section className="infoSection">
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
    </section>
);

export default InfoSection;