import { useState } from "react";

import { RadioGroup } from "@headlessui/react";
import image from "../../assets/images/image.png";
import Profile from "../profile/profile";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { motion } from "framer-motion";
const profile = {
  name: "Software Developer",
  description:
    "I'm a dedicated software developer with a focus on React, currently thriving in the role of a React Developer. My expertise in React and its ecosystem has enabled me to build dynamic, responsive, and user-friendly web applications. With a passion for coding and a knack for solving complex problems, I bring innovative solutions to the table, always aiming to enhance the user experience and meet project objectives efficiently.",
  imageSrc: { image },
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [{ id: 1, name: "Profile", href: "#", icon: <ImProfile /> }],
  sizes: [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://www.linkedin.com/in/haider-ali-849814276/",
      description:
        "Connect with me on LinkedIn to explore my professional milestones and network.",
    },
    {
      name: "GitHub",
      icon: <FaGithubSquare size={22} />,
      url: "https://github.com/HaiderAli170",
      description:
        "Visit my GitHub to review my coding projects and contributions to the open-source community",
      bgClass: "https://example.com/github-background.jpg", // URL of GitHub background image
    },
  ],
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const NavigateToProfile = (url: any) => {
  window.open(url, "_blank");
};

export default function Home() {
  const [selectedSize, setSelectedSize] = useState(profile.sizes[0]);

  return (
    <div className="bg-darkLow px-4" id="home">
      <div className="mx-auto max-w-2xl lg:px-5 md:px-2 sm:px-2  px-2  py-12 sm:py-12 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-14 ">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end ">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex  items-center space-x-2">
              {profile.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center animate-pulse text-sm">
                    <button className="font-medium text-4xl text-white font-poppin rounded rounder-lg  ">
                      {breadcrumb.name}
                    </button>
                    {breadcrumbIdx !== profile.breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-1 h-5 w-4 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          {/* Profile And Eduction */}

          <div className="">
            <Profile data={profile} />
          </div>
        </div>
        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="py-4 lg:col-start-2 lg:row-span-2 lg:mt-0 shadow-sm opacity-90 contrast-100 saturate-100 lg:self-center"
        >
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ">
            <motion.img
              src={image}
              alt={profile.imageAlt}
              className="h-full shadow-lg w-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Product form */}
        <div className="mt-1 lg:col-start-1 lg:row-start-2  lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="sm:flex sm:justify-between">
                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                  <RadioGroup.Label className="block text-base font-medium text-gray-300 font-poppin hover:underline hover:decoration-sky-500 tracking-wide">
                    LinkedIn / GitHub
                  </RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    {profile.sizes.map((size) => (
                      <RadioGroup.Option
                        as="div"
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? "ring-2 ring-indigo-500" : "",
                            "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700"
                          )
                        }
                        style={{ backgroundImage: `url(${size.bgClass})` }}
                        onClick={() => NavigateToProfile(size.url)}
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label
                              as="p"
                              className="text-base flex flex-1 hover:underline font-poppin tracking-wide font-medium text-white"
                            >
                              {size.icon}
                              {size.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="p"
                              className="mt-1  text-sm text-gray-500 font-poppin tracking-wide "
                            >
                              {size.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "pointer-events-none absolute -inset-px rounded-lg"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
