import { useEffect, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import image from "../../assets/images/profile-pic.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { MdContactMail } from "react-icons/md";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Set the state based on the scroll position
      const scrollTop = window.pageYOffset;
      if (scrollTop > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-darkLow ${
        hasScrolled ? "bg-transparent shadow-sm" : ""
      } transition duration-300 ease-in-out`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:py-3 lg:px-4 md:px-2 sm:px-2 px-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5  flex">
            <span className="sr-only">Haider Ali</span>
            <img className="h-10 w-auto hover:text-next" src={image} alt="" />
            <p className="text-white mx-1 py-2 font-great-vibes tracking-wide leading-6 hover:underline hover:decoration-sky-500 hover:bg-next p-2  rounded-lg">
              Haider Ali
            </p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative hover:bg-next rounded rounder-lg text-center">
            <a
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center p-2 text-sm font-semibold font-poppin leading-6 tracking-wide text-white hover:underline hover:decoration-sky-500"
            >
              Home
            </a>
          </Popover>

          <a
            href="#work" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
            className="text-sm font-semibold font-poppin  leading-6 tracking-wide text-white hover:bg-next p-2 rounder rounded-lg  hover:underline hover:decoration-sky-500"
          >
            Work
          </a>
          <a
           href="#skill" 
           onClick={(e) => {
             e.preventDefault();
             scrollToSection("skill");
           }}
            className="text-sm font-semibold font-poppin  leading-6 tracking-wide text-white hover:bg-next p-2 rounder rounded-lg hover:underline hover:decoration-sky-500"
          >
            Skills
          </a>
          <a
          href="#About" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("About");
          }}
            className="text-sm font-semibold font-poppin  leading-6 tracking-wide text-white hover:bg-next p-2 rounder rounded-lg hover:underline hover:decoration-sky-500"
          >
            About
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
           href="#home" 
           onClick={(e) => {
             e.preventDefault();
             scrollToSection("home");
           }}
            className="text-sm underline  flex font-semibold leading-6  tracking-wide text-white hover:bg-next p-2 rounder rounded-lg hover:underline hover:decoration-sky-500"
          >
            <span
              aria-hidden="true"
              className="text-white font-poppin tracking-wide  px-2 py-1 hover:bg-next  "
            >
              <MdContactMail size={18} />
            </span>
            Contact
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-next px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">My Portfolio</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold font-poppin leading-7 text-white hover:bg-darkLow">
                    <a
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center p-2 text-sm font-semibold font-poppin leading-6 tracking-wide text-white hover:underline hover:decoration-sky-500"
            >Home
            </a>
                    </Disclosure.Button>
                  </>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 font-poppin text-white hover:bg-darkLow"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 font-poppin text-white  hover:bg-darkLow"
                >
                  SKills
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 font-poppin text-white  hover:bg-darkLow"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
