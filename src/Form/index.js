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
    currenciesData,
    getNewAmountValue,
    getNewTargetCurrencyValue,
    getNewClickCounterValue,
}) => {

    const [newAmountValue, setNewAmountValue] = useState(1.00);
    const [newTargetCurrency, setNewTargetCurrency] = useState("EUR");
    const [newClickCounterValue, setNewClickCounterValue] = useState(1);

    let currencyList = Object.keys(currenciesData.rates)

    const onFormSubmit = (event) => {
        event.preventDefault();
        getNewAmountValue(newAmountValue);
        getNewTargetCurrencyValue(newTargetCurrency);
        setNewClickCounterValue(newClickCounterValue => newClickCounterValue + 1);
        getNewClickCounterValue(newClickCounterValue);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Przelicznik walut</Legend>
                <Label>
                    <LabelText>Podaj kwotę w złotówkach:</LabelText>
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
                    <LabelText>Podaj walutę docelową: </LabelText>
                    <Select
                        value={newTargetCurrency}
                        onChange={({ target }) => setNewTargetCurrency(target.value)}
                        required
                    >
                        {currencyList.map((currency => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        )))}
                    </Select>
                </Label>
            </Fieldset>

            <Button>Przelicz!</Button>

        </StyledForm>
    );
};

export default Form;