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

type TechIcons = {
  HTML: string;
  CSS: string;
  SCSS: string;
  NextJS: string;
  ReactJS: string;
  ReduxJS: string;
  JavaScript: string;
  TypeScript: string;
  Tailwind: string;
  NodeJS: string;
  ExpressJS: string;
  Python: string;
  Java: string;
  NestJS: string;
  Auth0: string;
  SequelizeJS: string;
  PostgreSQL: string;
  MySQL: string;
  Git: string;
  Github: string;
};

export const techIconsOnly: TechIcons = {
  HTML: HTML.src,
  CSS: CSS.src,
  SCSS: SCSS.src,
  NextJS: NextJS.src,
  ReactJS: ReactJS.src,
  ReduxJS: ReduxJS.src,
  JavaScript: JavaScript.src,
  TypeScript: TypeScript.src,
  Tailwind: Tailwind.src,
  NodeJS: NodeJS.src,
  ExpressJS: ExpressJS.src,
  Python: Python.src,
  Java: Java.src,
  NestJS: NestJS.src,
  Auth0: Auth0.src,
  SequelizeJS: SequelizeJS.src,
  PostgreSQL: PostgreSQL.src,
  MySQL: MySQL.src,
  Git: Git.src,
  Github: Github.src,
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
