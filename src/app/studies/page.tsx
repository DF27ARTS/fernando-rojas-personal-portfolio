import CertificationCard from "@/components/CertificationCard";

const certifications = [
  {
    title: "Full Stack Web Developer",
    image:
      "https://res.cloudinary.com/dleo66u17/image/upload/v1701992834/Fullstack_Sertification_hrtpcz.png",
    description: [
      "I am proud to share my certificate as <strong>Full Stack Web Developer</strong> obtained in the Henry Academy",
      "This certificate proves that I have learned the skill of Javascript, HTML, CSS, React, Redux, Node, and SQL, whichare assential for building modern and dinamic web applications",
      "I learned a lot from the course, which was taught by experienced instructors and mentors",
      "I also had the opportunity to work on real-world projects and collaborate with other students",
      "I am very gratefull for this achivement",
    ],
  },
  {
    title: "Java Developer",
    image:
      "https://res.cloudinary.com/dleo66u17/image/upload/v1701992836/Java_Sertification_imv4lv.png",
    description: [
      "I'm happy to show my Java Upskilling certificate obtained in the Henry academy",
      "This certificate is a wonderfull achivement for me, I enjoy the course a lot and I gained a lof of knowledge from it",
      "The course was delivered by a qualified intructor who taught us some of the most important concepts and tecniques like the Java Fundamentals, JDBC, and the DAO pattern",
      "This certificate is a great achievement for me and my career",
    ],
  },
];

const Studies = () => {
  return (
    <section className="studies-container">
      {certifications.map((certification) => {
        return (
          <CertificationCard
            title={certification.title}
            image={certification.image}
            description={certification.description}
          />
        );
      })}
    </section>
  );
};

export default Studies;
