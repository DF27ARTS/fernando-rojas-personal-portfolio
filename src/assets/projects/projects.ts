import SynnetImg from "./synnet-img.png";
import JobHunterImg from "./job-hunter-img.png";
import TodoAppImg from "./todo-app-img.png";
import ChatAppImg from "./chat-app-img.jpeg";
import EcommerceImg from "./e-commerce-img.jpeg";
import PaperScissorsImg from "./paper-scissors-img.png";
import CountdownImg from "./count-down-img.png";
import MultiStepFormImg from "./multi-form-img.jpeg";

import { techIconsOnly } from "@/assets/tech-icons/tech-info.ts";

export type ProjectType = {
  name: string;
  image: string;
  type: string;
  live: string;
  github: string;
  technologies?: string[];
};

export const SoftwareProjects: ProjectType[] = [
  {
    name: "Synnet",
    image: SynnetImg.src,
    type: "Accademy Grupal Project",
    live: "https://proyecto-final-rho-three.vercel.app/",
    github: "https://github.com/Nicrosi/Proyecto-Final",
    technologies: [
      techIconsOnly.HTML,
      techIconsOnly.CSS,
      techIconsOnly.JavaScript,
      techIconsOnly.ReactJS,
      techIconsOnly.ReduxJS,
      techIconsOnly.NodeJS,
      techIconsOnly.ExpressJS,
      techIconsOnly.PostgreSQL,
    ]
  },
  {
    name: "Job Hunter",
    image: JobHunterImg.src,
    type: "Personal Project",
    live: "http://gallery-front-288a.vercel.app/",
    github: "https://github.com/DF27ARTS/Job-Hunter",
  },
  {
    name: "Todo App",
    type: "Frontend Mentor Challenge",
    image: TodoAppImg.src,
    live: "https://todo-app-mentor-challenge.vercel.app/",
    github: "https://github.com/DF27ARTS/Todo_App_Mentor_Challenge",
  },
  {
    name: "Chat App",
    image: ChatAppImg.src,
    type: "Frontend Mentor Challenge",
    live: "https://df27arts.github.io/Chat_App_Illustration_Mentor_Challenge/",
    github:
      "https://github.com/DF27ARTS/Chat_App_Illustration_Mentor_Challenge",
  },
  {
    name: "Ecommerce",
    image: EcommerceImg.src,
    type: "Frontend Mentor Challenge",
    live: "https://df27arts.github.io/E-commerce-product-page/",
    github: "https://github.com/DF27ARTS/E-commerce-product-page",
  },
  {
    name: "Rock Paper Scissors",
    image: PaperScissorsImg.src,
    type: "Frontend Mentor Challenge",
    live: "https://df27arts.github.io/Rock_Paper_Scissors_Mentor_Challenge/",
    github: "https://github.com/DF27ARTS/Rock_Paper_Scissors_Mentor_Challenge",
  },
  {
    name: "Launch Countdown",
    image: CountdownImg.src,
    type: "Frontend Mentor Challenge",
    live: "https://df27arts.github.io/Launch_count_down_challenge/",
    github: "https://github.com/DF27ARTS/Launch_count_down_challenge",
  },
  {
    name: "Multi Step Form",
    image: MultiStepFormImg.src,
    type: "Frontend Mentor Challenge",
    live: "https://df27arts.github.io/Multi_Step_Form_Challenge_Mentor/",
    github: "https://github.com/DF27ARTS/Multi_Step_Form_Challenge_Mentor",
  },
];
