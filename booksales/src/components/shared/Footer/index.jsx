import { Link } from "react-router";
import styles from "../../shared/navigation.module.css";
import { FaBookOpen, FaUserCircle, FaHome, FaTeamspeak  } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4 border-top">
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

                    <div className="d-flex justify-content-between align-items-center">

                        <div className="d-flex align-items-center">
                            <a href="/" className="me-2 text-body-secondary text-decoration-none lh-1" aria-label="Fira's Bookstore">
                                <img src="/images/logo booksales.png" alt="Logo Booksales" width="40" height="42" className="me-2" />
                            </a>
                            <span className="text-body-secondary">
                                &copy; <AzhariArifi></AzhariArifi>- 2025, Universitas Trunojoyo Madura
                            </span>
                        </div>

                        <ul className="nav list-unstyled d-flex mb-0">
                            <li className="ms-3">
                                <a className="text-body-secondary" href="https://www.instagram.com/nfacademy_id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    aria-label="Instagram">
                                    <img src="/images/instagram.png" alt="Logo Instagram" width="30" height="30" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-body-secondary" href="https://www.tiktok.com/@nfacademy_id?_t=ZS-8vQAWaUOSna&_r=1" aria-label="Tiktok">
                                    <img src="/images/tiktok.png" alt="Logo Tiktok" width="30" height="30" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-body-secondary" href="https://nfacademy.id/" aria-label="Website">
                                    <img src="/images/www.png" alt="Logo Website" width="30" height="30" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}