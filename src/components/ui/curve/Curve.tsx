// components/curve/SvgCurve.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  isOpen?: boolean; // optional: control from parent if you want
};

export default function SvgCurve({ isOpen = true }: Props) {
  const [h, setH] = useState(0);

  useEffect(() => {
    const setHeight = () => setH(window.innerHeight || 0);
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  // don't render until we have a height
  if (!h)
    return <svg className="absolute top-0 left-[-99px] w-[100px] h-full" />;

  const initialPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;

  return (
    <svg
      className="absolute top-0 left-[-99px] w-[100px] h-full pointer-events-none"
      viewBox={`0 0 200 ${h}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={initialPath}
        fill="black" // color the shape
        stroke="none"
        animate={isOpen ? { d: targetPath } : { d: initialPath }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
    </svg>
  );
}
