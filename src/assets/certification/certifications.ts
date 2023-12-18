import DeepSkillCerfification from "./deep-skill-certification.webp";
import FullstackCerfification from "./fullstack-certification.webp";
import JavaCertification from "./java-certification.png";
import EnglishCertification from "./english-certification.png";

export type CentificationType = {
  title: string;
  image: string;
  academy: string;
  date: string;
};

export const certifications: CentificationType[] = [
  {
    title: "Software Development Internship",
    image:DeepSkillCerfification.src,
    academy: "Deep <Skill>",
    date: "23-10-2023  /  30-11-2023",
  },
  {
    title: "Full Stack Web Developer",
    image: FullstackCerfification.src,
    academy: "Henry Academy",
    date: "15-02-2022  /  03-08-2022",
  },
  {
    title: "Java Developer",
    image: JavaCertification.src,
    academy: "Henry Upskilling",
    date: "01-08-2023  /  10-09-2023",
  },
  {
    title: "English C2 Upper Intermediate",
    image: EnglishCertification.src,
    academy: "EF SET",
    date: "11-08-2022",
  },
];
