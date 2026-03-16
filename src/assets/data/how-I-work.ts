// howIWorkData.ts
import { Brain, Blocks, Rocket } from "lucide-react";
import one from "../images/howIWork/1.png";
import two from "../images/howIWork/2.png";
import three from "../images/howIWork/3.png";

export const howIWorkSteps = [
  {
    id: "think",
    title: "Brainstorm Mode 🧠",
    description:
      "Before touching the keyboard, I dig into the problem, user needs, and constraints.",
    aiDescription:
      "AI helps me explore edge cases, validate ideas, and think through weird scenarios faster.",
    icon: Brain,
    floatingPosition: "top-3/4 left-20",
    textPosition: "top-70 left-0",
    image: one,
  },
  {
    id: "build",
    title: "Build the Right Thing 🧩",
    description:
      "Turning ideas into scalable systems with thoughtful UX. Less chaos, more intention.",
    aiDescription:
      "AI speeds up prototyping, reduces boilerplate, and helps me focus on the important stuff.",
    icon: Blocks,
    floatingPosition: "right-[45%] bottom-[38%]",
    textPosition: "top-45 right-60",
    image: two,
  },
  {
    id: "ship",
    title: "Ship, Learn, Repeat 🚀",
    description:
      "I ship early, watch how real users behave, and iterate fast. Real feedback > perfect guesses.",
    aiDescription:
      "AI helps summarize the feedback, spot patterns, and then automates the boring bits.",
    icon: Rocket,
    floatingPosition: "top-[2%] right-[10%]",
    textPosition: "top-20 right-0",
    image: three,
  },
];