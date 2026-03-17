import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeaderText = ({ showText }: { showText: boolean }) => {
  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="hidden"
      animate={showText ? "show" : "hidden"}
      className={`${showText ? "block max-w-md" : "hidden"}  max-w-full sm:max-w-md text-center md:text-left`}
    >
      <motion.h2
        variants={lineVariants}
       className="mb-3 font-heading font-semibold text-zinc-800 text-3xl sm:text-4xl md:text-5xl leading-tight"
      >
        Hi, I’m <span className="inline-block relative">Soumali</span>
      </motion.h2>

      <motion.p
        variants={lineVariants}
        className="text-secondary text-base sm:text-lg leading-relaxed"
      >
        I build{" "}
        <span className="font-medium text-zinc-800">useful software</span> and
        judge messy code{" "}
        <span className="opacity-80 font-accent text-xl italic">
          (lovingly)
        </span>
        . I yap a lot but coffee helps. I don't just prototype idea — I turn
        them into
        <span className="font-medium text-zinc-800">
          {" "}
          actual shipped products
        </span>
        .
      </motion.p>
    </motion.div>
  );
};

export default HeaderText;
