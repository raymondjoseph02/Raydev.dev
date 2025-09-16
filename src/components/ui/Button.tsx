import { ButtonProps } from "@/types/types";
import Link from "next/link";

function Button({ children, handleClick, variant, href, target }: ButtonProps) {
  const classes = () => {
    switch (variant) {
      case "primary":
        return "bg-white shadow-[inset_0_0_3px_#4039c2] hover:bg-gray-800 hover:text-white transition duration-800 ease-in-out";
      case "secondary":
        return "bg-gray-500 text-white";
      case "link":
        return "text-white bg-gray-600 "; // add link style here
      default:
        return "bg-white";
    }
  };

  const content = () => {
    switch (variant) {
      case "link":
        return (
          <Link
            href={href!}
            target={target}
            className={`${classes()} py-2 px-3 rounded-full gap-3 flex items-center max-h-12 text-sm min-w-44 min-h-12 justify-center cursor-pointer`}
          >
            {children}
          </Link>
        );

      case "primary":
      case "secondary":
        return (
          <button
            onClick={handleClick}
            className={`${classes()} py-2 px-3 rounded-full gap-3 flex items-center max-h-12 text-sm min-w-38 min-h-12 justify-center cursor-pointer`}
          >
            {children}
          </button>
        );

      default:
        return (
          <button
            onClick={handleClick}
            className={`${classes()} py-2 px-3 rounded-full gap-3 flex items-center max-h-12 text-sm min-w-44 min-h-12 justify-center cursor-pointer`}
          >
            {children}
          </button>
        );
    }
  };

  return <>{content()}</>;
}

export default Button;
