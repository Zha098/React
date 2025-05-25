import { Link } from "react-router";
import styles from "../../shared/navigation.module.css";
import { FaBookOpen, FaUserCircle, FaHome, FaTeamspeak  } from "react-icons/fa";


export default function Header() {
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex align-items-center text-decoration-none">
                        <img src="/images/logo booksales.png" alt="Logo Booksales" width="50" className="me-2" />
                        <span className="fs-4 fw-bold text-dark">Fira's Bookstore</span>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className={`nav-link text-dark d-flex align-items-center gap-1 ${styles.navLink}`}>
                            <FaHome size={18} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/books" className={`nav-link text-dark d-flex align-items-center gap-1 ${styles.navLink}`}>
                            <FaBookOpen size={18} />
                            Book
                        </Link>
                    </li>
                    <li>
                        <Link to="/tim" className={`nav-link text-dark d-flex align-items-center gap-1 ${styles.navLink}`}>
                            <FaTeamspeak size={18} />
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/kontak" className={`nav-link text-dark d-flex align-items-center gap-1 ${styles.navLink}`}>
                            <FaUserCircle size={18} />
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-primary me-2">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-primary">
                            Register
                        </button>
                    </Link>
                </div>
            </header>
        </>
    );
}