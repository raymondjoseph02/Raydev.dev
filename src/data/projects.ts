import { ProjectDataProps } from "@/types/types";
import smartFilingThumbnail from "../../public/png/social-graph.png";
import pay4me from "../../public/png/Pay4me Cover.png";
import audio_phile from "../../public/png/audiophile.png";
import defifundr_landing from "../../public/png/defifundr-landing.png";
import ckollect from "../../public/png/ckollect.png";
import oneapp_workplace from "../../public/png/1app workplace.png";
import couch_time from "../../public/png/couch time.png";
import prodigiouscl from "../../public/png/prodigiouscl.png";
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
    title: "couch time",
    images: { thumbnail: couch_time },
    isLive: true,
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
    liveLink: "https://ckollect.com/",
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
    title: "prodigiou scl",
    images: { thumbnail: prodigiouscl },
    isLive: true,
    isSideProject: false,
    description:
      "A multi-page landing site built for an expert financial and management consulting firm, including a contact us page. Focused on conveying professionalism and trust through clean layout, strong typography, and smooth interactions.",
    stack: [
      "react",
      "tailwind",
      "typescript",
      "framer motion",
      "Redux",
      "React-form-hook",
    ],
    github: "Private",
    liveLink: "https://www.prodigiouscl.com/",
  },
  // {
  //   title: "Defifundr Dashboard",
  //   images: { thumbnail: pay4me },
  //   isLive: true,
  //   isSideProject: false,
  //   description:
  //     "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
  //   stack: [
  //     "react",
  //     "tailwind",
  //     "typescript",
  //     "framer motion",
  //     "Redux",
  //     "React-form-hook",
  //   ],
  //   github: "Private",
  //   liveLink: "Pay4me.netify.app",
  // },
  {
    title: "Audiophile",
    description:
      "Built an e-commerce platform focused on high-end audio products. Developed responsive pages for product listings and details using JavaScript and Firebase for data management. Implemented features like user authentication and dynamic cart functionality to enhance the user shopping experience.",
    images: {
      thumbnail: audio_phile,
      others: ["", ""],
    },
    isLive: true,
    isSideProject: true,
    liveLink: "https://smartfiling.com/ ",
    github: "https://github.com/raymondjoseph02/audiophile",
    stack: ["html", "sass", "javascript", "Firebase"],
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
      "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
    stack: ["react", "tailwind", "typescript", "framer motion"],
    github: "https://github.com/raymondjoseph02/pay4me",
    liveLink: "Pay4me.netify.app",
  },

  {
    title: "DefiFundr Landing",
    images: { thumbnail: defifundr_landing },
    isLive: true,
    isSideProject: false,
    description:
      "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
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
    title: "KDB land & Air ",
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
];
