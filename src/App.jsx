import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ToDoContainer from "./Containers/ToDoContainer/ToDoContainer";
import Input from "./Components/Input/Input";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Input />
            <ToDoContainer />
        </div>
    );
}

export default App;
