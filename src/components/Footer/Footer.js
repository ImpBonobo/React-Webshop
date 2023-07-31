import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="container">
            <div className="footer-container">
                <div>
                    <ul>
                        <li>
                            <h2>Kontaktinfo</h2>
                        </li>
                        <li>
                            <p>78120 Furtwangen</p>
                        </li>
                        <li>
                            <p>Robert-Gerwig-Platz 1</p>
                        </li>
                        <li>
                            <p>Telefon 07723 920 0</p>
                        </li>
                        <li>
                            <p>com@pseudo.de</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <h2>Links</h2>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Registrieren</Link>
                        </li>
                        <li>
                            <Link to="/products">Produkte</Link>
                        </li>
                        <li>
                            <Link to="/orders">Bestellungen</Link>
                        </li>
                        <li>
                            <Link to="/cart">Einkaufswagen</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
