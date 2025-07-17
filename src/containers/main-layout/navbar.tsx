"use client";
import Image from "next/image";

import { faFolderTree } from "@fortawesome/free-solid-svg-icons/faFolderTree";
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@/components/client/nav-link";

export function NavBar() {
  return (
    <header
      className={`h-12 lg:h-16 w-full group duration-400 ease-in-out overflow-x-hidden bg-primary`}
    >
      <nav className="flex flex-row justify-between items-center p-1 h-full w-full gap-2">
        <div className="h-10 lg:h-14 w-1/5 flex justify-start">
          <Image
            id="miniature-website-logo"
            src="./assets/CMWebDev.svg"
            alt="CMWebDev Website Logo"
            width={150}
            height={150}
            className="h-full w-auto"
          />
        </div>

        <div
          className={`h-full w-4/5 md:w-3/4 lg:w-1/2 flex flex-row overflow-x-scroll overflow-y-hidden gap-2`}
        >
          <NavLink href="./" linkName="Home" icon={faHouse} />
          <NavLink href="./about" linkName="About" icon={faUser} />
          <NavLink
            href="./portfolio"
            linkName="Portfolio"
            icon={faFolderTree}
          />
          <NavLink
            href="./credentials"
            linkName="Credentials"
            icon={faIdCard}
          />
          <NavLink href="./contact" linkName="Contact" icon={faAddressBook} />
        </div>
      </nav>
    </header>
  );
}
