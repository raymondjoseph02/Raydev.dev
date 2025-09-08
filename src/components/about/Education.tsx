import ExperienceCard from "./ExperienceCard";

function Education() {
  return (
    <section className="pt-18">
      <div className="container-wrapper flex gap-18  lg:gap-12 items-start flex-col md:flex-row justify-between">
        <div className="md:sticky top-2/12 max-w-lg pr-12 space-y-5">
          <h4 className="text-white text-6xl font-bold leading-[57px]">
            Education
          </h4>
          <p className="text-gray-350 text-base font-normal leading-[24px]">
            Building a foundation of communication and technical skills to
            deliver exceptional digital solutions
          </p>
        </div>
        <div className="grow space-y-8  flex flex-col items-center sm:items-end">
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
export default Education;
