import React, { useState } from "react";
import "./style.css";

const Form = ({ getNewAmountValue, getNewTargetCurrency, getNewBaseCurrency }) => {

    const [newAmountValue, setNewAmountValue] = useState(1.00);
    const [newBaseCurrency, setNewBaseCurrency] = useState("PLN");
    const [newTargetCurrency, setNewTargetCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        getNewAmountValue(newAmountValue);
        getNewBaseCurrency(newBaseCurrency);
        getNewTargetCurrency(newTargetCurrency);
    };

    return (
        <form className="form" onSubmit={onFormSubmit} >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>

                <label className="form__label">
                    <span className="form__labelText">Podaj kwotę do przeliczenia:</span>
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

                <label className="form__label">
                    <span className="form__labelText">Podaj walutę bazową:</span>
                    <select
                        className="form__selectField"
                        value={newBaseCurrency}
                        onChange={({ target }) => setNewBaseCurrency(target.value)}
                        required
                    >
                        <option value="PLN" >PLN</option>
                        <option value="EUR" >EUR</option>
                        <option value="USD" >USD</option>
                    </select>
                </label>

                <label className="form__label">
                    <span className="form__labelText">Podaj walutę docelową:</span>
                    <select
                        className="form__selectField"
                        value={newTargetCurrency}
                        onChange={({ target }) => setNewTargetCurrency(target.value)}
                        required
                    >
                        <option value="PLN" >PLN</option>
                        <option value="EUR" >EUR</option>
                        <option value="USD" >USD</option>

                    </select>
                </label>

            </fieldset>

            <button className="form__button">Przelicz!</button>

            <span>Kwota: {newAmountValue} </span>
            <span>{newBaseCurrency} .</span>
            <span>Przeliczyć na: {newTargetCurrency}</span>

        </form>
    )
};

export default Form;