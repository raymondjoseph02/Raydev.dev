import { Tool } from "@/types/types";
import js from "../../public/png/javascript.png";
import { FaJs } from "react-icons/fa6";
import Image from "next/image";
export const MyTools: Tool[] = [
  {
    title: "typescript",
    icon: <FaJs />,
  },
  {
    title: "JavaScript",
    icon: <Image src={js} alt={"JavaScript"} />,
  },
  {
    title: "React",
    icon: <div></div>,
  },
  {
    title: "Next",
    icon: <div></div>,
  },
  {
    title: "Framer motion",
    icon: <div></div>,
  },
  {
    title: "gsap",
    icon: <div></div>,
  },
  {
    title: "tailwind ",
    icon: <div></div>,
  },
  {
    title: "Git",
    icon: <div></div>,
  },
  {
    title: "RestApi",
    icon: <div></div>,
  },
  {
    title: "Redux",
    icon: <div></div>,
  },
];
