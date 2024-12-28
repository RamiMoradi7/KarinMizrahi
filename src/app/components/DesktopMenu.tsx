import Link from "next/link";
import React from "react";
import { MENU_ITEMS, TMenuItem } from "../utils/constants";

const MenuItem = ({ href, label, onClick }: TMenuItem) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Link
      href={href}
      className="px-8 py-2 mt-2 text-lg font-semibold text-black bg-transparent rounded-lg hover:bg-[#E43AA7] hover:text-white focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <span
        className="text-shadow-md"
        onClick={handleClick}
      >
        {label}
      </span>
    </Link>
  );
};

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex flex-col gap-3 pb-4 md:pb-0 md:justify-end md:flex-row ">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </nav>
  );
}
