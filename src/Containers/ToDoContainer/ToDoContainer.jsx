import "./ToDoContainer.scss";
import ToDo from "../../Components/ToDo/ToDo";

const ToDoContainer = ({ toDos }) => {
    let toDoCards = [];
    toDos.forEach((item) => {
        toDoCards.push(<ToDo value={item} />);
    });

    return toDoCards;
};

export default ToDoContainer;
