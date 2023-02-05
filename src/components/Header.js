import React from "react";
import { GoListOrdered } from "react-icons/go";

const Header = () => {
    return (
        <header>
            <a className="header-logo">
                <GoListOrdered className="header-logo-img"/>
                <span className="header-text">Hande Inputs</span>
            </a>
            <nav className="nav">
                <a className="nav-item" href="#">Code</a>
                <a className="nav-item" href="#">Test</a>
                <a className="nav-item" href="#">Docs</a>
            </nav>
        </header>
    )
}

export default Header;