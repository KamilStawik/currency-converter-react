import Timer from "../Timer";
import { Section, LoadingText } from "./styled";

const LoadingScreen = () => {

    return (
        <Section>
            <Timer />
            <LoadingText>
                Moja aplikacja przeczesuje dla Ciebie internet w poszukiwaniu najświeższych kursów walut.
            </LoadingText>
            <LoadingText>
                Może to potrwać kilka sekund. 😎
            </LoadingText>
        </Section>
    );
};

export default LoadingScreen;