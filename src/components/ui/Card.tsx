import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import { CardProps } from "@/types/types";

const isPrivate = (val?: string) => !val || val.toLowerCase() === "private";

function Card({
  description,
  stack,
  thumbnail,
  title,
  github,
  liveLink,
}: CardProps) {
  return (
    <div className="group flex w-full gap-5 items-start p-8 sm:h-105 border border-gray-250 rounded-2xl overflow-hidden perspective-dramatic flex-col sm:flex-row cursor-pointer ">
      <div className="space-y-5 max-w-lg flex-1">
        <article className="space-y-5">
          <h5 className="text-4xl text-white font-bold capitalize">{title}</h5>
          <p className="text-base font-normal text-gray-350 leading-[24px] text-pretty">
            {description}
          </p>
        </article>
        <ul className="flex items-center gap-2 flex-wrap">
          {stack.map((stk) => (
            <li
              key={stk}
              className="bg-[#1414146f] px-3 py-1.5 rounded-full text-white/70 w-fit capitalize"
            >
              <p className="uppercase">{stk}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 flex-wrap">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition duration-300"
            >
              <ExternalLink size={14} />
              Live Site
            </Link>
          )}
          {isPrivate(github) ? (
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] text-gray-400 text-sm border border-gray-700">
              <Lock size={14} />
              Private
            </span>
          ) : (
            <Link
              href={github!}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] text-white text-sm hover:bg-gray-800 transition duration-300 border border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>

      <div
        className="flex-1 h-full overflow-hidden rounded-lg
                  transition ease-linear duration-300 hidden sm:block"
      >
        <Image src={thumbnail} alt={title} className="size-full object-cover" />
      </div>
    </div>
  );
}
export default Card;
