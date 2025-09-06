import Image from "next/image";
import dummyImage from "../../../public/png/WhatsApp_Image_2024-12-03_at_16.19.56-removebg-preview-removebg-preview.png";
function ReviewCard() {
  return (
    <div className="p-5 space-y-8 max-w-sm bg-[#ffffff0f] border border-[#ffffff0f] rounded-2xl shadow-sm shadow-[#676565]">
      <article className="space-y-6">
        <p className="text-xl font-semibold leading-[30px] text-white">
          &quot;...demonstrated exceptional versatility and proactivity in
          thinking outside the box. &quot;
        </p>
        <p className="text-base font-normal text-gray-350 leading-[24px]  text-pretty">
          We have been collaborating with Ekene since the inception of our
          project and company last year. Ekene is the best designer we have
          worked with so far. From setting up our landing pages and creating
          prototypes to developing our app, he has demonstrated exceptional
          versatility and proactivity in thinking outside the box. I highly
          recommend him; he is a trusted professional for all design needs.
        </p>
      </article>
      <div className="flex items-center gap-4">
        <div className="size-8 rounded-full overflow-hidden">
          <Image
            src={dummyImage}
            alt="Abayomi Egbemode"
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="text-base font-medium leading-[24px] text-white line-clamp-1">
            Abayomi Egbemode
          </p>
          <p className="text-base font-normal leading-[24px] text-gray-350 line-clamp-1">
            Product Designer, MTN - Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;
