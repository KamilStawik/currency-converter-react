import styled from "styled-components";

export const Container = styled.main`
    max-width: 600px;
    margin: 10px auto;
    padding: 10px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        margin: 5px auto;
        padding: 5px;
    }
`;