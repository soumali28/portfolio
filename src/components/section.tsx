import { motion, type Variants } from "framer-motion";
import React from "react";
import clsx from "clsx";
import Divider from "./divider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface SectionProps {
  title: string;
  highlight?: string;
  children: React.ReactNode;
  showDivider?: boolean;
  className?: string;
}

const Section = ({
  title,
  highlight,
  children,
  showDivider = true,
  className,
}: SectionProps) => {
  const parts =
    highlight && title.includes(highlight)
      ? title.split(highlight)
      : null;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={clsx(
        "relative space-y-4 mx-auto my-12 max-w-3xl",
        className
      )}
    >
      <motion.h2
        variants={itemVariants}
        className="mb-3 font-heading font-semibold text-zinc-800 text-2xl leading-tight"
      >
        {parts ? (
          <>
            {parts[0]}
            <span className="bg-clip-text bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-500 text-transparent">
              {highlight}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-4">
        {children}
      </motion.div>

      {showDivider && (
        <motion.div variants={itemVariants}>
          <Divider />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Section;
