import Section from "../section";
import { skills } from "../../assets/data/skills";

const Skills = () => {
  return (
    <Section
      title="Skills"
      highlight="Skills"
      showDivider={false}
    >
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-white shadow-sm hover:shadow-md px-3 py-2 border border-neutral-200 rounded-full transition-all duration-300 cursor-default"
            >
              <Icon size={18} color={skill.color} />
              <span className="font-medium text-secondary text-sm">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
      
    </Section>
  );
};

export default Skills;
