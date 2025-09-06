import { NavLink } from "@/types/types";
import Link from "next/link";

function NavLinks({ links }: { links: NavLink[] }) {
  return (
    <ul className="flex items-center gap-6">
      {links.map((link) => (
        <li key={link.title}>
          <Link
            className="text-lg font-medium leading-[27px] text-white hover:opacity-85 ease-in-out transition-colors duration-300"
            href={link.path}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
