"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Layers,
} from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Frontend Development",
    description:
      "Building performant, pixel-perfect web interfaces with React, Next.js, and Tailwind CSS that scale seamlessly.",
  },
  {
    Icon: Smartphone,
    title: "Responsive Design",
    description:
      "Crafting fluid layouts that look and feel great on every screen — from mobile phones to widescreen displays.",
  },
  {
    Icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating Figma designs into living interfaces with meticulous attention to spacing, typography, and interaction.",
  },
  {
    Icon: Zap,
    title: "Performance Optimization",
    description:
      "Auditing and improving web apps for speed — lazy loading, code splitting, and Core Web Vitals tuning.",
  },
  {
    Icon: Globe,
    title: "API Integration",
    description:
      "Connecting frontends to REST and GraphQL APIs, third-party services, and backend systems with clean, reliable data flows.",
  },
  {
    Icon: Layers,
    title: "Component Systems",
    description:
      "Designing reusable component libraries that keep codebases consistent, maintainable, and easy to scale.",
  },
];

const CARD_WIDTH = 280;
const STEP = 260;

export default function WhatDoIDo() {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(0);
  const total = services.length;

  const mod = (n: number) => ((n % total) + total) % total;
  const next = () => setCurrent((c) => mod(c + 1));
  const prev = () => setCurrent((c) => mod(c - 1));

  const getOffset = (idx: number) => {
    let d = idx - current;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  const getScale = (abs: number) => {
    if (abs === 0) return 1;
    if (abs === 1) return 0.9;
    if (abs === 2) return 0.7;
    return 0.55;
  };

  const getOpacity = (abs: number) => {
    if (abs === 0) return 1;
    if (abs === 1) return 0.75;
    if (abs === 2) return 0.45;
    return 0;
  };

  return (
    <section className="border-t bg-black border-gray-250 pt-20 pb-20 overflow-hidden">
      <div className="container-wrapper">
        {/* Header */}
        <div className="space-y-4 flex items-center justify-center flex-col mb-16">
          <h2 className="text-white text-5xl font-normal leading-[57.2px] text-center">
            What I do
          </h2>
          <p className="text-base font-normal text-gray-350 leading-[24px] max-w-3xl text-center">
            From crafting pixel-perfect interfaces to building scalable systems,
            here&apos;s how I bring ideas to life.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center select-none touch-none"
          style={{ height: 360 }}
          onPointerDown={(e) => {
            dragStartX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            const delta = e.clientX - dragStartX.current;
            if (delta < -50) next();
            else if (delta > 50) prev();
          }}
        >
          {services.map((service, idx) => {
            const offset = getOffset(idx);
            const abs = Math.abs(offset);
            const scale = getScale(abs);
            const opacity = getOpacity(abs);
            const x = offset * STEP;
            const zIndex = abs === 0 ? 30 : abs === 1 ? 20 : abs === 2 ? 10 : 0;
            const isActive = offset === 0;
            const { Icon } = service;

            return (
              <motion.article
                key={idx}
                whileInView={{ x, scale, opacity }}
                viewport={{
                  amount: 0.6,
                  once: true,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: CARD_WIDTH,
                  zIndex,
                  pointerEvents: abs >= 3 ? "none" : "auto",
                }}
                onClick={() => {
                  if (!isActive) setCurrent(idx);
                }}
                className={`rounded-2xl p-8 flex flex-col gap-6 h-[300px] bg-[#0f0f0f] border transition-colors ${
                  isActive
                    ? "border-white/20 cursor-default"
                    : "border-white/5 cursor-pointer"
                }`}
              >
                <div className="size-12 rounded-xl flex items-center justify-center bg-white/10">
                  <Icon className="size-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white text-xl font-medium leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-350 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="text-gray-350 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full size-12 flex items-center justify-center"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-6 h-2" : "bg-gray-600 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="text-gray-350 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full size-12 flex items-center justify-center"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
