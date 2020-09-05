import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const logo = require('../logo.jpg');

const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>
                <img  width="200" src={logo} alt="Logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navbarNavAltMarkup"
                data-target="#navbarNavAltMarkup"
                aira-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/transaction">
                        Transaction
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Nav;
 