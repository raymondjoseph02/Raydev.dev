import Image from "next/image";
import { CardProps } from "@/types/types";
function Card({ description, stack, thumbnail, title }: CardProps) {
  return (
    <div className="flex w-full gap-5 items-center  p-8 h-105 border border-gray-250 rounded-2xl overflow-hidden perspective-dramatic">
      <div className="space-y-5 max-w-lg">
        <article className="space-y-5">
          <h5 className="text-4xl text-white font-bold">{title}</h5>
          <p className="text-base font-normal text-gray-350 leading-[24px]  text-pretty">
            {description}
          </p>
        </article>
        <ul className="flex items-center gap-2">
          {stack.map((stk) => (
            <li
              key={stk}
              className="bg-[#141414] px-3 py-1.5 rounded-full text-white w-fit"
            >
              <p>{stk}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-full overflow-hidden rounded-lg pt-13.5 px-13.5 hover:scale-3d hover:scale-105 transition ease-linear duration-300 hover:rotate-z-3 cursor-pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="size-full object-cover "
        />
      </div>
    </div>
  );
}
export default Card;
