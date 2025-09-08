import { ToolCardProps } from "@/types/types";
import { FaJs } from "react-icons/fa6";

function ToolsCard({ title, icon }: ToolCardProps) {
  return (
    <div className="rounded-lg bg-gray-250 gap-1 w-24 py-4 justify-between flex flex-col items-center px-1">
      <div className="text-white h-10 w-10">{icon}</div>
      <p className="text-white text-base font-normal leading-[24px] truncate text-center capitalize w-full">
        {title}
      </p>
    </div>
  );
}
export default ToolsCard;
