"use client";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import { useEffect, useState } from "react";
const tabs = ["Personal", "Professional"];

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Personal");

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
        isLoading ? "h-svh sm:h-screen justify-center items-center " : "h-auto"
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
