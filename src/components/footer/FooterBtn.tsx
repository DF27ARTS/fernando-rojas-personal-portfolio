import { FooterBtnType } from "@/assets/footer/footer-btns";
import Link from "next/link";

const FooterBtn = ({ iconAttribute, href, svgShape }: FooterBtnType) => {
  return (
    <Link
      className="contact-link"
      icon-attribute={iconAttribute}
      href={href}
      // target="_blank"
    >
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d={svgShape} />
        </svg>
      </div>
    </Link>
  );
};

export default FooterBtn;
