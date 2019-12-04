import * as React from 'react'
import RealLogo from '../logo'
import { Link } from '@reach/router'

function NavBar() {
    return (
        <nav className="nav shadow-sm">
            <div className="container">
                <Link className="Link" to="/">
                    <span className="fas fa-chevron-left"></span>
                    <RealLogo />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;