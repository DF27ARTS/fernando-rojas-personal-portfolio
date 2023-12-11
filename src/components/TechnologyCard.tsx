import Image from "next/image";
import BackgroundImg from "@/assets/studies-img.jpg";
import { TechCardTypes } from "@/assets/tech-icons/tech-info";
import { lato, latoItalic } from "@/fonts/fonts";

const TechnologyCard = ({ name, image }: Readonly<TechCardTypes>) => {
  return (
    <div className="tech-animation-card">
      <Image
        height="500"
        width="500"
        src={BackgroundImg.src}
        alt="Card animation image background"
        className="tech-card-img"
      />

      <div className="tech-container">
        <Image
          width="200"
          height="200"
          src={image}
          alt={name}
          className="tech-icon"
        />
        <p className={`tech-name ${latoItalic.className}`}>{name}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
