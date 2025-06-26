import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    linkName: string;
    icon: IconDefinition;
}

export function NavLink({href, linkName, icon}: NavLinkProps) {
    return (
        <Link href={href} className="w-full flex gap-1 md:gap-2 items-center select-none">
            <div className="hidden md:flex w-auto">
                <FontAwesomeIcon icon={icon} className="w-auto"/>
            </div>
            <div className="hidden md:flex w-0 transition-[width] duration-500 ease-initial group-hover:w-20">
                <p className="opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">{linkName}</p>
            </div>

            <p className="flex md:hidden">{linkName}</p>
        </Link>
    )
}