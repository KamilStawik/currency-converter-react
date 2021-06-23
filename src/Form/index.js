import React, { useState } from "react";
import "./style.css";

const Form = ({ getNewAmountValue, getNewTargetCurrency }) => {

    const [newAmountValue, setNewAmountValue] = useState(0);
    const [newTargetCurrency, setNewTargetCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        getNewAmountValue(newAmountValue);
        getNewTargetCurrency(newTargetCurrency);
        setNewAmountValue(0);
    };

    return (

        <form className="form" onSubmit={onFormSubmit} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>

                <label>
                    <span className="form__labelText">Podaj kwotę w złotówkach:</span>
                    <input
                        className="form__numberField"
                        type="number"
                        value={newAmountValue}
                        onChange={({ target }) => setNewAmountValue(target.value)}
                        step="0.01"
                        min="0.01"
                        max="100000000"
                        required
                    />
                </label>

                <label>
                    <select
                        className="form__selectField"
                        value={newTargetCurrency}
                        onChange={({ target }) => setNewTargetCurrency(target.value)}
                        name="resultCurrency"
                        required
                    >
                        <option value="EUR" >EUR</option>
                        <option value="USD" >USD</option>
                    </select>
                </label>
            </fieldset>

            <button className="form__button">Przelicz!</button>

            <span>{newAmountValue}</span>
            <span>{newTargetCurrency}</span>

        </form>
    )
};

export default Form;