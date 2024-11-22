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
      <nav className="mx-auto flex items-center justify-between py-4 px-8">
        <div className="flex lg:flex-1">
          <img className="" src={Logo} />
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
          <a href="#" className="text-sm text-white">
            Home
          </a>
          <a href="#" className="text-sm text-white">
            Categoria
          </a>
          <a href="#" className="text-sm text-white">
            Preços
          </a>
          <a href="#" className="text-sm text-white">
            Contate-nos
          </a>
          <a href="#" className="text-sm text-white">
            FAQ
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <a
            href="#"
            className="font-semibold text-white bg-purple-600 px-10 py-[5px] rounded-xl"
          >
            Login
          </a>
          <a
            href="#"
            className="font-semibold text-purple-600 bg-transparent px-10 py-[5px] rounded-xl border border-solid border-purple-600"
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <img className="" src={Logo} />
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
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm/7 text-gray-400 hover:bg-purple-600">
                    Home
                  </DisclosureButton>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm/7 text-white hover:bg-purple-600"
                >
                  Categoria
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm/7 text-white hover:bg-purple-600"
                >
                  Preços
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm/7 text-white hover:bg-purple-600"
                >
                  Contate-nos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm/7 text-white hover:bg-purple-600"
                >
                  FAQ
                </a>
              </div>
              <div className="py-6 flex gap-3">
                <a
                  href="#"
                  className="font-semibold text-white bg-purple-600 px-10 py-[5px] rounded-xl"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="font-semibold text-purple-600 bg-transparent px-10 py-[5px] rounded-xl border border-solid border-purple-600"
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