"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { PlusIcon } from "../../../public/svg/general";
import HeroImages from "./HeroImage";
import { MyTools } from "@/data/tools";
import ToolsCard from "./ToolsCard";

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
                I&apos;m Raymond Joseph, a product designer and no-code
                developer crafting digital experiences that deliver meaningful
                results. My approach combines strategic design thinking with
                technical execution to create products that stand out.
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
                My creative journey began in the tactile world of handcrafted
                arts, from signposts to screen printing, giving me a deep
                appreciation for craftsmanship and attention to detail.
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
                This foundation proved invaluable as I transitioned into the
                digital realm, evolving from graphic design to branding, and
                ultimately to product design, each step expanding my ability to
                solve complex problems with elegant solutions.
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
                Webflow and Framer have become my primary no-code tools,
                enabling me to bridge the gap between design and development.
                This portfolio itself demonstrates how I leverage no-code
                platforms to create responsive, high-performing digital
                experiences with a client-first mindset.
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
                  Currently, I&apos;m expanding my technical skill stack by
                  strengthening my coding capabilities and exploring AI prompt
                  engineering to stay at the forefront of industry innovations.
                </motion.p>

                <motion.p
                  className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={isFullView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Outside of design, my dedication to fitness reflects my
                  approach to creative work: disciplined, consistent, and always
                  pushing boundaries. This same mindset drives how I tackle
                  every project.
                </motion.p>

                <motion.p
                  className="text-base  sm:text-xl font-normal leading-[30px] text-gray-350"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={isFullView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  My diverse interests in literature, music, and culinary arts
                  aren&apos;t just hobbies; they&apos;re wellsprings of
                  inspiration that inform my design perspective and help me
                  create more human-centered digital experiences.
                </motion.p>

                <motion.p
                  className="text-xl font-normal leading-[30px] text-gray-350"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={isFullView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Ready to build something exceptional together?
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="space-y-4 pt-10">
              <h4 className="text-xl font-bold text-white leading-[30px]">
                Tools I use
              </h4>
              <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-wrap">
                {MyTools.map((tool, index) => (
                  <li key={index}>
                    <ToolsCard title={tool.title} icon={tool.icon} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image gallery with subtle animations */}
          <HeroImages />
        </div>
      </motion.div>
    </section>
  );
}

export default AboutHero;
