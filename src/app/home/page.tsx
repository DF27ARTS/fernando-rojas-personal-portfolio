import GridCard from "@/components/GridCard";
import FullName from "@/components/home-page/home-page-header/FullName";
import Profetion from "@/components/home-page/home-page-header/Profetion";
import ProfilePicture from "@/components/home-page/home-page-header/ProfilePicture";

import frontEndMentor from "@/assets/frontend-mentor-img.jpeg"
import codepen from "@/assets/codepen.png"
import emailMe from "@/assets/email-me-img.jpg"
import studies from "@/assets/studies-img.jpg"

const HomePage = () => {
  return (
    <>
      <section className="home-header">
        <div>
          <ProfilePicture />
        </div>
        <div>
          <div className="profile-title">
            <FullName />
            <Profetion />
          </div>
        </div>
      </section>

      <section className="table-of-content">
        <h2 className="table-of-content__title">
          THE NEXT IS THE TABLE OF CONTENTS
        </h2>

        <div className="table-of-content__grid-content">
          <GridCard placeHolder="FRONTEND MENTOR" image={frontEndMentor.src} gridArea="frontend-mentor" />
          <GridCard placeHolder="CODEPEN" image={codepen.src} gridArea="codepen" />
          <GridCard placeHolder="STUDIES" image={studies.src} gridArea="studies" />
          <GridCard placeHolder="SEND ME AN EMAIL" image={emailMe.src} gridArea="email-me" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
