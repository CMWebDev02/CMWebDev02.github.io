"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faFolderTree } from "@fortawesome/free-solid-svg-icons/faFolderTree";
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {

  return (
    <header
      className={`h-screen w-24 group transform duration-300 hover:w-30`}
    >
      <nav
        className={`bg-blue-200 flex flex-col align-middle items-center p-1 h-full w-full`}
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
          <Link href={"./"} className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <Link href={"./about"}>
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
          <Link href={"./portfolio"}>
            <FontAwesomeIcon icon={faFolderTree} /> Portfolio
          </Link>
          <Link href={"./credentials"}>
            <FontAwesomeIcon icon={faIdCard} /> Credentials
          </Link>
          <Link href={"./contact"} className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faAddressBook} />
            <p className="hidden group-hover:block">Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
