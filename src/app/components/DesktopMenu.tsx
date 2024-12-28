import React from "react";
import { menuItems, TMenuItems } from "../utils/constants";

const MenuItem = ({ hash, link, title }: TMenuItems) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hash) {
      e.preventDefault();
      window.history.pushState({}, "", link);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = 100;

          const sectionTop =
            element.getBoundingClientRect().top + window.pageYOffset;
          const scrollToPosition = sectionTop - navbarHeight;

          window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <a
      onClick={handleClick}
      className="px-8 py-2 mt-2 text-lg font-semibold text-black bg-transparent rounded-lg hover:bg-[#E43AA7] hover:text-white focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <span className="text-shadow-md cursor-pointer">{title}</span>
    </a>
  );
};

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex flex-col gap-3 pb-4 md:pb-0 md:justify-end md:flex-row ">
      {menuItems.map(({ hash, link, title }) => (
        <MenuItem
          key={hash}
          hash={hash}
          link={link}
          title={title}
        />
      ))}
    </nav>
  );
}
