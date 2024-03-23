import { FaGithub } from "react-icons/fa";
import metro from "../../assets/images/metro.png";
import radio from "../../assets/images/radionumbers.png";
import fireflytime from "../../assets/images/fireflytime.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const cards = [
  {
    name: "Metro Cash & Carry (Pakistan)",
    description:
      "Designed a project aimed at Metro Pakistan, a leading supermarket chain, developing a web-based HR management solution.",
    icon: FaGithub,
    image: metro,
    url: "https://github.com/HaiderAli170",
  },
  {
    name: "Radio Numbers",
    description:
      "I spearheaded the development of Radio Numbers, an online advertising platform, optimizing ad targeting and transactions.",
    icon: FaGithub,
    image: radio,
    url: "https://github.com/HaiderAli170",
  },
  {
    name: "Firefly Times",
    description:
      "FireflyTime is a React-based office attendance system designed to streamline check-ins, enhancing workplace efficiency and tracking.",
    icon: FaGithub,
    image: fireflytime,
    url: "https://github.com/HaiderAli170/fireflyTime",
  },
];
const NavigateToProfile = (url: any) => {
  window.open(url, "_blank");
};
const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hidden: {
    opacity: 1,
    scale: 0.6,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};


export default function Example() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
 
  return (
    <div
      className="relative isolate overflow-hidden bg-darkLow py-20 sm:py-20 lg:px-2 md:px-2 sm:px-2  px-2 "
      id="work"
    >
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 border-t-8 border-next rounded-md -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h1 className=" cursor-pointer hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
            Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-poppin tracking-wide">
            In my React projects, I leveraged{" "}
            <span className="underline decoration-sky-500 ">
              Redux Tool Kit
            </span>{" "}
            and<span className="underline decoration-sky-500">RTK Query </span>
            to streamline state management and data fetching,for Designing{" "}
            <span className="underline decoration-sky-500">
              Tailwind Css
            </span>{" "}
            to enhancing application efficiency. The integration of RTK
            technologies significantly improved user experience and system
            responsiveness. This initiative showcased my adeptness in utilizing
            advanced React ecosystem tools to deliver sophisticated and
            user-centric solutions.
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.name}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              onClick={() => NavigateToProfile(card.url)}
              className="flex gap-x-4 rounded-xl bg-white/5 p-3 ring-1 ring-inset ring-white/10 hover:bg-darkLow cursor-pointer"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white font-poppin tracking-wide hover:underline hover:decoration-sky-500">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-300 font-poppin tracking-wide">
                  {card.description}
                </p>
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.name}
                    className="mt-2 rounded-md opacity-55 w-1/2 h-1/3"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
