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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group relative hover:bg-neutral-50/80 px-4 sm:px-6 py-5 sm:py-6 rounded-2xl transition-all duration-300"
    >
      {/* subtle divider */}
      <div className="top-0 left-0 absolute bg-gradient-to-r from-transparent via-neutral-200 to-transparent w-full h-px" />

      <div className="flex items-start gap-4 sm:gap-5">
        
        {/* Icon */}
        <div className="bg-purple-100/70 mt-1 p-2.5 sm:p-3 rounded-xl transition">
          <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          
          {/* Top Row */}
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-1">
            
            <h3 className="font-medium text-neutral-900 text-sm sm:text-base leading-snug">
              {edu.degree}
            </h3>

            <span className="text-neutral-400 text-xs sm:text-sm">
              {edu.duration}
            </span>
          </div>

          {/* Institution */}
          <p className="mt-1 text-neutral-500 text-xs sm:text-sm">
            {edu.institution}
          </p>

          {/* Score */}
          <p className="mt-1 text-neutral-400 text-xs sm:text-sm">
            {edu.score}
          </p>

          {/* Highlight */}
          <p className="mt-3 max-w-xl text-neutral-600 text-xs sm:text-sm leading-relaxed">
            {edu.highlight}
          </p>
        </div>
      </div>
        <div className="top-0 left-0 absolute bg-gradient-to-r from-transparent via-neutral-200 to-transparent w-full h-px" />
    </motion.div>
  );
};

export default EducationCard;