import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ToDoContainer from "./Containers/ToDoContainer/ToDoContainer";
import Input from "./Components/Input/Input";
import { useState } from "react";

function App() {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const addToDo = (tds, inp) => {
        let tempToDos = [...tds];
        tempToDos.push(inp);
        setToDos(tempToDos);
        console.log("temp" + tempToDos);
        return tempToDos;
    };

    const updateTDList = () => {
        addToDo(toDos, input);
        console.log(toDos);
    };

    console.log(toDos);

    return (
        <div className="App">
            <Navbar />
            <Input
                value={input}
                handleInput={handleInput}
                addToDo={addToDo}
                updateTDList={updateTDList}
            />
            <ToDoContainer toDos={toDos} />
        </div>
    );
}

export default App;
