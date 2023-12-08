import { lato, latoItalic } from "@/fonts/fonts";
import Image from "next/image";

type CertificationCardProps = {
  title: string;
  image: string;
  description: string[];
};

const CertificationCard = ({
  title,
  image,
  description,
}: Readonly<CertificationCardProps>) => {
  return (
    <div className="certification-card">
      <div className="image-container">
        <Image
          className="certification-image"
          src={image}
          alt={title}
          width="800"
          height="800"
        />
      </div>

      <div className="card-description">
        <h2 className={`card-description__title ${latoItalic.className}`}>
          {title}
        </h2>
        {description.map((paragraph) => {
          return (
            <p className={`single-paragraph ${lato.className}`}>{paragraph}</p>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationCard;
