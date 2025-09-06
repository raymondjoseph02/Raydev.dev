import { CallIcon } from "../../../public/svg/general";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import sunshine_bg from "../../../public/webp/Sunshine bg.webp";
function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('${sunshine_bg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-38 pb-13.5"
    >
      <div className=" flex justify-center container-wrapper flex-col items-center gap-11">
        <div className="flex flex-col items-center justify-center gap-6">
          <Badge title="Currently accepting new projects" />
          <div className="flex flex-col items-center justify-center max-w-3xl gap-4.5 ">
            <h1 className="text-6xl sm:text-8xl font-bold text-white   text-center leading-[76.8px]">
              Frontend Developer & UI/UX Enthusiast
            </h1>
            <p className="text-base leading-[24px] font-normal text-white text-center">
              I build high-performance, user-centric web solutions that blend
              innovation, speed, and scalability. Let’s build interfaces that
              feel as good as they
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 flex-col sm:flex-row">
          <Button variant="primary">
            <div className="size-5">
              <CallIcon />
            </div>
            <span>Book a call</span>
          </Button>
          <Button variant="secondary">
            <div className="size-5">
              <CallIcon />
            </div>
            <span>Book a call</span>
          </Button>
        </div>

        <div className="h-[24rem]  lg:h-[50rem] w-full bg-red-400 rounded-2xl"></div>
      </div>
    </section>
  );
}
export default Hero;
