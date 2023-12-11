import HTML from "./html-icon.svg";
import CSS from "./css-icon.svg";
import SCSS from "./scss-icon.svg";
import NextJS from "./nextjs-icon.svg";
import ReactJS from "./reactjs-icon.svg";
import ReduxJS from "./reduxjs-icon.svg";
import JavaScript from "./javascript-icon.svg";
import TypeScript from "./typescript-icon.svg";
import NodeJS from "./nodejs-icon.svg";
import ExpressJS from "./express-icon.svg";
import Python from "./python-icon.svg";
import Tailwind from "./tailwind-icon.svg";
import Java from "./java-icon.svg";
import NestJS from "./nestjs-icon.svg";
import Auth0 from "./auth0-icon.svg";
import SequelizeJS from "./sequelize-icon.svg";
import PostgreSQL from "./postgresql-icon.svg";
import MySQL from "./mysql-icon.svg";
import Git from "./git-icon.svg";
import Github from "./github-icon.svg";

export type TechCardTypes = {
  name: string;
  image: string;
};

export const techInformation: TechCardTypes[] = [
  {
    name: "HTML",
    image: HTML.src,
  },
  {
    name: "CSS",
    image: CSS.src,
  },
  {
    name: "SCSS",
    image: SCSS.src,
  },
  {
    name: "Next.js",
    image: NextJS.src,
  },
  {
    name: "React.js",
    image: ReactJS.src,
  },
  {
    name: "Redux.js",
    image: ReduxJS.src,
  },
  {
    name: "JavaScript",
    image: JavaScript.src,
  },
  {
    name: "TypeScript",
    image: TypeScript.src,
  },
  {
    name: "Tailwind",
    image: Tailwind.src,
  },
  {
    name: "Node.js",
    image: NodeJS.src,
  },
  {
    name: "Express.js",
    image: ExpressJS.src,
  },
  {
    name: "Python",
    image: Python.src,
  },
  {
    name: "Java",
    image: Java.src,
  },
  {
    name: "Nest.js",
    image: NestJS.src,
  },
  {
    name: "Auth0",
    image: Auth0.src,
  },
  {
    name: "Sequelize.js",
    image: SequelizeJS.src,
  },
  {
    name: "PostgreSQL",
    image: PostgreSQL.src,
  },
  {
    name: "MySQL",
    image: MySQL.src,
  },
  {
    name: "Git",
    image: Git.src,
  },
  {
    name: "Github",
    image: Github.src,
  },
];
