import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

import { IoChevronDownOutline } from "react-icons/io5";

const sortOptions = [
  { name: "Popular", href: "#", current: true },
  { name: "Novo", href: "#", current: false },
  { name: "Relevante", href: "#", current: false },
  { name: "Nada", href: "#", current: false },
];

export const Select = () => {
  return (
    <div className="flex items-center w-[40%] justify-between text-xs">
      <Menu
        as="div"
        className="relative inline-block w-[30%] h-[90%] bg-transparent border border-gray-400 border-1 rounded-lg"
      >
        <MenuButton className="group flex h-full items-center p-3 justify-between w-full text font-medium text-white hover:text-white">
          Categoria
          <IoChevronDownOutline
            aria-hidden="true"
            className="size-5 text-gray-300"
          />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-2xl transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 bg-gradient-to-br from-slate-700 via-slate-700 to-gray-800"
        >
          <div className="py-1">
            {sortOptions.map((option) => (
              <MenuItem key={option.name}>
                <a
                  href={option.href}
                  className="text-[.8rem] block px-4 py-2 text-white data-[focus]:text-gray-500"
                >
                  {option.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
      <Menu
        as="div"
        className="relative inline-block w-[30%] h-[90%] bg-transparent border border-gray-400 border-1 rounded-lg"
      >
        <MenuButton className="group flex h-full items-center p-3 justify-between w-full text font-medium text-white hover:text-white">
          Categoria
          <IoChevronDownOutline
            aria-hidden="true"
            className="size-5 text-gray-300"
          />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-2xl transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 bg-gradient-to-br from-slate-700 via-slate-700 to-gray-800"
        >
          <div className="py-1">
            {sortOptions.map((option) => (
              <MenuItem key={option.name}>
                <a
                  href={option.href}
                  className="text-[.8rem] block px-4 py-2 text-white data-[focus]:text-gray-500"
                >
                  {option.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
      <Menu
        as="div"
        className="relative inline-block w-[30%] h-[90%] bg-transparent border border-gray-400 border-1 rounded-lg"
      >
        <MenuButton className="group flex h-full items-center p-3 justify-between w-full text font-medium text-white hover:text-white">
          Categoria
          <IoChevronDownOutline
            aria-hidden="true"
            className="size-5 text-gray-300"
          />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-2xl transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 bg-gradient-to-br from-slate-700 via-slate-700 to-gray-800"
        >
          <div className="py-1">
            {sortOptions.map((option) => (
              <MenuItem key={option.name}>
                <a
                  href={option.href}
                  className="text-[.8rem] block px-4 py-2 text-white data-[focus]:text-gray-500"
                >
                  {option.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};
