// TestimonialAvatars.tsx

import { motion } from "framer-motion";
import { testimonials } from "../../assets/data/testimonials";

interface TestimonialAvatarProp {
  testimonials: (typeof testimonials)[number][];
  active: (typeof testimonials)[number];
  setActive: (person: (typeof testimonials)[number]) => void;
}

const TestimonialAvatars: React.FC<TestimonialAvatarProp> = ({
  testimonials,
  active,
  setActive,
}) => {
  const baseTilt = [-6, -2, 3, 6];
  return (
    <div className="flex justify-center items-end mt-12">
      {testimonials.map((person, index) => {
        const isActive = active.id === person.id;

        // create fan rotation
        const fanRotation = (index - (testimonials.length - 1) / 2) * 7;

        const tilt = baseTilt[index % baseTilt.length];

        const rotation = isActive ? 0 : fanRotation + tilt;
        return (
          <motion.button
            key={person.id}
            onClick={() => setActive(person)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={false}
            animate={{
              rotate: rotation,
              y: isActive ? -12 : 0,
              zIndex: isActive ? 20 : 10 - index,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative -ml-2 first:ml-0 p-1"
          >
            <div className="bg-white shadow-sm border border-neutral-200 rounded-3xl">
              <img
                src={person.avatar}
                alt={person.name}
                className="rounded-3xl w-32 h-32 object-cover"
              />
            </div>
            <p className="mt-2 font-accent font-medium text-secondary text-xl text-center">
              {person.caption}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};

export default TestimonialAvatars;
