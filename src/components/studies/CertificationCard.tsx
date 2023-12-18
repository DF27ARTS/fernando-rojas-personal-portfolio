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
      <Image
        className="certification-image"
        src={image}
        alt={title}
        width="1500"
        height="1500"
      />

      <div className="card-information-container">
        <h2 className={`academy ${latoItalic.className}`}>{academy}</h2>

        <span className={`info-container__title ${lato.className}`}>
          {title}
        </span>

        <span className={`info-container__date ${lato.className}`}>{date}</span>
      </div>
    </div>
  );
};

export default CertificationCard;
