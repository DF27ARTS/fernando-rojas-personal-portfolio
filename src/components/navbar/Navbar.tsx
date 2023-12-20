"use client";

import { lato } from "@/fonts/fonts";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import SlideUpBtn from "@/assets/tech-icons/slide-up-icon.svg";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const slideUpBtnRef = useRef<HTMLButtonElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const currentScrollTop = Math.ceil(document.documentElement.scrollTop);

      if (navbarRef.current) {
        const isHidden = navbarRef.current.classList.contains("hide");
        
        if (currentScrollTop > lastScrollTop && !isHidden) {
          navbarRef.current.classList.add("hide");
        } else if (currentScrollTop < lastScrollTop) {
          navbarRef.current.classList.remove("hide");
        }
        setLastScrollTop(currentScrollTop);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollTop]);

  return (
    <nav ref={navbarRef} className="navbar">
      <ul className="navbar-links">
        <li
          className={`navbar-link ${pathname === "/home" ? "selected" : ""}`}
          btn-attribute="home"
        >
          <Link
            className={`link ${lato.className}`}
            link-attribute="home"
            href="/home"
          >
            HOME PAGE
          </Link>
        </li>

        <li
          className={`navbar-link ${
            pathname === "/projects" ? "selected" : ""
          }`}
          btn-attribute="projects"
        >
          <Link
            className={`link ${lato.className}`}
            link-attribute="projects"
            href="/projects"
          >
            PROJECTS
          </Link>
        </li>

        <li
          className={`navbar-link ${pathname === "/studies" ? "selected" : ""}`}
          btn-attribute="studies"
        >
          <Link
            className={`link ${lato.className}`}
            link-attribute="studies"
            href="/studies"
          >
            STUDIES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
