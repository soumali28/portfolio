import Section from "../section";
import line from "../../assets/images/howIWork/line.png";
import { howIWorkSteps } from "../../assets/data/how-I-work";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const HowIWork = () => {
  const [aiEnabled, setAiEnabled] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [showRipple, setShowRipple] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowCursor(true);

        setTimeout(() => {
          setShowRipple(true);
          setAiEnabled(true);
        }, 1500);

        setTimeout(() => {
          setShowCursor(false);
        }, 1600);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleToggleAI = () => {
    setAiEnabled((prev) => !prev);

    // restart ripple animation
    setShowRipple(false);

    setTimeout(() => {
      setShowRipple(true);
    }, 10);
  };

  return (
    <div ref={sectionRef}>
      <Section
        title="How I Think and Build"
        highlight="Build"
        showDivider={false}
        className={`mt-20 h-100 text-center ${aiEnabled ? "mb-96 sm:mb-60" : "mb-52"}`}
      >
        {/* ====================================================== */}
        {/* =============== MOBILE VERSION  ========== */}
        {/* ====================================================== */}

        <div className="md:hidden top-12 left-1/2 z-20 absolute flex justify-center mb-4 -translate-x-1/2">
          {showCursor && (
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="top-6 left-1/2 z-40 absolute pointer-events-none"
            >
              <motion.svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="black"
                className="drop-shadow-lg"
                animate={{ scale: [1, 0.85, 1] }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <path d="M3 2L21 12L13 13L12 21L3 2Z" />
              </motion.svg>
            </motion.div>
          )}

          <motion.button
            animate={showRipple ? { scale: [1, 0.92, 1] } : {}}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleToggleAI}
            className={`relative cursor-pointer flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
              aiEnabled
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
            }`}
          >
            ✨ {aiEnabled ? "AI Assist Enabled" : "Enable AI Assist"}
            {showRipple && (
              <motion.span
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bg-fuchsia-400/30 rounded-full w-20 h-20 pointer-events-none"
              />
            )}
          </motion.button>
        </div>

        <div className="md:hidden relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="top-0 bottom-0 left-[20px] absolute bg-neutral-200 w-[2px]" />

          <div className="flex flex-col gap-6 pl-10">
            {howIWorkSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative bg-white px-6 py-5 border border-neutral-200 rounded-2xl text-left"
                >
                  {/* Timeline Icon */}
                  <div className="top-1/2 -left-[42px] absolute flex justify-center items-center bg-white border border-neutral-200 rounded-full w-11 h-11 -translate-y-1/2">
                    <Icon
                      className={
                        !aiEnabled ? "text-zinc-800" : "text-fuchsia-500/60"
                      }
                      size={20}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="z-10 relative mb-2 font-medium text-sm">
                    {step.title}
                  </h3>

                  <p className="z-10 relative max-w-[92%] text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {aiEnabled && step.aiDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-2 mt-3 font-medium text-secondary text-xs"
                    >
                      <span>
                        <span className="font-medium text-purple-600 text-xs">
                          AI Assist:
                        </span>{" "}
                        {step.aiDescription}
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================== */}
        {/* =============== DESKTOP VERSION  ========== */}
        {/* ====================================================== */}

        <div className="hidden md:block relative">
          <div className="top-12 left-1/2 z-20 absolute flex justify-center mb-4 -translate-x-1/2">
            {showCursor && (
              <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="top-6 left-1/2 z-40 absolute pointer-events-none"
              >
                <motion.svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="drop-shadow-lg"
                  animate={{ scale: [1, 0.85, 1] }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <path d="M3 2L21 12L13 13L12 21L3 2Z" />
                </motion.svg>
              </motion.div>
            )}

            <motion.button
              animate={showRipple ? { scale: [1, 0.92, 1] } : {}}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleToggleAI}
              className={`relative cursor-pointer flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
                aiEnabled
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
              }`}
            >
              ✨ {aiEnabled ? "AI Assist Enabled" : "Enable AI Assist"}
              {showRipple && (
                <motion.span
                  initial={{ scale: 0, opacity: 0.6 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute bg-fuchsia-400/30 rounded-full w-20 h-20 pointer-events-none"
                />
              )}
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
        </div>
      </Section>
    </div>
  );
};

export default HowIWork;
