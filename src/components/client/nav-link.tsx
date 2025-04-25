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
        <Link href={href} className="w-full flex gap-2 items-center">
            <FontAwesomeIcon icon={icon} className="w-auto"/>
            <div className="w-0 transition-[width] duration-300 ease-initial group-hover:w-20">
                <p className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{linkName}</p>
            </div>
        </Link>
    )
}