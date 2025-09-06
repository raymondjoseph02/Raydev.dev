import { gsap } from "gsap";

// Animation configuration
const ANIMATION_CONFIG = {
  duration: 0.3,
  ease: "power2.inOut",
} as const;

// Hamburger menu animation states
const HAMBURGER_STATES = {
  open: {
    top: { rotation: 45, y: 6 },
    middle: { opacity: 0, scale: 0.8 },
    bottom: { rotation: -45, y: -6 },
  },
  closed: {
    top: { rotation: 0, y: 0 },
    middle: { opacity: 1, scale: 1 },
    bottom: { rotation: 0, y: 0 },
  },
} as const;

/**
 * Animates the hamburger menu lines between open and closed states
 * @param isOpen - Whether the menu should be in open state
 * @returns GSAP timeline instance
 */
export const menuAnimate = (isOpen: boolean): gsap.core.Timeline => {
  const tl = gsap.timeline({
    defaults: {
      duration: ANIMATION_CONFIG.duration,
      ease: ANIMATION_CONFIG.ease,
    },
  });

  // Get current state based on isOpen parameter
  const state = isOpen ? HAMBURGER_STATES.open : HAMBURGER_STATES.closed;

  // Animate all lines simultaneously for better performance
  tl.to(".hamburger-line-top", {
    ...state.top,
  })
    .to(
      ".hamburger-line-middle",
      {
        ...state.middle,
      },
      "<" // Start at the same time as previous animation
    )
    .to(
      ".hamburger-line-bottom",
      {
        ...state.bottom,
      },
      "<" // Start at the same time as previous animation
    );

  return tl;
};

/**
 * Sets initial state for hamburger menu lines
 * Useful for ensuring consistent starting position
 */
export const initializeHamburgerMenu = (): void => {
  gsap.set(
    [".hamburger-line-top", ".hamburger-line-middle", ".hamburger-line-bottom"],
    {
      rotation: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    }
  );
};

/**
 * Mobile menu slide animation
 * @param isOpen - Whether the menu should slide in or out
 * @param menuSelector - CSS selector for the mobile menu element
 * @returns GSAP timeline instance
 */
export const mobileMenuSlide = (
  isOpen: boolean,
  menuSelector: string = ".mobile-menu"
): gsap.core.Timeline => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power3.inOut",
    },
  });

  if (isOpen) {
    tl.set(menuSelector, { display: "block" })
      .fromTo(
        menuSelector,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
        }
      )
      .fromTo(
        `${menuSelector} .menu-item`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.1,
        },
        "-=0.2"
      );
  } else {
    tl.to(`${menuSelector} .menu-item`, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
    })
      .to(
        menuSelector,
        {
          x: "100%",
          opacity: 0,
        },
        "-=0.1"
      )
      .set(menuSelector, { display: "none" });
  }

  return tl;
};

export type AnimationConfig = typeof ANIMATION_CONFIG;
export type HamburgerStates = typeof HAMBURGER_STATES;
