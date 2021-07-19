import styled from "styled-components";

export const StyledTimer = styled.span`
    display: block;
    font-family: "Share Tech Mono", monospace;
    font-size: 14px;
    text-align: right;
    padding: 8px 2px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        font-size: 12;
    }
`;