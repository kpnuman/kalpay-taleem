import { Link, NavLink } from 'react-router-dom';

const logo = '/images/logo.png';

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-custom">
                <Link className="navbar-brand" to={'/'}>
                    <img src={window.location.origin + logo} width="133" height="68" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu" id="navbarNav">
                    <ul className="navbar-nav ml-auto justify-content-end">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to={'/'} activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/semester-fee'} activeClassName="active">
                                Semester Fee
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/admission-tests'} activeClassName="active">
                                Admission Tests
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/professional-exams'} activeClassName="active">
                                Professional Exams
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://docs.google.com/forms/d/e/1FAIpQLScRu-aQshc3C-W0uhmIoBB4MmLzUOUmAMjZV5JIYDJVhgx_OQ/viewform"
                                target="_blank"
                                rel="noreferrer"
                            >
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
