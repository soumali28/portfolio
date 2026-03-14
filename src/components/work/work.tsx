import React from "react";
import { motion } from "framer-motion";
import Section from "../section";
import CompanyWorkCard from "./company-work-card";
import { workExperience } from "../../assets/data/work.data";

const Work = () => {
  return (
    <Section
      title="Where I Made an Impact"
      highlight="Impact"
      showDivider={false}
    >
      <div className="flex flex-col gap-4 mt-4">
        {workExperience.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <CompanyWorkCard
              logo={work.logo}
              company={work.company}
              role={work.role}
              duration={work.duration}
              highlights={work.highlights}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Work;
