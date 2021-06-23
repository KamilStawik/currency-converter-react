import "./style.css";

const Form = () => {

    return (

        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>

                <label>
                    <span className="form__labelText">Podaj kwotę w złotówkach:</span>
                    <input className="form__numberField" type="number" name="amount" value="1" step="0.01"
                        min="1" max="100000000" required />
                </label>

                <label>
                    <select class="form__selectField" name="resultCurrency" required>
                        <option value="PLN">PLN</option>
                        <option value="EUR" selected>EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </fieldset>

            <button class="form__button">Przelicz!</button>

        </form>

    )
};

export default Form;