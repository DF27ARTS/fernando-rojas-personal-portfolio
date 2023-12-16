import DeepSkill from "./DeepSkill.png";
import FourGeeks from "./4Geeks.png";

export type WorkExperienceType = {
  companyName: string;
  companyIcon: string;
  companyUrl: string;
  companyUrlName: string;
  workTitle: string;
  date: string;
  description: string;
};

export const WorkExperiences: WorkExperienceType[] = [
  {
    companyName: "Deep Skill",
    companyIcon: DeepSkill.src,
    companyUrl: "https://www.deepskill.space/",
    companyUrlName: "deepskill.space",
    workTitle: "PRE-PROFESSIONAL PRACTICE IN SOFTWARE DEVELOPMENT",
    date: "23/10/2023 - 30/11/2023",
    description:
      "Participate in the development of an application that will help pharmacies maintain a more efficient record of all the products and medications they offer.",
  },
  {
    companyName: "4Geeks",
    companyIcon: FourGeeks.src,
    companyUrl: "https://4geeks.com/",
    companyUrlName: "4geeks.com",
    workTitle: "FREELANCE SOFTWARE TECHNICAL WRITER",
    date: "01/04/2023",
    description: `Write articles on various programming topics in different programming languages and frameworks for the 'How To's' article catalog on 4Geeks.com`,
  },
];
