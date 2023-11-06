import React from 'react';
import logo from '../../public/images/logo.png';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-custom">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logo} width="133" height="68" alt="Logo" />
                </Link>
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
                            <Link className="nav-link" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/semester-fee'}>
                                Semester Fee
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/admission-tests'}>
                                Admission Tests
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/professional-exams'}>
                                Professional Exams
                            </Link>
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
