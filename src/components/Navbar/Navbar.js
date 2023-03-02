import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => (
    <div className="Navbar ">
        <nav className="navbar navbar-expand-lg bg-primary ">
            <div className="container-fluid ">
                <a className="navbar-brand mx-3 text-white" href="#">WILLIAM GIBSON</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white" href="#">Pricing</a>
                        </li>
                        <li className="nav-item  text-white">
                            <a className="nav-link disabled ">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

Navbar.propTypes = {


};



export default Navbar;
