import Timer from "../Timer";
import { Section, List, ListItem } from "./styled";

const LoadingScreen = () => {

    return (
        <Section>
            <Timer />
            <List>
                <ListItem>
                    <p>Moja aplikacja przeczesuje dla Ciebie internet w poszukiwaniu najświeższych kursów walut.</p>
                    <p> Może to potrwać kilka sekund. 😎</p>
                </ListItem>
            </List>
        </Section>
    );
};

export default LoadingScreen;