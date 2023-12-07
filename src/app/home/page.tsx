import GridCard from "@/components/GridCard";
import FullName from "@/components/home-page/home-page-header/FullName";
import Profetion from "@/components/home-page/home-page-header/Profetion";
import ProfilePicture from "@/components/home-page/home-page-header/ProfilePicture";

import frontEndMentor from "@/assets/frontend-mentor-img.jpeg";
import codepen from "@/assets/codepen.png";
import emailMe from "@/assets/email-me-img.jpg";
import studies from "@/assets/studies-img.jpg";

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
          SOME <span className="word-one">OF</span>{" "}
          <span className="word-two">MY</span> WORK
        </h2>

        <div className="table-of-content__grid-content">
          <GridCard
            placeHolder="FRONTEND MENTOR"
            image={frontEndMentor.src}
            gridArea="cell-one"
          />
          <GridCard
            placeHolder="CODEPEN"
            image={codepen.src}
            gridArea="cell-two"
          />
          <GridCard
            placeHolder="STUDIES"
            image={studies.src}
            gridArea="cell-three"
          />
          <GridCard
            placeHolder="SEND ME AN EMAIL"
            image={emailMe.src}
            gridArea="cell-four"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
