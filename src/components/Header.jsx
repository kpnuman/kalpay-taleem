import React from 'react';
import logo from '../../public/images/logo.png';
function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-custom">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="133" height="68" alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse" // Use "data-bs-toggle" instead of "data-toggle"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu" id="navbarNav">
                    <ul className="navbar-nav ml-auto justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Semester Fee
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Admission Tests
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Professional Exams
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Apply Now
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
