import Image, { StaticImageData } from "next/image";

type ExperienceCardProps = {
  duration: string;
  logo?: StaticImageData;
  title: string;
  company: string;
  description: string;
  bullets: string[];
};

function ExperienceCard({
  duration,
  logo,
  title,
  company,
  description,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="border w-full max-w-2xl p-4  border-gray-250 rounded-2xl flex  gap-4 sm:gap-6 flex-col sm:flex-row justify-between">
      <div>
        <p className="text-white text-base font-normal leading-[24px] text-pretty">
          {duration}
        </p>
      </div>
      <div className="w-full max-w-md h-full p-4 bg-[#222226]  space-y-8 rounded-lg">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            {logo && (
              <div className="size-11 rounded-md bg-gray-150/20 overflow-hidden flex items-center justify-center">
                <Image src={logo} alt="" width={26} height={26} />
              </div>
            )}
            <div className="">
              <p className="text-lg lg:text-xl font-semibold text-white leading-[30px] truncate">
                {title}
              </p>
              <p className="text-base font-normal text-gray-350 leading-[24px]">
                {company}
              </p>
            </div>
          </div>
          <p className="text-base font-normal text-gray-350 leading-[24px]">
            {description}
          </p>
        </div>
        <ul className="space-y-1">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-base font-normal text-white leading-[24px]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ExperienceCard;
