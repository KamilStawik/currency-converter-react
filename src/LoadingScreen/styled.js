import styled from "styled-components";

export const Section = styled.section`
    max-width: 100%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 5px;
    box-shadow: 5px 5px 5px hsl(0, 0%, 20%);
    padding: 10px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        box-shadow: 2px 2px 2px hsl(0, 0%, 20%);
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 2px;
`;

export const ListItem = styled.li`
    padding: 8px 2px;
`;