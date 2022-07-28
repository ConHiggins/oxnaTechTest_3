import { useEffect, useState } from "react";
import "./ToDo.scss";

const ToDo = ({ value }) => {
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

    return (
        <div className="to-do">
            <input
                className="to-do__check"
                type="checkbox"
                onChange={handleStrike}
            />
            <p className="to-do__title" style={{ textDecoration: style }}>
                {value}
            </p>
            <button className="to-do__delete">|||</button>
        </div>
    );
};

export default ToDo;
