import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section>
      <div className="container-wrapper flex gap-18  lg:gap-12 items-start flex-col md:flex-row">
        <div className="md:sticky top-2/12 max-w-lg pr-12 space-y-5">
          <h4 className="text-white text-6xl font-bold leading-[57px]">
            Experience
          </h4>
          <p className="text-gray-350 text-base font-normal leading-[24px]">
            Crafting intuitive digital experiences through design and
            development expertise
          </p>
        </div>
        <div className="grow space-y-8  flex flex-col items-center sm:items-end">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
export default Experience;
