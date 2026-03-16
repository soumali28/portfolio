import { educationData } from "../../assets/data/education";
import Section from "../section";
import EducationCard from "./education-card";


const Education = () => {
  return (
    <Section
      title="Education"
      highlight="Education"
      showDivider={false}
      className="mt-50"
    >
      <div className="space-y-4 mx-auto w-full">
        {educationData.map((edu, index) => (
         <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
