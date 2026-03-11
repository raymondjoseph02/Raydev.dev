"use client";
import { CallIcon, LinkIcon } from "../../../public/svg/general";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import sunshine_bg from "../../../public/webp/Sunshine bg.webp";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import Workplace from "../../../public/png/workplace.png";
import Link from "next/link";

function Hero() {
  const [openDialog, setOpenDialog] = useState(false);
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);

  const handleDialog = () => {
    setOpenDialog(true);
  };

  useGSAP(() => {
    const splitText = SplitText.create(".header", {
      type: "lines,words,chars", // Added chars to the split type
      linesClass: "line",
      wordsClass: "word++",
      charsClass: "char++", // Added chars class
      autoSplit: true,
    });

    // Calculate animation duration: chars length * stagger + base duration
    const animationDuration = 0.5; // Base duration
    const staggerDelay = 0.05; // Reduced stagger for smoother effect
    const totalDuration =
      splitText.chars.length * staggerDelay + animationDuration;

    gsap.from(splitText.chars, {
      yPercent: 100,
      opacity: 0,
      duration: animationDuration,
      stagger: staggerDelay,
      ease: "back.out(1.7)",
      onComplete: () => {
        setHeaderAnimationComplete(true);
      },
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url('${sunshine_bg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-38 pb-13.5"
    >
      <div className=" flex justify-center container-wrapper flex-col items-center gap-11">
        <div className="flex flex-col items-center justify-center gap-6">
          <Badge title="Currently Available" />
          <div className="flex flex-col items-center justify-center max-w-3xl gap-4.5 ">
            <h1 className="text-6xl sm:text-8xl font-bold text-white text-center leading-[76.8px] header">
              Frontend Developer & Interface Craftsman
            </h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: headerAnimationComplete ? 1 : 0,
                y: headerAnimationComplete ? 0 : 20,
              }}
              transition={{
                delay: headerAnimationComplete ? 0.2 : 0,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-base leading-[24px] font-normal text-white text-center"
            >
              I build high-performance, user-centric web solutions that blend
              innovation, speed, and scalability. Let&apos;s build interfaces
              that feel as good as they look.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: headerAnimationComplete ? 1 : 0,
            y: headerAnimationComplete ? 0 : 30,
          }}
          transition={{
            delay: headerAnimationComplete ? 0.4 : 0,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex items-center justify-center gap-8 flex-col flex-wrap sm:flex-row"
        >
          <Link target="_blank" href="https://cal.com/raymond-joseph-kba6ig">
            <Button variant="primary">
              <div className="size-5">
                <CallIcon />
              </div>
              <span>Book a call</span>
            </Button>
          </Link>
          <Button
            target="_blank"
            variant="link"
            href="https://docs.google.com/document/d/1CVT6vPFTgEFd9ysvsfjWaOrHK7eLgzXqK8CIYYXLhGg/edit?usp=sharing"
          >
            <div className="size-5">
              <LinkIcon />
            </div>
            <span>My resume</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
