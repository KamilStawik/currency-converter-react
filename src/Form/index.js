import React, { useState } from "react";
import {
    StyledForm,
    Fieldset,
    Legend,
    Label,
    LabelText,
    AmountInput,
    Select,
    Button,
} from "./styled"

const Form = ({
    properRating,
    getNewAmountValue,
    getNewTargetCurrency,
    getNewBaseCurrency,
    getNewClickCounterValue
}) => {

    const [newAmountValue, setNewAmountValue] = useState(1.00);
    const [newBaseCurrency, setNewBaseCurrency] = useState("PLN");
    const [newTargetCurrency, setNewTargetCurrency] = useState("EUR");
    const [newClickCounterValue, setNewClickCounterValue] = useState(1);

    const onFormSubmit = (event) => {
        event.preventDefault();
        getNewAmountValue(newAmountValue);
        getNewBaseCurrency(newBaseCurrency);
        getNewTargetCurrency(newTargetCurrency);
        setNewClickCounterValue(newClickCounterValue => newClickCounterValue + 1);
        getNewClickCounterValue(newClickCounterValue);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Przelicznik walut</Legend>
                <Label>
                    <LabelText>Podaj kwotę do przeliczenia:</LabelText>
                    <AmountInput
                        className="form__numberField"
                        type="number"
                        value={newAmountValue}
                        onChange={({ target }) => setNewAmountValue(target.value)}
                        step="0.01"
                        min="0.01"
                        max="1000000"
                        required
                    />
                </Label>
                <Label>
                    <LabelText>Podaj walutę bazową:</LabelText>
                    <Select
                        error={properRating === 1 ? true : false}
                        value={newBaseCurrency}
                        onChange={({ target }) => setNewBaseCurrency(target.value)}
                        required
                    >
                        <option value="PLN" >PLN</option>
                        <option value="EUR" >EUR</option>
                        <option value="USD" >USD</option>
                    </Select>
                </Label>
                <Label>
                    <LabelText>Podaj walutę docelową:</LabelText>
                    <Select
                        error={properRating === 1 ? true : false}
                        value={newTargetCurrency}
                        onChange={({ target }) => setNewTargetCurrency(target.value)}
                        required
                    >
                        <option value="PLN" >PLN</option>
                        <option value="EUR" >EUR</option>
                        <option value="USD" >USD</option>
                    </Select>
                </Label>
            </Fieldset>

            <Button>Przelicz!</Button>

        </StyledForm>
    );
};

export default Form;