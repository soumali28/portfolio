import { motion } from "framer-motion";
import { Github, Home } from "lucide-react";
import { SiHashnode } from "react-icons/si";
import Button from "./button/button";
import { FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/soumali28",
  },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/soumali-gorai",
  },
  {
    label: "Hashnode",
    icon: SiHashnode,
    href: "https://hashnode.com/@soumali28",
  },
];

const Navbar = () => {
  return (
    <div className="bottom-6 left-1/2 z-50 fixed -translate-x-1/2">
      <div className="flex items-center gap-2 sm:gap-4 bg-white/10 shadow-lg backdrop-blur-xl px-3 py-1 border border-white/30 rounded-full min-w-xs">
        {links.map((link, i) => {
          const Icon = link.icon;

          return (
            <>
              <motion.a
                key={i}
                href={link.href}
                target={link.href === "/" ? "_self" : "_blank"}
                rel={link.href === "/" ? undefined : "noreferrer"}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex justify-center items-center hover:bg-white border border-gray-200/40 rounded-full w-10 h-10 text-secondary"
              >
                <Icon size={20} />

                <div className="-top-6 left-1/2 absolute bg-black opacity-0 group-hover:opacity-100 px-2 py-1 rounded-md text-white text-xs whitespace-nowrap transition-all -translate-x-1/2 group-hover:-translate-y-1 duration-200 pointer-events-none">
                  {link.label}
                </div>
              </motion.a>
              {i === 0 && <div className="bg-zinc-300 mx-1 w-px h-6" />}
            </>
          );
        })}

        <div className="bg-zinc-300 w-px h-6" />

        {/* Hire Me Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="shadow-md border rounded-full font-semibold">
            Hire Me
          </Button>
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
