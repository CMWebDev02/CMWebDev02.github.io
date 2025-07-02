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
      className={`h-12 md:h-screen w-full md:w-12 group md:transition-[width] duration-400 ease-in-out md:hover:w-30 overflow-x-hidden bg-blue-200`}
    >
      <nav className="flex md:flex-col align-middle items-center p-1 h-full w-full gap-2">
        <Image
          id="miniature-website-logo"
          src="./assets/CMWebDev-Graphic.svg"
          alt="CMWebDev Website Logo"
          width={150}
          height={150}
          className="h-10 w-10 md:w-full md:h-auto self-baseline"
        />

        <div
          className={`h-full md:h-1/4 flex flex-row md:flex-col justify-around overflow-x-scroll md:overflow-x-hidden gap-2 md:sticky md:top-40`}
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
