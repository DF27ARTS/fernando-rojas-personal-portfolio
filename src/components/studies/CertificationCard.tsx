import { CentificationType } from "@/assets/certification/certifications";
import { lato, latoItalic } from "@/fonts/fonts";
import placehorder from "@/assets/placehorder.png";
import Image from "next/image";
import React from "react";

const CertificationCard = ({
  title,
  image,
  academy,
  date,
}: Readonly<CentificationType>) => {
  return (
    <div className="certification-card">
      <div className="image-container">
        <Image
          // placeholder="blur"
          // blurDataURL={placehorder.src}
          className="certification-image"
          src={image}
          alt={title}
          width="1000"
          height="1000"
        />
      </div>

      <h2 className={`academy ${latoItalic.className}`}>{academy}</h2>

      <div className="info-container">
        <span className={`info-container__title ${lato.className}`}>
          {title}
        </span>
        <span className={`info-container__date ${lato.className}`}>{date}</span>
      </div>
    </div>
  );
};

export default CertificationCard;
