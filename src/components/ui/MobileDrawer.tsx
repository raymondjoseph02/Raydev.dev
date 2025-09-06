"use client";
import { MobileMenuProps } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from "@/animation/framer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useCallback, useRef } from "react";
import SvgCurve from "./curve/Curve";
import Socials, { socials } from "./Socials";

function MobileMenu({ isOpen, setIsOpen, links }: MobileMenuProps) {
  const path = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Use useCallback to prevent function recreation on every render
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      handleClose();
    }
  }, [path]);

  // Handle click outside and escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    //     // Add small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleClose]);

  // Fix screen/prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current overflow value
      const originalOverflow = document.body.style.overflow;

      // Prevent body scroll
      document.body.style.overflow = "hidden";

      return () => {
        // Restore original overflow when menu closes
        document.body.style.overflow = originalOverflow;
      };
    } else {
      // Ensure body scroll is restored when menu is not open
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        variants={menuSlide}
        initial="initial"
        animate={isOpen ? "enter" : "exit"}
        exit="exit"
        className="fixed top-0 h-svh bg-black right-0 w-8/12 pt-40 flex flex-col justify-between"
      >
        <ul className="space-y-10">
          {links.map((link, index) => {
            const active = path.toLowerCase() === link.path.toLowerCase();
            return (
              <motion.li
                custom={index}
                variants={slide}
                initial="initial"
                animate={isOpen ? "enter" : "exit"}
                exit="exit"
                key={link.title}
                className="flex items-center"
              >
                <div
                  className={`border border-collapse border-gray-300 transition-all ease-in-out duration-300 ${
                    active ? "w-12" : "w-8"
                  } h-0.5`}
                />
                <Link
                  className={`text-4xl transition-all ease-in-out duration-300 ${
                    active ? "opacity-100" : "opacity-75"
                  } font-semibold leading-[27px] text-white hover:opacity-85`}
                  href={link.path}
                  onClick={handleClose}
                >
                  {link.title}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <SvgCurve isOpen={isOpen} />
        <div className="flex justify-between items-center pr-10 pb-6">
          {socials.map((social, index) => {
            return (
              <motion.div
                custom={index}
                variants={slide}
                initial="initial"
                animate={isOpen ? "enter" : "exit"}
                exit="exit"
                className="text-white text-4xl"
                key={index}
              >
                <Link href={social.link}> {social.icon}</Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default MobileMenu;
