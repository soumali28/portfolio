import Section from "../section";
import line from "../../assets/images/howIWork/line.png";
import { howIWorkSteps } from "../../assets/data/how-I-work";
import { motion } from "framer-motion";
import { useState } from "react";

const HowIWork = () => {
  const [aiEnabled, setAiEnabled] = useState(false);
  return (
    <Section
      title="How I Think and Build"
      highlight="Build"
      showDivider={false}
      className="relative mt-20 h-100 text-center"
    >
      <div className="top-12 left-1/2 z-20 absolute flex justify-center mb-4 -translate-x-1/2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setAiEnabled(!aiEnabled)}
          className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
            aiEnabled
              ? "bg-neutral-900 text-white border-neutral-900"
              : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
          }`}
        >
          ✨ {aiEnabled ? "AI Assist Enabled" : "Enable AI Assist"}
        </motion.button>
      </div>

      <div className="relative my-0 text-left">
        <motion.img
          src={line}
          alt="How I work timeline"
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {howIWorkSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.id}>
              <div
                className={`absolute bg-white p-2 border border-zinc-200 rounded-full -translate-x-1/2 transform ${step.floatingPosition}`}
              >
                <Icon
                  className={
                    !aiEnabled ? "text-zinc-800" : "text-fuchsia-500/60"
                  }
                  size={20}
                />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  y: 80,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                  delay: index * 0.2,
                }}
                className={`absolute ${step.textPosition} max-w-[15rem]`}
              >
                <div>
                  <img
                    src={step.image}
                    alt="How I work step icon"
                    className="float-left mr-3 mb-2 w-25 h-40"
                  />

                  <div>
                    <h3 className="mb-2 font-semibold text-zinc-800">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {aiEnabled && step.aiDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-2 mt-3 font-medium text-secondary text-xs"
                    >
                      <span className="text-sm">✨</span>

                      <span>
                        <span className="font-medium text-purple-600">
                          AI Assist:
                        </span>{" "}
                        {step.aiDescription}
                      </span>
                    </motion.div>
                  )}

                  <div className="clear-both" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HowIWork;
