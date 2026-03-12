import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
export const socials = [
  {
    link: "https://x.com/RayDev02",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
  {
    link: "https://www.linkedin.com/in/raydev02/",
    icon: <FaLinkedin />,
    label: "Linkedin",
  },
  {
    link: "https://github.com/raymondjoseph02",
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
            className="size-10 rounded-full justify-center hover:bg-[#242424] text-white flex items-center transition ease-in-out duration-300 will-change-auto text-2xl"
            href={social.link}
            target="_blank"
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Socials;
