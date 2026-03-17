import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { testimonials } from "../../assets/data/testimonials";


interface TestimonialCardProps{
  active: typeof testimonials[number];
  activeIndex: number;
  total: number;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ active, activeIndex, total }) => {
  const offset = ((activeIndex - (total - 1) / 2) / total) * 200;
  const tailOffset = 50 + (activeIndex - (total - 1) / 2) * 18;

  return (
    <div className="relative flex justify-center mb-12 overflow-visible">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            x: offset,
          }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="relative bg-gradient-to-br from-white to-neutral-50 shadow-sm p-4 border border-neutral-200 rounded-3xl max-w-xl"
        >
          {/* ❤️ floating badge */}
          <div className="-top-3 -right-3 absolute flex justify-center items-center bg-white shadow-xs border border-neutral-200 rounded-full w-8 h-8">
            <Heart size={14} className="fill-rose-700 text-red-600" />
          </div>

          {/* Quote */}
          <p className="text-neutral-700 text-lg text-left leading-relaxed">
            “{active.quote}”
          </p>

          {/* Person */}
          <div className="mt-6 text-left">
            <p className="font-semibold text-neutral-900">{active.name}   {active.location}</p>

            <p className="text-neutral-500 text-sm">
              {active.role} • {active.company}
            </p>

            {/* <div className="flex items-center gap-1 my-3">
              📍
              <p className="mt-1 text-neutral-400 text-sm">
                {" "}
                {active.location}
              </p>
            </div> */}
          </div>

          {/* Tail */}
          <motion.div
            animate={{ left: `${tailOffset}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bottom-[-12px] absolute bg-white border-zinc-200 border-r border-b w-6 h-6 rotate-45 -translate-x-1/2"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCard;
