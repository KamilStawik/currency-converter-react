import Timer from "../Timer";
import { Section, List, ListItem, Date, InfoColorSample } from "./styled";

const InfoSection = ({ currenciesData }) => {

    return (
        <Section>
            <Timer />
            <List>
                <ListItem>
                    Kursy walut pobierane są z Europejskiego Banku Centralnego.
                </ListItem>
                <ListItem>
                    Aktualne na dzień <Date>{currenciesData.date}.</Date>
                </ListItem>
                <ListItem>
                    Pola wymagane są oznaczone kolorem żółtym:
                    <InfoColorSample requiredSample></InfoColorSample>
                </ListItem>

            </List>
        </Section>
    );
};

export default InfoSection;