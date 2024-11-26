import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { IoChevronUp, IoChevronDownOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

// const sortOptions = [
//   { name: "Popular", href: "#", current: true },
//   { name: "Novo", href: "#", current: false },
//   { name: "Relevante", href: "#", current: false },
//   { name: "Nada", href: "#", current: false },
// ];

const filters = [
  {
    id: "color",
    name: "Modo",
    options: [
      { value: "frio", label: "Frio", checked: false },
      { value: "dramático", label: "Dramático", checked: false },
      { value: "feliz", label: "Feliz", checked: false },
      { value: "triste", label: "Triste", checked: false },
      { value: "esperança", label: "Esperança", checked: false },
      { value: "fantasia", label: "Fantasia", checked: false },
    ],
  },
  {
    id: "category",
    name: "Instrumental",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Tema",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
  {
    id: "size",
    name: "Gênero",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export const Filter = () => {

  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            <HiMenuAlt2 />
            Filter
          </h1>

          {/*<div className="flex items-center">
             Sort
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-white">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>
              Opções do Sort
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "font-medium text-white"
                            : "text-gray-500",
                          "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu> 

          </div>*/}
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-white">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <IoChevronDownOutline
                          aria-hidden="true"
                          className="size-5 group-data-[open]:hidden"
                        />
                        <IoChevronUp
                          aria-hidden="true"
                          className="size-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            <div className="lg:col-span-3">Galeria</div>
          </div>
        </section>
      </main>
    </div>
  );
};
