import Timer from "../Timer";
import { Section, List, ListItem } from "./styled";

const LoadingScreen = () => {

    return (
        <Section>
            <Timer />
            <List>
                <ListItem>
                    Moja aplikacja przeszukuje dla Ciebie internet w poszukiwaniu najświeższych kursów walut.
                    Może to potrwać kilka sekund.
                </ListItem>
            </List>
        </Section>
    );
};

export default LoadingScreen;