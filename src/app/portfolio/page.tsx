"use client";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import { useEffect, useState } from "react";
const tabs = ["clients work", "exploration"];

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("clients work");

  useEffect(() => {
    const stimulateLoading = () => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    };
    stimulateLoading();
  }, []);

  return (
    <div
      style={{
        willChange: "auto",
      }}
      className={`${
        isLoading
          ? "h-svh sm:h-screen justify-center items-center "
          : "h-auto min-h-screen"
      }`}
    >
      {isLoading ? (
        "loading"
      ) : (
        <>
          <Hero activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />
          <Projects activeTab={activeTab} />
        </>
      )}
    </div>
  );
}

export default Portfolio;
