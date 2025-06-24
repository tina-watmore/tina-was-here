import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="top">
                <p className="footer-cta">Stay Connect</p>
                <div className="btn-container">
                    <Link className="styled-lnk" to="/contact">
                        <img className="fa-icon" src={`${import.meta.env.BASE_URL}/icons/arrow-right-solid.svg`} alt="" />
                        Get in touch
                    </Link>
                </div>
            </div>
            <div className="bottom">
                <p className="footer-title">Tina was here</p>
                <p className="footer-info">Sydney, Australia</p>
                <ul className="footer-links" role='list'>
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
                    <li className="nav-item">
                        <NavLink to="/contact">Get In Touch</NavLink>
                    </li>                                                                          
                </ul>      
                <p className="footer-note">Created by Tina W</p>          
            </div>
        </footer>
    );
}