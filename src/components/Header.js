import React, { Link } from 'react'
import logo from '../img/logo.svg'

const Header = () => {
    return (
        <header>
            <a href="/" className="logo">
                <img src={logo} alt="Plaesant Logo" />
            </a>
            {/* TODO: This section font needs to be looked at */}
            <div className="nav">
                <div className="contact">
                    <a className="phone" href="tel:212.555.5555">212.555.5555</a>
                    <a className="login" href="#">Login</a>
                </div>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </header>
    )
}

export default Header
