"use client";

import GridCard from "@/components/home/GridCard";
import ProfilePicture from "@/components/home/ProfilePicture";

import { lato } from "@/fonts/fonts";
import TechnologyCard from "@/components/home/TechnologyCard";
import { techInformation } from "@/assets/tech-icons/tech-info";
import { gridTableCards } from "@/assets/home-grid-table/grid-table";
import { WorkExperiences } from "@/assets/work-experience/work-experience";
import WorkExperience from "@/components/home/WorkExperience";
import ContactForm from "@/components/home/ContactForm";
import TypingText from "@/components/home/TypingText";


const HomePage = () => {
  return (
    <>
      <section className="home-header">
        <div>
          <ProfilePicture />
        </div>
        <div>
          <div className="profile-title">

            <h1 className={`profile-name ${lato.className}`}>
              FERNANDO ROJAS
            </h1>

            <TypingText />

            <p className={`profile-email ${lato.className}`} >
              diego27fernando72@gmail.com
            </p>
            <p className={`profile-phone ${lato.className}`} >
              +57 320 207 4828
            </p>
          </div>
        </div>
      </section>

      <section className="work-experience">
        <div className="cards-container">
          {WorkExperiences.map((experience, index) => {
            return (
              <WorkExperience
                key={index}
                companyName={experience.companyName}
                companyIcon={experience.companyIcon}
                companyUrl={experience.companyUrl}
                companyUrlName={experience.companyUrlName}
                workTitle={experience.workTitle}
                date={experience.date}
                description={experience.description} 
                technologies={experience.technologies} 
                links={experience.links}              
              />
            );
          })}
        </div>

        <h2 className={`work-experience-title ${lato.className}`} translate="no">
          MY <span translate="no">WORK</span> EXPERIENCE
        </h2>
      </section>

      <section className="table-of-content">
        <h2 className={`table-of-content__title ${lato.className}`} translate="no">
          SOME 
          <span className="word-one" translate="no">OF</span>
          <span className="word-two" translate="no">MY</span> 
          WORK
        </h2>

        <div className="table-of-content__grid-content">
          {gridTableCards.map((card, index) => {
            return (
              <GridCard
                key={index}
                placeHolder={card.placeHolder}
                image={card.image}
                gridArea={card.gridArea}
                target={card.target}
                url={card.url}
              />
            );
          })}
        </div>
      </section>

      <section className="tech-animation-container">
        <h2 className={`tech-container-title ${lato.className}`}>
          MY <span className="fantacy-text">TECH</span> STACK
        </h2>
        <div className="tech-cards-container">
          {techInformation.map((tech, index) => {
            return (
              <TechnologyCard key={index} image={tech.image} name={tech.name} />
            );
          })}
        </div>
      </section>

      <section className="contact-form-container">
        <h2 className={`contact-form-message ${lato.className}`}>
          IF YOU <span className="gradient-text" >LIKE</span> MY WORK
        </h2>

        <ContactForm />
      </section>
    </>
  );
};

export default HomePage;
