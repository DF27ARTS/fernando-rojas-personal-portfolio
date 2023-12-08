import CertificationCard from "@/components/CertificationCard";
import { certifications } from "./certifications";

const Studies = () => {
  return (
    <section className="studies-container">
      {certifications.map((certification) => {
        return (
          <CertificationCard
            title={certification.title}
            image={certification.image}
            academy={certification.academy}
            date={certification.date}
          />
        );
      })}
    </section>
  );
};

export default Studies;
