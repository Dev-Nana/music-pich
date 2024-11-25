import { useState } from "react";
import Logo from "../../assets/images/image-logo.png";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="mx-auto flex items-center justify-between py-4 px-8 md:px-12 bg-transparent">
        <div className="flex">
          <img className="pr-[5vw] cursor-pointer" src={Logo} />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex gap-x-8">
          <a href="#" className="text-white text-shadow-lilac font-medium">
            Home
          </a>
          <a href="#" className="text-white hover:text-shadow-lilac font-light hover:font-medium">
            Categoria
          </a>
          <a href="#" className="text-white hover:text-shadow-lilac font-light hover:font-medium">
            Preços
          </a>
          <a href="#" className="text-white hover:text-shadow-lilac font-light hover:font-medium">
            Contate-nos
          </a>
          <a href="#" className="text-white hover:text-shadow-lilac font-light hover:font-medium">
            FAQ
          </a>
        </PopoverGroup>
        <div className="items-center hidden lg:flex lg:justify-end gap-3">
          <a
            className="text-white bg-purple-150 px-9 py-1.5 rounded-lg cursor-pointer"
          >
            Login
          </a>
          <a
            className="text-purple-150 bg-transparent px-9 py-1.5 rounded-lg border border-solid border-purple-150 cursor-pointer"
          >
            Sign in
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-8 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <img className="cursor-pointer" src={Logo} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm/7 text-gray-400 hover:bg-purple-150 hover:text-white">
                    Home
                  </DisclosureButton>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-white hover:bg-purple-150"
                >
                  Categoria
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-white hover:bg-purple-150"
                >
                  Preços
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-white hover:bg-purple-150"
                >
                  Contate-nos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-white hover:bg-purple-150"
                >
                  FAQ
                </a>
              </div>
              <div className="items-center py-6 flex gap-3">
                <a
                  href="#"
                  className="text-white bg-purple-150 px-9 py-[5px] rounded-lg"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-purple-150 bg-transparent px-9 py-[5px] rounded-lg border border-solid border-purple-150"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};