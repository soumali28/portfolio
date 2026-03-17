import { useState } from "react";
import HeroImage from "./hero-image";
import { motion } from "framer-motion";
import HeaderText from "./header-text";
import ScrollIndicator from "../scroll-indicator";

const Header = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const [showText, setShowText] = useState(false);
  return (
    <motion.div
      layout
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`relative flex flex-col-reverse md:flex-row  items-center gap-14      ${!hasScrolled ? "min-h-[90vh] md:min-h-screen" : "mt-16 md:mt-20"}`}
    >
      {/* Text */}
      <HeaderText showText={showText} />

      {/* Image */}
      <motion.div layout transition={{ duration: 1.2, ease: "easeInOut" }}>
        <HeroImage onAnimationComplete={() => setShowText(true)} />
      </motion.div>

      {/* Scroll indicator */}
      {!hasScrolled && (
        <div className="hidden md:block">
          <ScrollIndicator />
        </div>
      )}
    </motion.div>
  );
};

export default Header;
