import Image from "next/image";
import TechCardBackground from "@/assets/tech-card-img.jpg";
import { TechCardTypes } from "@/assets/tech-icons/tech-info";
import { lato, latoItalic } from "@/fonts/fonts";

const TechnologyCard = ({ name, image }: Readonly<TechCardTypes>) => {
  return (
    <div className="tech-animation-card">
      <Image
        width="300"
        height="300"
        src={image}
        alt={name}
        className="tech-icon"
      />
      <p className={`tech-name ${latoItalic.className}`} translate="no">{name}</p>
    </div>
  );
};

export default TechnologyCard;
