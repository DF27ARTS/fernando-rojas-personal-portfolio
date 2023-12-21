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
  technologies,
  links,
}: Readonly<WorkExperienceType>) => {
  return (
    <div className="experience-card">
      <div className="list-dot"></div>

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

        <div className="work-experience-tech-container">
          {
            technologies.map((tech, index) => {
              return (
                <Image 
                  key={index}
                  height="100"
                  width="100"
                  src={tech}
                  alt="Work technology icon"
                  className="work-teck-icon"
                />
              )
            }) 
          }
        </div>

        <div className="work-experience-link-container">
          {
            links.map((link, index) => {
              return (
                <a key={`${link.text}-${index}`} href={link.url} target="_blank" className="link">
                  <Image 
                    height="100"
                    width="100"
                    src={link.icon}
                    alt={link.text}
                    className="link-icon"
                  />
                  <span className={`link-text ${lato.className}`}>{link.text}</span>
                </a> 
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
