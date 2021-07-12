import styled from "styled-components";

export const StyledHeader = styled.h1`
    text-align: center;
    color: ${({ theme }) => (theme.colors.primaryColor)};
    background-color: ${({ theme }) => (theme.colors.requiredColor)};
    padding: 20px;
    margin-top: 0px;
`;