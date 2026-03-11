import Image, { StaticImageData } from "next/image";
interface ReviewCardProps {
  content: string;
  image: StaticImageData;
  name: string;
  role: string;
}
function ReviewCard({ content, image, name, role }: ReviewCardProps) {
  return (
    <div className="p-5 space-y-8 max-w-sm bg-[#ffffff0f] border border-[#ffffff0f] rounded-2xl shadow-sm shadow-[#676565]">
      <article className="space-y-6">
        <p className="text-base font-normal text-gray-350 leading-[24px]  text-pretty">
          {content}
        </p>
      </article>
      <div className="flex items-center gap-4">
        <div className="size-8 rounded-full overflow-hidden">
          <Image
            src={image.src}
            alt={name}
            className="size-full object-cover"
            width={image.width}
            height={image.height}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-[24px] text-white line-clamp-1">
            {name}
          </p>
          <p className="text-base font-normal leading-[24px] text-gray-350 line-clamp-1">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;
