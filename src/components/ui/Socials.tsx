import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
export const socials = [
  {
    link: "/",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
  {
    link: "/",
    icon: <FaLinkedin />,
    label: "Linkedin",
  },
  {
    link: "/",
    icon: <FaGithub />,
    label: "Github",
  },
];
function Socials() {
  return (
    <ul className="flex items-center gap-2 justify-between w-full">
      {socials.map((social) => (
        <li className="relative" key={social.label}>
          <Link
            aria-label={social.label}
            className="size-10 rounded-full justify-center hover:bg-[#242424] text-white flex items-center transition ease-in-out duration-300 will-change-auto text-4xl"
            href={social.link}
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Socials;
