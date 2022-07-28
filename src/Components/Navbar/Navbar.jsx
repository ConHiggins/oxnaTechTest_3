import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <p className="nav-bar__title">My ToDos</p>
            <button className="nav-bar__reset-button">Reset</button>
        </div>
    );
};

export default Navbar;
