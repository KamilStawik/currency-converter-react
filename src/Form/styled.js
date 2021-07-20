import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 100%;
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => (theme.colors.primaryColor)};
    background-color: ${({ theme }) => (theme.colors.backgroundColor)};
    border-radius: 5px;
    box-shadow: 5px 5px 5px hsl(0, 0%, 20%);
    padding: 10px;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        box-shadow: 2px 2px 2px hsl(0, 0%, 20%);
    }
`;

export const Legend = styled.legend`
    border: none;
    border-radius: 5px;
    color: hsl(0, 0%, 100%);
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    padding: 10px;
`;

export const Label = styled.label`
    margin: 10px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const LabelText = styled.span`
    max-width: 260px;
    width: 100%;
    display: inline-block;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        max-width: fit-content;
    }
`;

export const AmountInput = styled.input`
    max-width: 160px;
    width: 100%;
    border: 1px solid ${({ theme }) => (theme.colors.borderColor)};
    border-radius: 5px;
    padding: 6px;
    margin: 0px 10px;

    &:required {
        background-color: ${({ theme }) => (theme.colors.requiredColor)};
    }
`;

export const Select = styled.select`
    max-width: 160px;
    width: 100%;
    border: 1px solid ${({ theme }) => (theme.colors.borderColor)};
    border-radius: 5px;
    padding: 3px;
    margin: 0px 10px;

    &:required {
        background-color: ${({ theme }) => (theme.colors.requiredColor)};
    }
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    margin: 5px auto;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: hsl(0, 0%, 100%);
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    box-shadow: 5px 5px 5px hsl(0, 0%, 20%);

    &:hover {
        font-weight: bold;
        background-color: hsl(240, 100%, 35%);
    }

    &:active {
        font-weight: bold;
        background-color: hsl(240, 100%, 45%);
    }
`;