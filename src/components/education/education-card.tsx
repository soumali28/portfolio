import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const EducationCard = ({ edu, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
      className="group relative bg-white shadow-sm hover:shadow-md p-6 border border-neutral-200 hover:border-neutral-300 rounded-2xl transition-all duration-300"
    >

      {/* Year Badge */}
      <div className="top-4 right-4 absolute bg-neutral-100 px-3 py-1 rounded-full text-secondary text-xs">
        {edu.duration}
      </div>

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="bg-amber-50 p-3 rounded-xl">
          <GraduationCap size={20} className="text-amber-900/70" />
        </div>

        {/* Content */}
        <div className="flex-1 pr-16">
          <h3 className="font-semibold text-zinc-900">
            {edu.degree}
          </h3>

          <p className="mt-1 font-medium text-secondary text-sm">
            {edu.institution}
          </p>

          <p className="mt-1 text-secondary text-sm">
            {edu.score}
          </p>

          <p className="mt-3 text-secondary text-sm leading-relaxed">
            {edu.highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;