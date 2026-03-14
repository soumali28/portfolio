// howIWorkData.ts
import { Brain, Blocks, Rocket } from "lucide-react";
import one from "../images/howIWork/1.png";
import two from "../images/howIWork/2.png";
import three from "../images/howIWork/3.png";

export const howIWorkSteps = [
  {
    id: "think",
    title: "Think First",
    description:
      "I deeply understand the problem, user needs, and constraints before writing code.",
    aiDescription:"AI helps explore edge cases and validate ideas faster.",
      icon: Brain,
    floatingPosition: "top-3/4 left-20",
    textPosition: "top-70 left-0",
    image: one,
  },
  {
    id: "build",
    title: "Build With Purpose",
    description:
      "I design and build scalable systems with clean architecture and thoughtful UX.",
    aiDescription:"AI speeds up prototyping and reduces boilerplate.",
      icon: Blocks,
    floatingPosition: "right-[45%] bottom-[38%]",
    textPosition: "top-45 right-60",
    image: two,
  },
  {
    id: "ship",
    title: "Ship and Iterate",
    description:
      "I ship early and learn from real users. I iterate continuously.",
    // aiDescription:"AI helps analyze feedback and automate workflows.",
      icon: Rocket,
    floatingPosition: "top-[2%] right-[10%]",
    textPosition: "top-20 right-0",
    image: three,
  },
];
