import Link from "next/link";
import { MENU_ITEMS, TMenuItem } from "../utils/constants";

const MenuItem = ({ href, label, link }: TMenuItem) => {
  return (
    <Link
      href={`${link}#${href}`}
      passHref
      className="px-8 py-2 mt-2 text-lg font-semibold text-black bg-transparent rounded-lg hover:bg-[#E43AA7] hover:text-white focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <span
        className="text-shadow-md"
      >
        {label}
      </span>
    </Link>
  );
};

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex flex-col gap-3 pb-4 md:pb-0 md:justify-end md:flex-row ">
      {MENU_ITEMS.map(({ href, label, link }) => (
        <MenuItem
          key={href}
          link={link}
          href={href}
          label={label}
        />
      ))}
    </nav>
  );
}
