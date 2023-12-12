import Image from "next/image";
import TechCardBackground from "@/assets/tech-card-img.jpg";
import { TechCardTypes } from "@/assets/tech-icons/tech-info";
import { lato, latoItalic } from "@/fonts/fonts";

const TechnologyCard = ({ name, image }: Readonly<TechCardTypes>) => {
  return (
    <div className="tech-animation-card">
      <Image
        height="500"
        width="500"
        src={TechCardBackground.src}
        alt="Card animation image background"
        className="tech-card-img"
      />

      <div className="tech-container">
        <Image
          width="100"
          height="100"
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
