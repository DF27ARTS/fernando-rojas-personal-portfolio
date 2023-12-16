import FrontEndMentor from "./frontend-mentor-img.jpeg";
import Codepen from "./codepen.png";
import Projects from "../projects/todo-app-img.png";
import Studies from "./studies-img.jpg";

export type GridCardTypes = {
  gridArea: string;
  image: string;
  placeHolder: string;
  target: "_blank" | undefined;
  url: string;
};

export const gridTableCards: GridCardTypes[] = [
  {
    placeHolder: "FRONTEND MENTOR",
    image: FrontEndMentor.src,
    gridArea: "cell-one",
    target: "_blank",
    url: "https://www.frontendmentor.io/profile/DF27ARTS",
  },
  {
    placeHolder: "CODEPEN",
    image: Codepen.src,
    gridArea: "cell-two",
    target: "_blank",
    url: "https://codepen.io/DF27ARTS",
  },
  {
    placeHolder: "STUDIES",
    image: Studies.src,
    gridArea: "cell-three",
    target: undefined,
    url: "/studies",
  },
  {
    placeHolder: "PROJECTS",
    image: Projects.src,
    gridArea: "cell-four",
    target: undefined,
    url: "/projects",
  },
];
