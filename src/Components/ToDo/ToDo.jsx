import "./ToDo.scss";

const ToDo = () => {
    return (
        <div className="to-do">
            <input className="to-do__check" type="checkbox" />
            <p className="to-do__title">here</p>
            <button className="to-do__delete" />
        </div>
    );
};

export default ToDo;
