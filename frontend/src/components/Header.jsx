import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link className="header-logo" to='/'>
                Tina was here!
            </Link> 
            <div className="navbar">
                <ul className="navbar-links" role='list'>
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>   
                    <li className="nav-item">
                        <NavLink to="/about">About</NavLink>
                    </li>                                      
                </ul>
            </div>
        </header>
    );
}