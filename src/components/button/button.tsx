import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`
        group
        relative
        flex items-center gap-2
        px-6 py-3
        rounded-lg
        font-medium
        text-white
        text-sm
        bg-zinc-800
        shadow-md
        hover:shadow-lg
        transition-all
        duration-300
        cursor-pointer
        ${className}
      `}
    >
      {children}

      {/* Glow effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-purple-400 to-rose-400 opacity-0 group-hover:opacity-40 blur-xl rounded-lg transition-opacity duration-300" />
    </motion.button>
  );
};

export default Button;
