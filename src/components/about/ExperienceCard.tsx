import Image from "next/image";
import defifundr from "../../../public/png/defifundr.png";
function ExperienceCard() {
  return (
    <div className="border w-full max-w-2xl p-4  border-gray-250 rounded-2xl flex  gap-4 sm:gap-6 flex-col sm:flex-row">
      <div>
        <p className="text-white text-base font-normal leading-[24px] text-pretty">
          Oct — November 2024
        </p>
      </div>
      <div className="w-full max-w-md h-full p-4 bg-[#222226]  space-y-8 rounded-lg">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-md bg-gray-150/20 overflow-hidden flex items-center justify-center">
              <Image src={defifundr} alt="" width={26} height={26} />
            </div>
            <div className="">
              <p className="text-lg lg:text-xl font-semibold text-white leading-[30px] truncate">
                Frontend web developer
              </p>
              <p className="text-base font-normal text-gray-350 leading-[24px]">
                Vynix lab inc.
              </p>
            </div>
          </div>
          <p className="text-base font-normal text-gray-350 leading-[24px]">
            Worked on crafting seamless payment experiences that drive
            efficiency for businesses. Redesigned the Almond Pay website to
            enhance user experience and improve accessibility.
          </p>
        </div>
        <ul className="space-y-1">
          <li className="text-base font-normal text-white leading-[24px]">
            Building Design Systems
          </li>
          <li className="text-base font-normal text-white leading-[24px]">
            Designing Web Applications
          </li>
          <li className="text-base font-normal text-white leading-[24px]">
            Streamlining Payment Operations
          </li>
          <li className="text-base font-normal text-white leading-[24px]">
            Website Redesign
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ExperienceCard;
