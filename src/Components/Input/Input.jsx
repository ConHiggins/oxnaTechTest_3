import { createRef } from "react";
import "./Input.scss";

const Input = ({ value, handleInput, addToDo, updateTDList }) => {
    let inputRef = createRef();
    const handleClick = () => {
        updateTDList();
        inputRef.current.value = "";
    };

    return (
        <div className="input">
            <input
                ref={inputRef}
                type="text"
                placeholder={value}
                className="input__textbox"
                onChange={handleInput}
            />
            <button className="input__add-button" onClick={handleClick} />
        </div>
    );
};

export default Input;
