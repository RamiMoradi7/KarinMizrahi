"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-30 border-b border-t">
      <div className="w-full text-gray-700 bg-white">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-2 lg:p-4">
            <Link href="/#hero" passHref>
              <Image
                src={"/logo.jpg"}
                priority
                alt="logo"
                width={70}
                height={70}
                className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-lg"
                />
            </Link>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={toggleMenu}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <MobileMenu
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
