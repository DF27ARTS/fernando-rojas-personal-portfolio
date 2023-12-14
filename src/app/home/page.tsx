import GridCard from "@/components/GridCard";
import Profetion from "@/components/home-page/home-page-header/Profetion";
import ProfilePicture from "@/components/home-page/home-page-header/ProfilePicture";

import frontEndMentor from "@/assets/frontend-mentor-img.jpeg";
import codepen from "@/assets/codepen.png";
import emailMe from "@/assets/email-me-img.jpg";
import studies from "@/assets/studies-img.jpg";
import { lato, playfairDisplay } from "@/fonts/fonts";
import TechnologyCard from "@/components/TechnologyCard";
import { techInformation } from "@/assets/tech-icons/tech-info";

export type GridCardTypes = {
  gridArea: string;
  image: string;
  placeHolder: string;
  target: "_blank" | undefined;
};

const gridTableCards: GridCardTypes[] = [
  {
    placeHolder: "FRONTEND MENTOR",
    image: frontEndMentor.src,
    gridArea: "cell-one",
    target: "_blank",
  },
  {
    placeHolder: "CODEPEN",
    image: codepen.src,
    gridArea: "cell-two",
    target: "_blank",
  },
  {
    placeHolder: "STUDIES",
    image: studies.src,
    gridArea: "cell-three",
    target: undefined,
  },
  {
    placeHolder: "SEND ME AN EMAIL",
    image: emailMe.src,
    gridArea: "cell-four",
    target: undefined,
  },
]

const HomePage = () => {
  return (
    <>
      <section className="home-header">
        <div>
          <ProfilePicture />
        </div>
        <div>
          <div className="profile-title">
            <h1 className={`profile-name ${playfairDisplay.className}`}>
              FERNANDO ROJAS
            </h1>
            <Profetion />
          </div>
        </div>
      </section>

      <section className="table-of-content">
        <h2 className={`table-of-content__title ${lato.className}`}>
          SOME <span className="word-one">OF</span>{" "}
          <span className="word-two">MY</span> WORK
        </h2>

        <div className="table-of-content__grid-content">
          {
            gridTableCards.map((card, index) => {
              return (
                <GridCard
                  placeHolder={card.placeHolder}
                  image={card.image}
                  gridArea={card.gridArea}
                  target={card.target}
                />
              )
            })
          }
        </div>
      </section>

      <div className="tech-animation-container">
        <h3 className={`tech-container-title ${lato.className}`}>
          MY <span className="fantacy-text">TECH</span> STACH
        </h3>
        <div className="tech-cards-container">
          {techInformation.map((tech, index) => {
            return (
              <TechnologyCard key={index} image={tech.image} name={tech.name} />
            );
          })}
        </div>
      </div>

      {/* <ContactForm /> */}
    </>
  );
};

export default HomePage;
