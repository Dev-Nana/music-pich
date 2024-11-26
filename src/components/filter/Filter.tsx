import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { IoChevronUp, IoChevronDownOutline } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";

const filters = [
  {
    id: "modo",
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
    id: "instrumental",
    name: "Instrumental",
    options: [
      { value: "calmo", label: "Lento", checked: false },
      { value: "animado", label: "Animado", checked: false },
      { value: "rápido", label: "Rápido", checked: false },
    ],
  },
  {
    id: "genero",
    name: "Gênero",
    options: [
      { value: "Rock", label: "Rock", checked: false },
      { value: "Samba", label: "Samba", checked: false },
      { value: "Jaz", label: "Jaz", checked: false },
      { value: "Gospel", label: "Gospel", checked: false },
      { value: "Eletrônico", label: "Eletrônico", checked: false },
      { value: "Reggae", label: "Reggae", checked: false },
    ],
  },
];

export const Filter = () => {
  return (
    <div className="invisible lg:visible lg:w-[17rem] w-0">
      <main>
        <div className="flex items-baseline justify-between">
          <h1 className="text-[1rem] font-semibold flex-row items-center flex text-white gap-1">
            <BsFilterLeft className="text-xl"/>
            <span className="">Filter</span>
          </h1>

        </div>

        <section aria-labelledby="products-heading" className="py-8">
          <div className="grid gap-y-10">
            <form className="">
              {filters.map((section, index) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="py-2"
                  defaultOpen={index === 0}
                >
                  <h3 className="flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
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
                  <DisclosurePanel className="pt-4 pl-[0.5rem]">
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
          </div>
        </section>
      </main>
    </div>
  );
};
