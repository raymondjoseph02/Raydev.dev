"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { PlusIcon } from "../../../public/svg/general";
import HeroImages from "./HeroImage";

function AboutHero() {
  const [isFullView, setIsFullView] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure the full content height
  useEffect(() => {
    if (contentRef.current) {
      const fullHeight = contentRef.current.scrollHeight;
      setContentHeight(fullHeight);
    }
  }, []);

  const handleView = () => {
    setIsFullView(!isFullView);
  };

  const collapsedHeight = "36.5rem";

  return (
    <section className="pt-20 sm:pt-28 pb-18 sm:pb-40.5">
      <motion.div
        ref={contentRef}
        initial={{
          height: collapsedHeight,
        }}
        animate={{
          height: isFullView ? contentHeight || "auto" : collapsedHeight,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother animation
        }}
        className="container-wrapper overflow-hidden relative pt-10 pb-10"
        style={{
          willChange: isFullView ? "height" : "auto", // Optimize for animations
        }}
      >
        {/* Backdrop overlay with improved performance */}
        <motion.div
          className="absolute left-0 w-full h-30  sm:h-40 bottom-0 right-0 z-10"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
            backdropFilter: "blur(6px)",
          }}
          animate={{
            opacity: isFullView ? 0 : 1,
            pointerEvents: isFullView ? "none" : "auto",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button handleClick={handleView} variant="primary">
              <span>{isFullView ? "Show less" : "Continue reading"}</span>
              <motion.div
                animate={{ rotate: isFullView ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <PlusIcon />
              </motion.div>
            </Button>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-[57%_40%] lg:grid-cols-[67%_30%] gap-12">
          <div className="space-y-5">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-normal sm:leading-[57px] text-white"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
            >
              Frontend web Developer.
            </motion.h1>

            <motion.div className="space-y-4" layout>
              <motion.p
                className="text-base sm:text-xl font-normal leading-[30px] text-gray-350"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.5, delay: 0.03 }}
              >
                I&apos;m Raymond Joseph, a creative and detail-oriented
                Front-End Developer with a strong focus on user experience and
                interface design. Passionate about building solution-centered
                applications that prioritize performance, accessibility, and
                modern UI interactions.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.5, delay: 0.03 }}
                className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
              >
                Adept at leveraging React, Next.js, TypeScript, and Tailwind
                CSS to craft visually engaging, highly interactive, and scalable
                web solutions. With hands-on experience collaborating with
                teams, integrating APIs, and optimizing front-end performance, I
                thrive in challenging environments that push me to solve
                real-world problems through code.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.5, delay: 0.03 }}
                className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
              >
                Constantly exploring new technologies like Framer Motion, GSAP,
                and Three.js, I aim to create intuitive and immersive digital
                experiences that feel as good as they look.
              </motion.p>
              <motion.p
                className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Beyond the frontend, I also have hands-on experience with
                Node.js and Express, giving me a broader understanding of
                full-stack development and enabling more effective collaboration
                with backend teams.
              </motion.p>
              {/* Expandable content with stagger animation */}
              <motion.div
                className="space-y-4"
                animate={{
                  opacity: isFullView ? 1 : 0,
                  y: isFullView ? 0 : 20,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                }}
              >
                <motion.p
                  className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={isFullView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I care deeply about the craft — clean code, consistent
                  component systems, and interfaces that are both beautiful and
                  functional. Whether working solo or within a team, I bring the
                  same level of precision and ownership to every project I touch.
                </motion.p>

                <motion.p
                  className="text-xl font-normal leading-[30px] text-gray-350"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={isFullView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Ready to build something exceptional together?
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Image gallery with subtle animations */}
          <HeroImages />
        </div>
      </motion.div>
    </section>
  );
}

export default AboutHero;
