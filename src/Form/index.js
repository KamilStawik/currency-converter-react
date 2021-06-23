import React, { useState } from "react";
import "./style.css";

const Form = ({ getNewAmountValue }) => {

    const [newAmountValue, setNewAmountValue] = useState(0);

    const onFormSubmit = (event) => {
        event.preventDefault();
        getNewAmountValue(newAmountValue);
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
                        name="amount"
                        value={newAmountValue}
                        onChange={({ target }) => setNewAmountValue(target.value)}
                        step="0.01"
                        min="1"
                        max="100000000"
                        required
                    />
                </label>

                <label>
                    <select className="form__selectField" name="resultCurrency" required>
                        <option defaultValue="EUR" >EUR</option>
                    </select>
                </label>
            </fieldset>

            <button className="form__button">Przelicz!</button>

            <span>{newAmountValue}</span>

        </form>
    )
};

export default Form;