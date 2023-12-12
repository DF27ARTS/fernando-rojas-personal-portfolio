"use client";

import { lato } from "@/fonts/fonts";
import Link from "next/link";
import { useCallback, useRef } from "react";
import SlideUpBtn from "@/assets/tech-icons/slide-up-icon.svg";
import Image from "next/image";

const Navbar = () => {
  const navbarLinksRef = useRef<HTMLUListElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);

  const slideUpBtn = useRef<HTMLButtonElement | null>(null);

  const slideUp = () => {
    if (slideUpBtn.current) {
      console.log("Button: ", slideUpBtn.current);
      slideUpBtn.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const selectPageBtn = (attribute: string) => {
    const navbarLinks = navbarLinksRef.current;
    const navbar = navbarRef?.current;

    if (navbar && navbarLinks) {
      navbarLinks.querySelector(".selected")?.classList.remove("selected");
      navbarLinks
        .querySelector(`[btn-attribute=${attribute}]`)
        ?.classList.add("selected");
    }
  };

  return (
    <nav ref={navbarRef} className="navbar">
      <ul ref={navbarLinksRef} className="navbar-links">
        <li className="navbar-link selected" btn-attribute="home">
          <Link
            className={lato.className}
            onClick={() => selectPageBtn("home")}
            link-attribute="home"
            href="/home"
          >
            HOME PAGE
          </Link>
        </li>

        <li className="navbar-link" btn-attribute="projects">
          <Link
            className={lato.className}
            onClick={() => selectPageBtn("projects")}
            link-attribute="projects"
            href="/projects"
          >
            PROJECTS
          </Link>
        </li>

        <li className="navbar-link" btn-attribute="contact">
          <Link
            className={lato.className}
            onClick={() => selectPageBtn("contact")}
            link-attribute="contact"
            href="/contact"
          >
            CONTACT
          </Link>
        </li>

        <li className="navbar-link" btn-attribute="studies">
          <Link
            className={lato.className}
            onClick={() => selectPageBtn("studies")}
            link-attribute="studies"
            href="/studies"
          >
            STUDIES
          </Link>
        </li>
      </ul>

      <button
        onClick={() => slideUp()}
        ref={slideUpBtn}
        className={`slide-up-btn visible ${lato.className}`}
      >
        <span className="slide-up-text">Slide Up</span>
        <Image
          src={SlideUpBtn.src}
          alt="Slide up button"
          height="100"
          width="100"
          className="slice-up-btn-img"
        />
      </button>
    </nav>
  );
};

export default Navbar;
