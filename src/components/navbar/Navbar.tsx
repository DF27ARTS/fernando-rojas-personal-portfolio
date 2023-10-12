"use client";

import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {

    const navbarLinksRef = useRef<HTMLUListElement | null>(null);

    const selectPageBtn = (attribute: string) => {
        const navbar = navbarLinksRef.current;
        if (navbar !== null) {
            navbar.querySelector(".selected")?.classList.remove("selected");
            navbar.querySelector(`[btn-attribute=${attribute}]`)?.classList.add("selected");
        }
    }

    return (
        <>
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

            <GetUpButto />
        </>
    )
}


const GetUpButto = () => {
    return ( 
        <div className="get-up-btn-section" >
            <button className="get-up-btn">Slide Up</button>
        </div>
    )
}

export default Navbar;