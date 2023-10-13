"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const Navbar = () => {
    const navbarLinksRef = useRef<HTMLUListElement | null>(null);
    const navbarRef = useRef<HTMLElement | null>(null);

    const [toggleMenu, setToggleMenu] = useState(false);

    const selectPageBtn = (attribute: string) => {
        const navbarLinks = navbarLinksRef.current;
        const navbar = navbarRef?.current;

        if (navbar && navbarLinks) {
            navbarLinks.querySelector(".selected")?.classList.remove("selected");
            navbarLinks.querySelector(`[btn-attribute=${attribute}]`)?.classList.add("selected");

            if (toggleMenu) {
                slideMenuOut(navbar);
            }
        }
    }

    const toggleMenuBtn = () => {
        const navbar = navbarRef?.current;

        if (navbar) {
            if (!toggleMenu) slideMenuIn(navbar);
            else slideMenuOut(navbar);
        }
    }

    const slideMenuIn = (navbar: HTMLElement) => {
        const body = document.querySelector("body");
        
        if (navbar && body) {
            body.style.overflowY = "hidden";
            
            navbar.style.display = "flex"
            setTimeout(() => navbar?.style.setProperty("--_menu-translate-right", "0"), 0);
        }
        setToggleMenu(true);
    }

    const slideMenuOut = (navbar: HTMLElement) => {
        const body = document.querySelector("body");

        if (navbar && body) {
            body.style.overflowY = "auto";

            const animationDuration = Number(getComputedStyle(navbar).getPropertyValue("--_nav_transition-duration").replace("ms", ""));
            navbar?.style.setProperty("--_menu-translate-right", "100")

            setTimeout(() => {
                navbar.style.display = "none"
            }, animationDuration)
        }
        setToggleMenu(false);
    }

    return (
        <>
            <svg onClick={toggleMenuBtn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="navbar-menu-icon" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg>
            
            <nav ref={navbarRef} className="navbar">
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
                    
                    <li className="navbar-link" btn-attribute="contact">
                        <Link onClick={() => selectPageBtn("contact")} link-attribute="contact" href="/contact">
                            CONTACT
                        </Link>
                    </li>

                    <li className="navbar-link" btn-attribute="studies">
                        <Link onClick={() => selectPageBtn("studies")} link-attribute="studies" href="/studies">
                            STUDIES
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* <GetUpButto /> */}
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