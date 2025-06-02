import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(!navOpen) {
            document.body.classList.remove('nav-open');
        } else {
            document.body.classList.add('nav-open');
        }      
    }, [navOpen]);

    // remove nav open classes and reseting navOpen on location change
    useEffect(() => {
        return () => {
            document.body.classList.remove('nav-open');
            setNavOpen(false);
        }
    }, [location]);

    return (
        <header className={`${navOpen ? 'open' : ''}`}>
            <div className='header-bar'>
                <Link className="header-logo" to='/'>
                    Tina was here!
                </Link> 
                <button onClick={() => setNavOpen(!navOpen)} className='navbar-toggle' type='button' aria-label='Toggle navigation'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className='navbar'>
                <ul className="navbar-links" role='list'>
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>   
                    <li className="nav-item">
                        <NavLink to="/about">About</NavLink>
                    </li>    
                    <li className="nav-item">
                        <NavLink to="/experience">Experience</NavLink>
                    </li>                                   
                    <li className="nav-item">
                        <NavLink to="/projects">Hobbie Projects</NavLink>
                    </li>                                                       
                    <li className="nav-item">
                        <NavLink to="/interests">Interests</NavLink>
                    </li>                                                       
                </ul>
            </nav>
        </header>
    );
}