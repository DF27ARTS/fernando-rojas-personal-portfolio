import { WorkExperienceType } from "@/assets/work-experience/work-experience";
import { lato, latoItalic } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";

const WorkExperience = ({
  companyName,
  companyIcon,
  companyUrl,
  companyUrlName,
  workTitle,
  date,
  description,
}: Readonly<WorkExperienceType>) => {
  return (
    <div className="experience-card">
      <div className="experience-list-dot"></div>

      <div className="company-icon-contaner">
        <Image
          src={companyIcon}
          alt={companyName}
          width="200"
          height="200"
          className="company-icon"
        />
      </div>

      <div className="company-information">
        <h2 className={`company-name ${latoItalic.className}`} translate="no">
          {companyName}
        </h2>
        <p className={`work-period ${lato.className}`}>
          {date}
        </p>
        <a
          href={companyUrl}
          target="_blank"
          className={`company-url ${lato.className}`}
          translate="no"
        >
          {companyUrlName}
        </a>
      </div>

      <div className="work-description">
        <h3 className={`work-description-title ${lato.className}`}>
          {workTitle}
        </h3>

        <p className={`work-experience-description ${lato.className}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
