import { useEffect, useState } from "react";
import "./ToDo.scss";

const ToDo = ({ value, deprcTDList, k }) => {
    const [strike, setStrike] = useState(false);
    const [style, setStyle] = useState("none");

    const handleStrike = () => {
        setStrike(!strike);
    };

    const handleStyle = (strike) => {
        strike ? setStyle("line-through") : setStyle("none");
    };

    useEffect(() => {
        handleStyle(strike);
    }, [strike]);

    const handleDeprcTD = () => {
        deprcTDList(k);
    };

    return (
        <div className="to-do">
            <input
                className="to-do__check"
                type="checkbox"
                onChange={handleStrike}
            />
            <input
                className="to-do__title"
                defaultValue={value}
                style={{ textDecoration: style }}
            />
            <button className="to-do__delete" onClick={handleDeprcTD}>
                |||
            </button>
        </div>
    );
};

export default ToDo;
