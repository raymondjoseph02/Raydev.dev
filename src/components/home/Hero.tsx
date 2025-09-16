"use client";
import { CallIcon, LinkIcon } from "../../../public/svg/general";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import sunshine_bg from "../../../public/webp/Sunshine bg.webp";
import DialogWrapper from "../ui/Dialog";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

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
          <Badge title="Currently accepting new projects" />
          <div className="flex flex-col items-center justify-center max-w-3xl gap-4.5 ">
            <h1 className="text-6xl sm:text-8xl font-bold text-white text-center leading-[76.8px] header">
              Frontend Developer & UI/UX Enthusiast
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
          <Button variant="primary">
            <div className="size-5">
              <CallIcon />
            </div>
            <span>Book a call</span>
          </Button>
          <Button
            target="_blank"
            variant="link"
            href="https://docs.google.com/document/d/15nqiZovoI_GUGg3iSMzxOjE52pcdPjNFEUCBhhBqMaY/edit?usp=sharing"
          >
            <div className="size-5">
              <LinkIcon />
            </div>
            <span>My resume</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: headerAnimationComplete ? 1 : 0,
            scale: headerAnimationComplete ? 1 : 0.95,
          }}
          transition={{
            delay: headerAnimationComplete ? 0.6 : 0,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-[24rem] lg:h-[50rem] w-full bg-red-400 rounded-2xl"
        />
      </div>
      <DialogWrapper isOpen={openDialog} setIsOpen={setOpenDialog}>
        <div className="max-w-5xl w-7xl bg-red-300 h-11/12 ">
          <iframe
            className="w-full h-full"
            src="/pdf/Raymond Joseph Front-End Deveioper.pdf"
          />
        </div>
      </DialogWrapper>
    </section>
  );
}
export default Hero;
