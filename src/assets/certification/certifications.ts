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
    date: "2023-10-23 / 2023-11-30",
  },
  {
    title: "Full Stack Web Developer",
    image: FullstackCerfification.src,
    academy: "Henry Academy",
    date: "2022-02-15 / 2022-08-03",
  },
  {
    title: "Java Developer",
    image: JavaCertification.src,
    academy: "Henry Upskilling",
    date: "2023-08-01 / 2023-09-10",
  },
  {
    title: "English C2 Upper Intermediate",
    image: EnglishCertification.src,
    academy: "EF SET",
    date: "2022-08-11",
  },
];
