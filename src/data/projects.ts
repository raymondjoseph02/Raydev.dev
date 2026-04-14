import { ProjectDataProps } from "@/types/types";
import smartFilingThumbnail from "../../public/png/social-graph.png";
import pay4me from "../../public/png/Pay4me Cover.png";
import defifundr_landing from "../../public/png/defifundr-landing.png";
import ckollect from "../../public/png/ckollect.png";
import oneapp_workplace from "../../public/png/1app workplace.png";
import couch_time from "../../public/png/couch time.png";
import kdb from "../../public/png/kdb land and air.png";
export const projects: ProjectDataProps[] = [
  {
    title: "Workplace",
    images: { thumbnail: oneapp_workplace },
    isLive: true,
    isSideProject: false,
    description:
      "Built the frontend for 1app's internal workplace platform — a dashboard-style Vue app that connects to a REST API to manage tasks and team workflows. Focused on keeping the UI clean and the interactions fast, with smooth state handling across dynamic views.",
    stack: ["Vue", "tailwind", "Javascript", "framer motion", "REST Api"],
    github: "Private",
    liveLink: "https://main.d1rxdps2bhrfkf.amplifyapp.com",
  },
  {
    title: "ckollect",
    images: { thumbnail: ckollect },
    isLive: true,
    isSideProject: false,
    description:
      "A government payment collection web app built with React that integrates 1app's third-party API to handle secure transactions. Payments are processed through 1app's hosted checkout page, ensuring a reliable and secure flow for users making government-related payments.",
    stack: [
      "React",
      "tailwind",
      "typescript",
      "framer motion",
      "React-form-hook",
      "REST Api",
    ],
    github: "Private",
    liveLink: "https://ckollect.com/",
  },
  {
    title: "Smart filing",
    description:
      "Redesigned and developed the Landing, Contact Us, Login/Sign-Up, and Terms & Conditions pages for Smart Filing. Focused on creating clean, responsive, and user-friendly interfaces using React, Tailwind CSS, and JavaScript, resulting in a modernized and cohesive user experience.",
    stack: ["react", "tailwind", "javascript", "fomik", "Google Recaptcha"],
    isLive: true,
    isSideProject: false,
    liveLink: "https://smartfiling.com/",
    github: "private",
    images: {
      thumbnail: smartFilingThumbnail,
    },
  },
  {
    title: "Pay4me Dashboard",
    images: { thumbnail: pay4me },
    isLive: true,
    isSideProject: true,
    description:
      "A UI practice project built during my internship to sharpen my frontend skills. I designed and built a clean dashboard interface focused on layout precision, component structure, and smooth interactions using React, Tailwind CSS, and Framer Motion.",
    stack: ["react", "tailwind", "typescript", "framer motion"],
    github: "https://github.com/raymondjoseph02/pay4me",
    liveLink: "https://pay4me.netlify.app",
  },
  {
    title: "DefiFundr Landing",
    images: { thumbnail: defifundr_landing },
    isLive: true,
    isSideProject: false,
    description:
      "Landing page for DefiFundr, an employee payroll management system that leverages crypto to pay employees. Built to communicate the product's value clearly with a polished, responsive design and smooth interactions.",
    stack: [
      "react",
      "tailwind",
      "typescript",
      "framer motion",
      "Redux",
      "React-form-hook",
    ],
    github: "Private",
    liveLink: "https://www.defifundr.com/",
  },
  {
    title: "KDB Land & Air",
    images: { thumbnail: kdb },
    isLive: true,
    isSideProject: false,
    description:
      "Built the website for KDB Land and Air, a family-owned agricultural drone company based in Kirksville, Missouri. The site showcases their precision drone services — including crop spraying, scouting, aerial mapping, and forestry — along with their equipment lineup and financing options. Designed to connect Midwest farmers with modern aerial solutions in a clean, professional layout.",
    stack: [
      "Next",
      "tailwind",
      "typescript",
      "framer motion",
      "React-form-hook",
      "Sanity cms",
    ],
    github: "Private",
    liveLink: "https://kdbland.netlify.app/",
  },
  {
    title: "Couch Time",
    images: { thumbnail: couch_time },
    isLive: false,
    isSideProject: true,
    description:
      "A side project inspired by Netflix, built to practice consuming public APIs. I handled the design myself — pulling live movie and TV show data to display browsable content in a clean, familiar streaming-style UI.",
    stack: [
      "React",
      "tailwind",
      "typescript",
      "framer motion",
      "React-form-hook",
      "REST Api",
    ],
    github: "https://github.com/raymondjoseph02/couch-time",
    liveLink: "",
  },
];
