import "./ToDo.scss";

const ToDo = ({ value }) => {
    return (
        <div className="to-do">
            <input className="to-do__check" type="checkbox" />
            <p className="to-do__title">{value}</p>
            <button className="to-do__delete">|||</button>
        </div>
    );
};

export default ToDo;
