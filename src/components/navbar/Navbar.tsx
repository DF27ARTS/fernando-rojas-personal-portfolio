"use client";

import { lato } from "@/fonts/fonts";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import SlideUpBtn from "@/assets/tech-icons/slide-up-icon.svg";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const slideUpBtnRef = useRef<HTMLButtonElement | null>(null);

  const navbarRef = useCallback((node: HTMLElement) => {
    if (node) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            slideUpBtnRef.current?.classList.toggle(
              "visible",
              !entry.isIntersecting
            );
          });
        },
        {
          rootMargin: `${window.innerHeight}px`,
          threshold: 1,
        }
      );

      observer.observe(node);
    }
  }, []);

  const slideUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      <button
        onClick={() => slideUp()}
        ref={slideUpBtnRef}
        className={`slide-up-btn ${lato.className}`}
      >
        <span className={`slide-up-text ${lato.className}`}>Slide Up</span>

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
