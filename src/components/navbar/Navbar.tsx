"use client";

import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {

    const navbarLinksRef = useRef<HTMLUListElement | null>(null);

    const selectPageBtn = (attribute: string) => {
        const currentBtn = navbarLinksRef.current.querySelector(".selected")
        const selectedBtn = navbarLinksRef.current.querySelector(`[btn-attribute=${attribute}]`)

        currentBtn.classList.remove("selected");
        selectedBtn.classList.add("selected");
    }

    return (
        <nav className="navbar">
            <ul ref={navbarLinksRef} className="navbar-links">
                <li className="navbar-link selected" btn-attribute="home">
                    <Link onClick={() => selectPageBtn("home")} link-attribute="home" href="/home">
                        HOME PAGE
                    </Link>
                </li>

                <li className="navbar-link" btn-attribute="projects">
                    <Link onClick={() => selectPageBtn("projects")} link-attribute="projects" href="/projects">
                        PROJECTS
                    </Link>
                </li>

                <li className="navbar-link" btn-attribute="studies">
                    <Link onClick={() => selectPageBtn("studies")} link-attribute="studies" href="/studies">
                        STUDIES
                    </Link>
                </li>
                
                <li className="navbar-link" btn-attribute="contact">
                    <Link onClick={() => selectPageBtn("contact")} link-attribute="contact" href="/contact">
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;