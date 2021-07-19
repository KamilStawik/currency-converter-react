import Timer from "../Timer";
import { Section, List, ListItem, InfoColorSample } from "./styled";

const InfoSection = () => {

    return (
        <Section>
            <Timer />
            <List>
                <ListItem>
                    Kalkulator przelicza wartość waluty po kursie średnim z dnia 24.06.2021.
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