import { useState, useEffect, useRef } from "react";
import Section from "../section";
import { testimonials } from "../../assets/data/testimonials";

import TestimonialCard from "./testimonial-card";
import TestimonialAvatars from "./testimonial-avatar";

const AUTOPLAY_DELAY = 4000;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  //@ts-expect-error ignore this errror
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const isHovered = useRef(false);

  // autoplay logic
  useEffect(() => {
    if (isHovered.current) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  return (
    <Section
      title="Hear It From The People I Build With"
      highlight="Say"
      showDivider={false}
      className="mt-24 text-center"
    >
      <p className="text-secondary">No cap, just real feedback.</p>

      <div
        className="relative mx-auto my-12 max-w-4xl h-[420px]"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {/* Card */}
        <TestimonialCard
          active={active}
          activeIndex={activeIndex}
          total={testimonials.length}
        />

        {/* Avatars */}
        <TestimonialAvatars
          testimonials={testimonials}
          active={active}
          setActive={(person: (typeof testimonials)[number]) =>
            setActiveIndex(
              testimonials.findIndex((t) => t.id === person.id)
            )
          }
        />
      </div>
    </Section>
  );
};

export default Testimonials;