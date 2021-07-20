import styled, { css } from "styled-components";

export const Section = styled.section`
    max-width: 100%;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 5px;
    box-shadow: 5px 5px 5px hsl(0, 0%, 20%);
    padding: 10px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        box-shadow: 2px 2px 2px hsl(0, 0%, 20%);
    }
`;

export const Header = styled.h2`
    margin: 5px;
    text-align: center;  
`;

export const ResultParagraph = styled.p`
    text-align: center;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ResultText = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
    transition: color 0.2s linear;

    && {    
        ${({ highlighted }) => highlighted && css`
            color: hsl(340, 90%, 45%);
        `}
    }

    && {    
        ${({ highlighted }) => highlighted && css`
            color: hsl(340, 90%, 45%);
        `}
    }

    && {    
        ${({ empty }) => empty && css`
            display: none;
        `}
    }
`;