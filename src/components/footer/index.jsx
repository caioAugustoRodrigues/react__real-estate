import * as React from 'react'
import { Link } from '@reach/router'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__lists row">
                    <ul className="footer__lists__left col-sm-6">
                        <li className="footer__lists__left__item">
                            <Link to="/contactus/">
                                Contact Us
                            </Link>
                        </li>
                        <li className="footer__lists__left__item">
                            <a href="https://www.linkedin.com/in/caio-augusto-rodrigues-pantojo-029288195/">Jobs</a>
                        </li>
                        <li className="footer__lists__left__item">
                            <a href="/">Our Properties</a>
                        </li>
                    </ul>
                    
                    <div className="footer__lists__right col-sm-6">
                        <div className="footer__lists__right col-md-12">
                            <a href="https://www.facebook.com/profile.php?id=100009550068982" className="footer__lists__right__item">
                            <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/c__pantojo" className="footer__lists__right__item">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a> 
                            <a href="#" className="footer__lists__right__item">
                                <i className="fab fa-youtube fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        All rights to their respective owners
                    </p>
                    <h5 className="footer__bottom__copy">
                    &copy; Copyright 2019
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;