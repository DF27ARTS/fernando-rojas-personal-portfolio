import DeepSkill from "./DeepSkill.png";
import FourGeeks from "./4Geeks.png";
import { techIconsOnly } from "../tech-icons/tech-info";

type LinkType = {
  text: string;
  icon: string;
  url: string;
}

export type WorkExperienceType = {
  companyName: string;
  companyIcon: string;
  companyUrl: string;
  companyUrlName: string;
  workTitle: string;
  date: string;
  description: string;
  technologies: string[];
  links: LinkType[];
};

export const WorkExperiences: WorkExperienceType[] = [
  {
    companyName: "Deep Skill",
    companyIcon: DeepSkill.src,
    companyUrl: "https://www.deepskill.space/",
    companyUrlName: "deepskill.space",
    workTitle: "PRE-PROFESSIONAL PRACTICE IN SOFTWARE DEVELOPMENT",
    date: "23/10/2023 - 30/11/2023",
    description:
      "Participate in the development of an application that will help pharmacies maintain a more efficient record of all the products and medications they offer.",
    technologies: [
      techIconsOnly.NextJS,
      techIconsOnly.NestJS,
      techIconsOnly.TypeScript,
      techIconsOnly.Tailwind,
      techIconsOnly.Auth0,
      techIconsOnly.MySQL,
    ],
    links: [
      {
        text: "Backend",
        icon: techIconsOnly.Github,
        url: "https://github.com/deep-skill/deep-pharma-api/",
      },
      {
        text: "Frontend",
        icon: techIconsOnly.Github,
        url: "https://github.com/deep-skill/deep-pharma-web/",
      },
    ]
  },
  {
    companyName: "4Geeks",
    companyIcon: FourGeeks.src,
    companyUrl: "https://4geeks.com/",
    companyUrlName: "4geeks.com",
    workTitle: "FREELANCE SOFTWARE TECHNICAL WRITER",
    date: "01/04/2023",
    description: `Write articles on various programming topics in different programming languages and frameworks for the 'How To's' article catalog on 4Geeks.com`,
    technologies: [
      techIconsOnly.HTML,
      techIconsOnly.CSS,
      techIconsOnly.JavaScript,
      techIconsOnly.Python,
      techIconsOnly.ReactJS,
    ],
    links: [
      {
        text: "How To's",
        icon: FourGeeks.src,
        url: "https://4geeks.com/es/how-to/",
      },
      {
        text: "Github",
        icon: techIconsOnly.Github,
        url: "https://github.com/breatheco-de/content/tree/master/src/content/how-to",
      },
    ]
  },
];
