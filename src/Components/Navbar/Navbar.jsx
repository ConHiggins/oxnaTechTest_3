import "./Navbar.scss";

const Navbar = ({ resetToDos }) => {
    return (
        <div className="nav-bar">
            <p className="nav-bar__title">My ToDos</p>
            <button className="nav-bar__reset-button" onClick={resetToDos}>
                Reset
            </button>
        </div>
    );
};

export default Navbar;
