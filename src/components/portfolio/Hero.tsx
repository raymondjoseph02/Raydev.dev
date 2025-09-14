import { useState } from "react";
import Button from "../ui/Button";
import { PortfolioHeroProps } from "@/types/types";

function Hero({ activeTab, setActiveTab, tabs }: PortfolioHeroProps) {
  return (
    <section className="pt-20 sm:pt-28 pb-18 sm:pb-40.5">
      <div className="flex items-center justify-center flex-col container-wrapper gap-11">
        <h1 className="text-4xl sm:text-8xl font-normal text-white text-center">
          Some highlights of my work
        </h1>
        <div className="flex gap-2 px-5 sm:px-0">
          {tabs?.map((tab, index) => {
            const active = activeTab.toLowerCase() === tab.toLowerCase();
            return (
              <Button
                handleClick={() => setActiveTab(tab)}
                variant={active ? "primary" : "secondary"}
                key={index}
              >
                <span className="capitalize">{tab}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
