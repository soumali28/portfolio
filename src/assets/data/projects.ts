import granite from "../images/projects/granite.webm";
import himalayan from "../images/projects/himalayan.webm";
import unf from "../images/projects/unf.webm";
import celestia from "../images/projects/celestia.webm";

export const projects = [
  {
    title: "Celestia – AI Interview Assistant",
    desc: "AI-powered interview preparation platform generating technical and non-technical questions with real-time feedback using Gemini API.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    type: "personal",
    media: celestia,
    link: "https://github.com/SmritiSadhu/Celestia",
    span: " col-span-2 row-span-2 sm:col-span-2 smrow-span-2",
  },
  {
    title: "Manjeet Kaur Organization",
    desc: "NGO website for initiatives and impact.",
    tech: ["React", "Tailwind", "Shadcn-ui"],
    type: "freelance",
    link: "https://manjeetkaur-frontend.vercel.app/",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    title: "Granite & Grove Inc.",
    desc: "Financial advisory platform built for a consulting firm with modern UI and scalable architecture.",
    tech: ["React", "Frammer Motion", "Tailwind"],
    type: "freelance",
    media: granite,
    link: "https://ggadvisors.ca",
    span: "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    title: "Stock Price Prediction (ARIMA)",
    desc: "Time-series forecasting model using ARIMA to analyze and predict stock market trends.",
    tech: ["Python", "ARIMA", "Pandas"],
    type: "academic",
    // media: "/projects/arima.png",
    link: "https://drive.google.com/file/d/1dsDPqtZ-Ahtcv35FmiLMCw5ICTeKFT1S/view?usp=sharing",
    span: "col-span-2 row-span-1",
  },

  {
    title: "United HOPE Foundation",
    desc: "NGO platform enabling donation support.",
    tech: ["Nextjs", "Tailwind", "MongoDB", "Node.js"],
    type: "freelance",
    media: unf,
    link: "https://www.uhfindia.org/",
    span: "col-span-1 row-span-2",
  },

  {
    title: "Himalayan Dreamtreks",
    desc: "Travel and trekking platform with destination listings and booking features.",
    tech: ["Nextjs", "Node.js", "MongoDB", "Bootstrap"],
    type: "freelance",
    media: himalayan,
    link: "https://himalayandreamtreks.in/",
    span: "col-span-2 row-span-2",
  },
];
