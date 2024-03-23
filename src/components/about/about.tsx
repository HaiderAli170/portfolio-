import programer from "../../assets/images/programer.png";
import tag from "../../assets/images/tag.png";

const About = () => {
  return (
    <div id="About" className="bg-black flex items-center justify-center overflow-hidden z-50">
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative ">
            <div className="absolute top-0 -left-7  z-0 opacity-50">
              {/* Use imported image or direct URL */}
              <img
                src={tag}
                className="w-36 z-0 h-full object-fill"
                alt="Placeholder"
              />
            </div>
            <div className="lg:max-w-xl lg:pr-5 mt-4 relative z-40">
              <h1 className=" cursor-pointer tracking-wide hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
                About
              </h1>
              <h2 className="mb-6 max-w-lg text-5xl text-white font-great-vibes leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                i am a <span className="underline text-blue-400  decoration-slate-600 cursor-pointer"> React</span> 
                <span className="my-1 text-gray-300 inline-block border-b-8 border-gray-900 bg-next px-4 font-bold text-g4 animate__animated animate__flash">
                  Developer
                </span>
              </h2>
              <p className="text-base font-poppin tracking-wide text-gray-300">
              As a passionate Software Engineer, I specialize in crafting innovative solutions to complex problems. With a robust foundation in both front-end and back-end technologies, my portfolio showcases a range of projects from dynamic web applications to efficient, scalable backend systems. My dedication to continuous learning and improvement is reflected in my work, which leverages the latest technologies and methodologies to deliver high-quality software. I'm committed to using my technical skills and creativity to develop software that not only meets, but exceeds expectations.
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/src/assets/images/Haider Ali Resume (1).pdf"
                  download="Haider_Ali_Resume.pdf" 
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  Download Resume
                </a>
               
              </div>
            </div>
          </div>
          <div className="relative   lg:ml-32 lg:block lg:w-1/2">
            <img
              src={programer}
              alt="Showcase"
              className="abg-orange-400 shadow-2xl shadow-slate-700 opacity-75  mx-auto w-fit overflow-hidden rounded-[22rem] rounded-br-none rounded-tl-none"
            />
          </div>
        </div>
      </div>
      {/* Omitted additional decorative elements for brevity */}
    </div>
  );
};

export default About;
