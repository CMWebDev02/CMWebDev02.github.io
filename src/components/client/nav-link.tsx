import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  linkName: string;
  icon: IconDefinition;
}

export function NavLink({ href, linkName, icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="w-full flex flex-row gap-1 md:gap-2 
      transition-colors hover:text-secondary-background ease-in-out hover:drop-shadow-black hover:drop-shadow-md
      justify-center items-center content-center select-none text-white rounded-xl p-2"
    >
      <div className="hidden md:flex items-center content-center">
        <FontAwesomeIcon icon={icon} size={"2x"} />
      </div>
      <p className="text-3xl sm:text-4xl select-none">{linkName}</p>
    </Link>
  );
}
