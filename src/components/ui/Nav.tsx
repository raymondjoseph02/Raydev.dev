"use client";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import NavLinks from "./NavLinks";
import profileImage from "../../../public/png/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview.png";
import { useState } from "react";
import MobileMenu from "./MobileDrawer";
import { menuAnimate } from "@/animation/gsap";
import { useGSAP } from "@gsap/react";

// Types
interface NavLink {
  path: string;
  title: string;
}

interface NavProps {
  className?: string;
}

function Nav({ className = "" }: NavProps) {
  const links: NavLink[] = [
    { path: "/portfolio", title: "Portfolio" },
    { path: "/about-me", title: "About me" },
  ];
  const mobileLinks: NavLink[] = [
    { path: "/", title: "Home" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/about-me", title: "About me" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    menuAnimate(isOpen);
  }, [isOpen]);

  const handleOpenMenu = () => setIsOpen(!isOpen);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className={`w-full bg-transparent fixed top-0 z-50 ${className}`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-transparent">
        <Link
          aria-label="Navigate to home page"
          className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-all duration-200"
          href={"/"}
          onClick={handleCloseMenu}
        >
          <div className="w-14 h-14 rounded-full border-2 border-gray-400 p-1.5 overflow-hidden">
            <Image
              src={profileImage}
              alt="Raymond Joseph profile picture"
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
          <div className="hidden lg:inline-block">
            <p className="text-xl leading-7 font-bold text-white">
              Raymond Joseph
            </p>
            <p className="text-base font-normal leading-6 text-gray-300">
              Frontend Developer / UX Enthusiast
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex items-center gap-8 hidden">
          <NavLinks links={links} />
          <Socials />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={handleOpenMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="w-8  flex flex-col gap-1.5 relative z-50 md:hidden focus:outline-none  outline-none rounded transition-all duration-200 "
        >
          <div
            className="w-full h-0.5 bg-gray-100 perspective-origin-center origin-center  hamburger-line-top transition-all duration-300"
            aria-hidden="true"
          />
          <div
            className="w-full h-0.5 bg-gray-100 origin-center hamburger-line-middle transition-all duration-300"
            aria-hidden="true"
          />
          <div
            className="w-full h-0.5 bg-gray-100 perspective-origin-center origin-center hamburger-line-bottom transition-all duration-300"
            aria-hidden="true"
          />
        </button>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={mobileLinks} />
      </nav>
    </header>
  );
}

export default Nav;
