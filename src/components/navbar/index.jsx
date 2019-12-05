import * as React from 'react'
import RealLogo from '../logo'
import { Link } from '@reach/router'

function NavBar() {
    return (
        <nav className="nav shadow-sm">
            <Link className="Link" to="/">
                <span className="fas fa-chevron-left" />
                <RealLogo />
            </Link>
            <Link className="Link" to="/">
                <span className="fas fa-times" />
            </Link>
        </nav>
    )
}

export default NavBar;