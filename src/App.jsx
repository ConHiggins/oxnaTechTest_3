import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ToDoContainer from "./Containers/ToDoContainer/ToDoContainer";
import Input from "./Components/Input/Input";
import { useState } from "react";

function App() {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");
    const [deleteIndex, setDeleteIndex] = useState(toDos.length);

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleDelIndex = (event) => {
        setDeleteIndex(event.target.key);
    };

    const addToDo = (tds, inp) => {
        let tempToDos = [...tds];
        tempToDos.push(inp);
        setToDos(tempToDos);
        return tempToDos;
    };

    const remvToDo = (tds, i) => {
        let tempToDos = [...tds];
        tempToDos.splice(i, 1);
        setToDos(tempToDos);
        return tempToDos;
    };

    const updateTDList = () => {
        addToDo(toDos, input);
    };

    const deprcTDList = (tdIndex) => {
        remvToDo(toDos, tdIndex);
    };

    return (
        <div className="App">
            <Navbar />
            <Input
                value={input}
                handleInput={handleInput}
                addToDo={addToDo}
                updateTDList={updateTDList}
            />
            <ToDoContainer toDos={toDos} deprcTDList={deprcTDList} />
        </div>
    );
}

export default App;
