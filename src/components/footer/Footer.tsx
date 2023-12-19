import { FooterBtns } from "@/assets/footer/footer-btns";
import React from "react";
import FooterBtn from "./FooterBtn";
import { lato, latoItalic } from "@/fonts/fonts";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className={`footer-title ${latoItalic.className}`} translate="no">
        Fullstack Software Developer
      </h3>
      
      <p className={`footer-email ${lato.className}`}>
        diego27fernando72@gmail.com
      </p>

      <p className={`footer-phone ${lato.className}`}>+57 320 207 4828</p>

      <ul className="footer-contact-links">
        {FooterBtns.map((footerBtn, index) => {
          return (
            <FooterBtn
              key={index}
              iconAttribute={footerBtn.iconAttribute}
              href={footerBtn.href}
              svgShape={footerBtn.svgShape}
            />
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
