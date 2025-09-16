import { ProjectDataProps } from "@/types/types";
import smartFilingThumbnail from "../../public/png/social-graph.png";
import pay4me from "../../public/png/Pay4me Cover.png";
import audio_phile from "../../public/png/audiophile.png";
import scaper_walkers from "../../public/png/scape-walkers.png";
import defifundr_landing from "../../public/png/defifundr-landing.png";
export const projects: ProjectDataProps[] = [
  {
    title: "Defifundr Dashboard",
    images: { thumbnail: pay4me },
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
    github: "https://github.com/raymondjoseph02/pay4me",
    liveLink: "Pay4me.netify.app",
  },
  {
    title: "Audiophile",
    github: "",
    description:
      "Built an e-commerce platform focused on high-end audio products. Developed responsive pages for product listings and details using JavaScript and Firebase for data management. Implemented features like user authentication and dynamic cart functionality to enhance the user shopping experience.",
    images: {
      thumbnail: audio_phile,
      others: ["", ""],
    },
    isLive: true,
    isSideProject: true,
    liveLink: "https://smartfiling.com/ ",
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
    title: "scaper walkers",
    images: { thumbnail: scaper_walkers },

    description:
      "Designed and developed a responsive landing page from scratch without any prior design reference. Focused on clean UI, intuitive layout, and optimized performance using React, Tailwind CSS, and Framer Motion for smooth interactions.",
    stack: ["react", "tailwind", "typescript", "framer motion"],
    isLive: true,
    isSideProject: false,
    github: "https://github.com/raymondjoseph02/scapewalkers",
    liveLink: "https://www.scapewalkers.com/",
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
    title: "fastcart-market Dashboard",
    images: { thumbnail: pay4me },
    isLive: true,
    isSideProject: true,
    description:
      "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
    stack: ["next", "tailwind", "typescript", "framer motion"],
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
    images: { thumbnail: defifundr_landing },
    isLive: true,
    isSideProject: false,
    description:
      "A visually polished single-page website crafted to showcase refined attention to detail, modern aesthetics, and seamless user experience. This project demonstrates precision in layout, typography, and responsive design, with a focus on clean UI and subtle interactions. Built with React, Tailwind CSS, and Framer Motion to highlight smooth transitions and engaging visual appeal.",
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
