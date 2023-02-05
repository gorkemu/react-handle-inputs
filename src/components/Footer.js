import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>gorkemu</p>
            <a className="github-link" href="https://github.com/gorkemu">
                <FaGithub />
            </a>
        </footer>
    )
}

export default Footer;