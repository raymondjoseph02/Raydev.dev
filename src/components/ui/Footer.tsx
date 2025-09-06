import Socials from "./Socials";

function Footer() {
  return (
    <footer
      className="relative h-[300px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+300px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-300px)] container-wrapper">
          <div className=" pb-4 pt-30 flex w-full justify-between items-center  border-b border-b-gray-250 ">
            <div>
              <p className="text-base font-normal text-white leading-[24px]  text-pretty">
                Copyright © 2024 Raymond Joseph
              </p>
              <p className="text-base font-normal text-gray-350 leading-[24px]  text-pretty">
                Last updated - May 2025
              </p>
            </div>
            <Socials />
          </div>
          <p
            data-text="Raymond j"
            className=" text-[80px] sm:text-[100px] md:text-[140px] lg:text-[170px] xl:text-[220px] text-stroke font-black absolute -bottom-28 text-center mx-auto left-0"
          >
            Raymond J.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
