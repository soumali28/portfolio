import profilePic from "../../assets/images/hero/profile-pic.png";
import coffee from "../../assets/images/hero/coffee.png";
import laptop from "../../assets/images/hero/laptop.png";
import bagpack from "../../assets/images/hero/bagpack.png";
import FloatingIcon from "../icons/floating-icon";
import type { Variants } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/* ------------------ VARIANTS ------------------ */

const imageVariants: Variants = {
  start: {
    borderRadius: "12%",
    scale: 0.8,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
  },
  end: {
    borderRadius: "50%",
    scale: [0.8, 1.08, 1], // micro overshoot (feels premium)
    boxShadow: "0px 25px 60px rgba(0,0,0,0.1)",
    transition: {
      duration: 1.6,
      ease: [0.76, 0, 0.24, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const iconVariants: Variants = {
  start: {
    opacity: 0,
    y: 40,
    scale: 0.6,
    filter: "blur(6px)",
  },
  end: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/* ------------------ COMPONENT ------------------ */

interface HeroImageProps {
  onAnimationComplete?: () => void;
}

const HeroImage: React.FC<HeroImageProps> = ({ onAnimationComplete }) => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  useEffect(() => {
    const order = [0, 1, 2];
    let i = 0;

    const interval = setInterval(() => {
      setTooltipIndex(order[i]);
      i++;

      if (i >= order.length) {
        setTimeout(() => setTooltipIndex(null), 800);
        clearInterval(interval);
      }
    }, 900);

    return () => clearInterval(interval);
  }, []);

  /* -------- Mouse Parallax (NO re-renders) -------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 140,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 140,
    damping: 18,
  });

  const rotateX = useTransform(springY, [-120, 120], [10, -10]);
  const rotateY = useTransform(springX, [-120, 120], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ------------------ JSX ------------------ */

  return (
    <motion.div
      initial="start"
      animate="end"
      onAnimationComplete={onAnimationComplete}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000, // REAL 3D
      }}
      className="relative flex justify-center items-center w-72 h-72"
    >
      {/* ---------- AVATAR (ONLY THIS CLIPS) ---------- */}

      <motion.div
        variants={imageVariants}
        className="z-10 relative bg-[#f6f6f5] shadow-sm w-56 h-56 overflow-hidden will-change-transform"
        style={{
          transform: "translateZ(60px)", // creates depth vs glow
        }}
      >
        <img
          src={profilePic}
          alt="profile"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* ---------- FLOATING ICONS (FREE) ---------- */}

      <motion.div className="z-20 absolute inset-0">
        <motion.div variants={iconVariants}>
          <FloatingIcon
            src={coffee}
            alt="coffee"
            className="top-32 -left-8 w-20"
            duration={4}
            label="Coffee Addict 😎"
            autoShow={tooltipIndex === 0}
          />
        </motion.div>

        <motion.div variants={iconVariants}>
          <FloatingIcon
            src={bagpack}
            alt="bagpack"
            className="top-30 -right-8 w-20"
            duration={4.5}
            label="Travel Enthusiast 🌍"
            autoShow={tooltipIndex === 2}
          />
        </motion.div>

        <motion.div variants={iconVariants}>
          <FloatingIcon
            src={laptop}
            alt="laptop"
            className="-top-8 left-1/3 w-24"
            duration={5}
            label="I love tech! ❤️"
            autoShow={tooltipIndex === 1}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
