"use client";

import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {

    const navbarLinksRef = useRef();

    const selectPageBtn = (attribute: string) => {
        const currentBtn = navbarLinksRef.current.querySelector(".selected")
        const selectedBtn = navbarLinksRef.current.querySelector(`[btn-attribute=${attribute}]`)

        currentBtn.classList.remove("selected");
        selectedBtn.classList.add("selected");
    }

    return (
        <nav className="navbar">
            <ul ref={navbarLinksRef} className="navbar-links">
                <Link onClick={() => selectPageBtn("home")} btn-attribute="home" nav-link="HOME PAGE" href="/home" className="navbar-link selected">
                    <div className="btn-scene">
                        <div aria-hidden="true" nav-link="HOME PAGE" className="front"></div>
                        <div aria-hidden="true" nav-link="HOME PAGE" className="bottom"></div>
                    </div>
                </Link>

                <Link onClick={() => selectPageBtn("projects")} btn-attribute="projects" nav-link="PROJECTS" href="/projects" className="navbar-link">
                    <div className="btn-scene">
                        <div aria-hidden="true" nav-link="PROJECTS" className="front"></div>
                        <div aria-hidden="true" nav-link="PROJECTS" className="bottom"></div>
                    </div>
                </Link>

                <Link onClick={() => selectPageBtn("studies")} btn-attribute="studies" nav-link="STUDIES" href="/studies" className="navbar-link">
                    <div className="btn-scene">
                        <div aria-hidden="true" nav-link="STUDIES" className="front"></div>
                        <div aria-hidden="true" nav-link="STUDIES" className="bottom"></div>
                    </div>
                </Link>
                
                <Link onClick={() => selectPageBtn("contact")} btn-attribute="contact" nav-link="CONTACT" href="/contact" className="navbar-link">
                    <div className="btn-scene">
                        <div aria-hidden="true" nav-link="CONTACT" className="front"></div>
                        <div aria-hidden="true" nav-link="CONTACT" className="bottom"></div>
                    </div>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;