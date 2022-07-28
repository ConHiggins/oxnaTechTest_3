import "./ToDoContainer.scss";
import ToDo from "../../Components/ToDo/ToDo";

const ToDoContainer = ({ toDos, deprcTDList }) => {
    let toDoCards = [];
    let k = 0;

    toDos.forEach((item) => {
        toDoCards.push(
            <ToDo value={item} deprcTDList={deprcTDList} key={k} k={k} />
        );
        k++;
    });

    return toDoCards;
};

export default ToDoContainer;
