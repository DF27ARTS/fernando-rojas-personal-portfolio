import { ProjectType } from "@/assets/projects/projects";
import { lato, latoItalic } from "@/fonts/fonts";
import Image from "next/image";
import GithubIcon from "@/assets/tech-icons/github-icon.svg";

const ProjectCard = ({ name, image, type, live, github }: ProjectType) => {
  return (
    <div className="project-card">
      <Image
        src={image}
        alt={name}
        width="800"
        height="800"
        className="product-img"
      />

      <div className="product-information">
        <h2 className={`product-name ${latoItalic.className}`}>{name}</h2>
        <p className={`product-type ${lato.className}`}>{type}</p>

        <div className="project-btns">
          <a className="product-github-url" href={live} target="_blank">
            <span className={`ancher-placeholder ${lato.className}`}>
              Live Preview
            </span>
            <Image
              className="product-ancher-img"
              src={image}
              alt="Gihub image"
              height="150"
              width="150"
            />
          </a>

          <a className="product-live-url" href={github} target="_blank">
            <span className={`ancher-placeholder ${lato.className}`}>
              Github Code
            </span>
            <Image
              className="product-ancher-img"
              src={GithubIcon.src}
              alt="Gihub image"
              height="150"
              width="150"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
