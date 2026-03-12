"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import PlntrCeo from "../../../public/png/azeez.jpeg";
import Smart from "../../../public/png/smart.jpeg";
import Rotimi from "../../../public/png/rotimi.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Abdul-Azeez Ojo",
    role: "CEO, PLNTR",
    image: PlntrCeo,
    linkedin: "https://www.linkedin.com/in/abdul-azeezojo/",
    content:
      "I had the pleasure of collaborating with Raymond on a recent project for a PLNTR client. He was fast, responsive, and delivered a pixel-perfect UI that matched the design flawlessly. His attention to detail and efficiency made the development process smooth and enjoyable. Highly recommend working with him.",
  },
  // {
  //   name: "Oluwaseun Adefioye",
  //   role: "Product Manager, Fintech",
  //   image: PlntrCeo,
  //   linkedin: "https://linkedin.com",
  //   content:
  //     "Raymond is a talented developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is impressive. I look forward to working with him again on future projects.",
  // },
  {
    name: "Olarotimi Balogun",
    role: "Senior Developer & Mentor",
    image: Rotimi,
    linkedin: "https://www.linkedin.com/in/rotimi-balogun/",
    content:
      "Watching Raymond grow as a developer has been genuinely rewarding. He asks the right questions, applies feedback quickly, and pushes himself beyond what's required. His drive to understand the 'why' behind every decision sets him apart. He's not just building UIs he's building the mindset of a great engineer.",
  },
  {
    name: "Ekene Smart",
    role: "Product Designer & Webflow Developer",
    image: Smart,
    linkedin: "https://www.linkedin.com/in/smartofux/",
    content:
      "Collaborating with Raymond was one of the smoothest design-to-development handoffs I've experienced. He respects the design intent, asks clarifying questions before making assumptions, and delivers interfaces that look exactly as designed, sometimes even better. Any designer would be lucky to have him bring their work to life.",
  },
];

function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go(current === 0 ? reviews.length - 1 : current - 1);
  const next = () => go(current === reviews.length - 1 ? 0 : current + 1);

  const review = reviews[current];

  return (
    <section className="bg-black pt-20 pb-15">
      <div className="container-wrapper space-y-16">
        <article className="space-y-4 flex items-center justify-center flex-col">
          <h2 className="text-white text-5xl font-normal leading-[57.2px]">
            Reviews from people I&apos;ve worked with
          </h2>
          <p className="text-base font-normal text-gray-350 leading-[24px] text-pretty max-w-3xl text-center">
            Don&apos;t just take my word for it - explore the testimonials of my
            clients, who have experienced firsthand how my work has elevated
            their businesses.
          </p>
        </article>

        <div className="relative flex items-center justify-center min-h-[420px]">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 z-10 text-gray-350 hover:text-white transition-colors text-2xl  border rounded-[100vh] size-12 flex items-center justify-center "
          >
            <ChevronLeft />
          </button>

          {/* Slide content */}
          <div className="w-full max-w-3xl overflow-hidden px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) next();
                  else if (info.offset.x > 50) prev();
                }}
                className="flex flex-col items-center text-center gap-10 cursor-grab active:cursor-grabbing"
              >
                <p className="text-white text-xl md:text-2xl font-normal leading-relaxed text-pretty">
                  {review.content}
                </p>

                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="size-16 rounded-full overflow-hidden ring-2 ring-gray-400">
                      <Image
                        src={review.image.src}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="size-full object-cover"
                      />
                    </div>
                    <a
                      href={review.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-1 -right-1 bg-[#0A66C2] rounded-md p-1 flex items-center justify-center"
                    >
                      <FaLinkedinIn className="text-white text-xs" />
                    </a>
                  </div>
                  <div>
                    <p className="text-white text-lg font-medium">
                      {review.name}
                    </p>
                    <p className="text-gray-350 text-base">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 z-10 text-gray-350 hover:text-white transition-colors text-2xl  border rounded-[100vh] size-12 flex items-center justify-center "
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-6 h-2" : "bg-gray-400 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
