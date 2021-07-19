import Timer from "../Timer";
import { Section, ErrorText } from "./styled";

const ErrorScreen = () => {

    return (
        <Section>
            <Timer />
            <ErrorText>
                Aplikacja nie działa poprawnie. 😭
            </ErrorText>
            <ErrorText>
                Sprawdź połączenie z internetem.
            </ErrorText>
            <ErrorText>
                Jeśli internet działa, to problem musi być po naszej stronie. Postaramy się usunąć usterkę jak najszybciej.
            </ErrorText>
        </Section>
    );
};

export default ErrorScreen;