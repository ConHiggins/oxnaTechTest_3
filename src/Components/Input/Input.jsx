import "./Input.scss";

const Input = ({ value, handleInput, addToDo, updateTDList }) => {
    return (
        <div className="input">
            <input
                type="text"
                placeholder={value}
                className="input__textbox"
                onInput={handleInput}
            />
            <button className="input__add-button" onClick={updateTDList} />
        </div>
    );
};

export default Input;
