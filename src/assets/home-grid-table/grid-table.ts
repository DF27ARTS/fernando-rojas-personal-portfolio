
import frontEndMentor from "@/assets/frontend-mentor-img.jpeg";
import codepen from "@/assets/codepen.png";
import emailMe from "@/assets/email-me-img.jpg";
import studies from "@/assets/studies-img.jpg";

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
    image: frontEndMentor.src,
    gridArea: "cell-one",
    target: "_blank",
    url: "https://www.frontendmentor.io/profile/DF27ARTS",
  },
  {
    placeHolder: "CODEPEN",
    image: codepen.src,
    gridArea: "cell-two",
    target: "_blank",
    url: "https://codepen.io/DF27ARTS",
  },
  {
    placeHolder: "STUDIES",
    image: studies.src,
    gridArea: "cell-three",
    target: undefined,
    url: "/studies",
  },
  {
    placeHolder: "SEND ME AN EMAIL",
    image: emailMe.src,
    gridArea: "cell-four",
    target: undefined,
    url: "#",
  },
];