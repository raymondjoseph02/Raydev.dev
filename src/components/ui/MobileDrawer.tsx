"use client";
import { MobileMenuProps } from "@/types/types";
import { motion } from "framer-motion";
import { menuSlide, slide } from "@/animation/framer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SvgCurve from "./curve/Curve";
function MobileMenu({ isOpen, setIsOpen, links }: MobileMenuProps) {
  const path = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [path]);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate={isOpen ? "enter" : "exit"}
      exit="exit"
      className="fixed top-0 h-svh bg-black right-0 w-8/12  pt-40"
    >
      <ul className="space-y-10">
        {links.map((link, index) => {
          const active = path.toLowerCase() === link.path.toString();
          return (
            <motion.li
              custom={index}
              variants={slide}
              initial="initial"
              animate={isOpen ? "enter" : "exit"}
              exit="exit"
              key={link.title}
              className="flex items-center "
            >
              <div
                className={`border border-collapse border-gray-150 transition-all ease-in-out  duration-300 ${
                  active ? "w-12" : "w-8"
                } h-fit`}
              />
              <Link
                className={`text-4xl transition-all ease-in-out  duration-300 ${
                  active ? "opacity-100" : "opacity-75"
                } font-semibold leading-[27px] text-white  hover:opacity-85 `}
                href={link.path}
              >
                {link.title}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      <SvgCurve isOpen={isOpen} />
    </motion.div>
  );
}
export default MobileMenu;
