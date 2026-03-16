import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../assets/data/projects";
import { skills } from "../../assets/data/skills";
import Section from "../section";
import { motion } from "framer-motion";

const badgeStyles = {
  personal: "bg-neutral-100 text-neutral-700",
  academic: "bg-amber-50 text-amber-700",
  freelance: "bg-teal-50 text-teal-700",
};
const Projects = () => {
  const handleOpen = (link?: string) => {
    if (!link) return;
    window.open(link, "_blank");
  };

  const skillMap = Object.fromEntries(
    skills.map((skill) => [skill.name.toLowerCase(), skill]),
  );

  const Media = ({ src }: { src: string }) => (
    <div className="mb-3 border border-neutral-200 rounded-md group-hover:rounded-2xl overflow-hidden transition-all duration-300">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );

  return (
    <Section
      title="What I've Built"
      highlight="Built"
      showDivider={false}
      className="mt-16 text-center"
    >
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] my-8 text-left">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            onClick={() => handleOpen(project.link)}
            className={`
              ${project.span}
              relative rounded-xl
              border border-neutral-200
              bg-white
              p-3
              flex flex-col
              justify-between
              cursor-pointer
              transition-all duration-300
              hover:border-neutral-400/70
              hover:shadow-sm
              hover:rounded-3xl
              overflow-hidden
              group
            `}
          >
            {/* Optional media preview */}
            <div>
              {project.media && <Media src={project.media} />}
              {/* Header */}

              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-neutral-900 text-base leading-snug">
                  {project.title}
                </h3>

                <span
                  className={`text-[11px] px-2 py-1 rounded-full font-medium whitespace-nowrap ${badgeStyles[project.type]}`}
                >
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => {
                  const skill = skillMap[t.toLowerCase()];
                  const Icon = skill?.icon;

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-neutral-100 px-2 py-1 rounded-md text-neutral-700 text-xs"
                    >
                      {Icon && <Icon size={12} color={skill.color} />}
                      {t}
                    </div>
                  );
                })}
              </div>
            </div>

            <FiArrowUpRight
              size={18}
              className="right-3 bottom-3 absolute opacity-0 group-hover:opacity-100 text-neutral-500 transition-all translate-y-1 group-hover:translate-y-0 duration-200"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
