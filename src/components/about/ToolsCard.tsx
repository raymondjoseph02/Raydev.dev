import { ToolCardProps } from "@/types/types";

function ToolsCard({ title, icon }: ToolCardProps) {
  return (
    <div className="rounded-lg bg-gray-250 h-21 w-24 py-4 justify-between flex flex-col items-center px-1">
      <div className="text-white">{icon}</div>
      <p className="text-white text-base font-normal leading-[24px] truncate text-center capitalize w-full">
        {title}
      </p>
    </div>
  );
}
export default ToolsCard;
