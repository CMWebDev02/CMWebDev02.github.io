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
      className={`h-screen w-24 group transition-[width] duration-400 ease-in-out hover:w-30 overflow-x-hidden`}
    >
      <nav
        className={`hidden md:flex bg-blue-200 flex-col align-middle items-center p-1 h-full w-full`}
      >
        <Image
          id="miniature-website-logo"
          src="./assets/CMWebDev-Graphic.svg"
          alt="CMWebDev Website Logo"
          width={150}
          height={150}
          className="w-20 self-baseline"
        />

        <div className={`h-1/4 flex flex-col justify-around`}>
          <NavLink 
            href="./"
            linkName="Home"
            icon={faHouse}
          />
          <NavLink 
            href="./about"
            linkName="About"
            icon={faUser}
          />
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
          <NavLink 
            href="./contact"
            linkName="Contact"
            icon={faAddressBook}
          />
        </div>
      </nav>
    </header>
  );
}
