import * as React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__lists row">
                <ul className="footer__lists__left col-6">
                    <li className="footer__lists__left__item">
                        <a href="">About Us</a>
                    </li>
                    <li className="footer__lists__left__item">
                        <a href="/">Our Properties</a>
                    </li>
                    <li className="footer__lists__left__item">
                        <a href="">Legal</a>
                    </li>
                </ul>
                <div className="footer__lists__right col-6">
                    <a href="#" className="footer__lists__right__item">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" className="footer__lists__right__item">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#" className="footer__lists__right__item">
                        <i className="fab fa-youtube fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="footer__bottom">
                &copy; Copyright 2019
            </div>
            </div>
        </footer>
    )
}

export default Footer;