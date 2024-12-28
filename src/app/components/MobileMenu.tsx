import { Dialog, Transition } from "@headlessui/react";
import { menuItems, TMenuItems } from "../utils/constants";

const MenuItem = ({
  hash,
  link,
  title,
  toggleMenu,
}: TMenuItems & { toggleMenu: () => void }) => {
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
          toggleMenu();
        }
      }, 100);
    }
  };

  return (
    <div className="w-full">
      <a
        onClick={handleClick}
        className="px-6 py-3 text-2xl font-medium text-gray-900 hover:text-[#E43AA7] rounded-lg transition duration-300 ease-in-out"
      >
        {title}
      </a>
      <hr className="my-3 border-t border-gray-300" />
    </div>
  );
};

export default function MobileMenu({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <Transition show={menuOpen}>
      <Dialog
        onClose={toggleMenu}
        className="fixed inset-0 z-30 flex justify-end md:hidden"
      >
        {/* Overlay */}
        <Transition.Child
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50"
            onClick={toggleMenu}
          />
        </Transition.Child>
        <div className="absolute inset-0 flex justify-end">
          <Transition.Child
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="pointer-events-auto w-72 h-full bg-white shadow-xl rounded-r-xl">
              <div className="flex flex-col items-center py-10 space-y-6">
                <h2 className="text-3xl font-bold text-[#E43AA7]">תפריט</h2>
                {menuItems.map(({ hash, link, title }) => (
                  <MenuItem
                    key={hash}
                    title={title}
                    hash={hash}
                    link={link}
                    toggleMenu={toggleMenu}
                  />
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
