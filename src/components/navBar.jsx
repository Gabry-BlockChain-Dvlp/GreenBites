
import "../css/NavBar.css";

function NavBar() {
    return(
    <nav className="navbar">
        <div className="navbar-brand">
            <a className="navbar-brand" href="/">GreenBites</a>
        </div>
        <div className="navbar-links">
            <a href="/" className="nav-link">Home</a>
            {/* <a href="/recipeDetails" className="nav-link">Details</a> */}
        </div>
    </nav>
)};

export default NavBar;