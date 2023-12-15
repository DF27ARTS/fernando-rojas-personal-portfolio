"use client";

import { SoftwareProjects } from "@/assets/projects/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects-container">
      {SoftwareProjects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            type={project.type}
            live={project.live}
            github={project.github}
            technologies={project.technologies ? project.technologies : null}
          />
        );
      })}
    </div>
  );
};

export default Projects;
