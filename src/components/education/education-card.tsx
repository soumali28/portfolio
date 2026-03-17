import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationCardProps {
  edu: {
    degree: string;
    institution: string;
    duration: string;
    score: string;
    highlight: string;
  };
  index: number;
}
const EducationCard: React.FC<EducationCardProps> = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
      className="group relative bg-white shadow-sm p-4 sm:p-6 border border-neutral-200 hover:border-neutral-300/80 rounded-2xl sm:rounded-3xl transition-all duration-300"
    >
      {/* Year Badge */}
      <div className="hidden sm:block top-3 sm:top-4 right-3 sm:right-4 absolute bg-neutral-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] text-secondary sm:text-xs">
        {edu.duration}
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div className="bg-amber-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl">
          <GraduationCap
            size={18}
            className="sm:w-5 sm:h-5 text-amber-900/70"
          />
        </div>

        {/* Content */}
        <div className="flex-1 pr-0 sm:pr-16">
          <h3 className="font-semibold text-zinc-900 text-sm sm:text-base leading-snug">
            {edu.degree}
          </h3>

          <p className="mt-1 font-medium text-secondary text-xs sm:text-sm">
            {edu.institution}
          </p>

          <p className="mt-1 text-secondary text-xs sm:text-sm">{edu.score}</p>

          <p className="mt-2 sm:mt-3 text-secondary text-xs sm:text-sm leading-relaxed">
            {edu.highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
