import { SoftwareProjects } from "@/assets/projects/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects-container">
      {SoftwareProjects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            image={project.image}
            type={project.type}
            live={project.live}
            github={project.github}
          />
        );
      })}
    </div>
  );
};

export default Projects;
