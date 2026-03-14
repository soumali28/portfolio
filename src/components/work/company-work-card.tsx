import { ChevronRightIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CompanyWorkCardProps {
  logo?: string;
  company: string;
  role: string;
  duration: string;
  highlights?: string[];
}

const CompanyWorkCard = ({
  logo,
  company = "Pipeline AI (Techstack Inc)",
  role = "Frontend Developer Lead",
  duration = "June 2024 - Present",
  highlights,
}: CompanyWorkCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);

  const bubbleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Smooth magnetic follow
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const speed = 0.15; // lower = more magnetic lag

      position.current.x += (mouse.current.x - position.current.x) * speed;
      position.current.y += (mouse.current.y - position.current.y) * speed;

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouse.current.x = e.clientX - rect.left + 12; // slight offset
    mouse.current.y = e.clientY - rect.top + 12;
  };

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      className="group relative hover:shadow-sm p-5 rounded-xl w-full transition-all duration-300 cursor-pointer"
    >
      {/* Floating Magnetic Bubble */}
      {hovering && (
        <div ref={bubbleRef} className="z-50 absolute pointer-events-none">
          <div className="bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.12)] backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full font-accent font-medium text-sm whitespace-nowrap transition-all duration-300">
            {expanded ? "Hide" : "See More"}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        {/* Logo */}
        <div className="flex justify-center items-center bg-zinc-200/15 border-3 border-gray-200/60 rounded-full w-12 h-12 shrink-0">
          {logo ? (
            <img
              src={logo}
              alt="company logo"
              className="w-7 h-7 object-contain"
            />
          ) : (
            <span className="font-semibold text-zinc-600 text-sm">PA</span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <h2 className="flex items-center gap-1 font-semibold text-zinc-900">
              {company}
              <span
                className={`text-secondary transition-all duration-300
                opacity-0 translate-x-[-4px]
                group-hover:opacity-100 group-hover:translate-x-0
                ${expanded ? "rotate-90" : ""}`}
              >
                <ChevronRightIcon size={12} />
              </span>
            </h2>

            <span className="text-secondary text-xs">{duration}</span>
          </div>

          <p className="mt-[2px] text-secondary text-sm">{role}</p>

          <AnimatePresence initial={false}>
            {expanded && highlights && (
              <motion.ul
                key="content"
                initial={{ opacity: 0, height: 0, y: -5, filter: "blur(4px)" }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, height: 0, y: -5, filter: "blur(4px)" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-2 mt-3 overflow-hidden text-secondary text-sm"
              >
                {highlights.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-2"
                  >
                    <span className="bg-zinc-500 mt-[6px] rounded-full w-1.5 h-1.5 shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyWorkCard;
