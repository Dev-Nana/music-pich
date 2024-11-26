import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { IoChevronUp, IoChevronDownOutline } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";

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
      { value: "travel", label: "Travel", checked: false },
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
      { value: "40l", label: "40L", checked: false },
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
      { value: "40l", label: "40L", checked: false },
    ],
  },
];

export const Filter = () => {
  return (
    <div className="invisible lg:visible w-[17rem]">
      <main>
        <div className="flex items-baseline justify-between">
          <h1 className="text-[1rem] font-semibold flex-row items-center flex text-white gap-1">
            <BsFilterLeft className="text-xl"/>
            <span className="">Filter</span>
          </h1>

        </div>

        <section aria-labelledby="products-heading" className="py-6">
          <div className="grid gap-y-10">
            <form className="">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between py-5 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-300">
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
                  <DisclosurePanel className="pt-6 pl-[0.5rem]">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="size-4 rounded text-purple-150 bg-transparent border-gray-600 border-[2px]"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-white"
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

            {/* <div className="lg:col-span-3">Galeria</div> */}
          </div>
        </section>
      </main>
    </div>
  );
};
