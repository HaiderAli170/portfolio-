import programer from '../../assets/images/programer.png'
import tag from '../../assets/images/tag.png'

const About = () => {
  return (
    <div className="bg-black flex items-center justify-center overflow-hidden z-50">
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative">
            <div className="absolute top-0 -left-44 z-0 opacity-50">
              {/* Use imported image or direct URL */}
              <img src={tag} className="w-36 z-0 h-full object-fill" alt="Placeholder" />
            </div>
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
            <h1 className=" cursor-pointer tracking-wide hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
        About
      </h1>
              <h2 className="mb-6 max-w-lg text-5xl text-white font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                We make you look
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">different</span>
              </h2>
              <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.</p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                  View More
                </a>
                <a href="/" aria-label="Watch how it works" className="group inline-flex items-center font-semibold text-g1">
                  Watch how it works
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative   lg:ml-32 lg:block lg:w-1/2">
            <img src={programer} alt="Showcase" className="abg-orange-400 shadow-2xl shadow-slate-700 opacity-75  mx-auto w-fit overflow-hidden rounded-[22rem] rounded-br-none rounded-tl-none"/>
          </div>
        </div>
      </div>
      {/* Omitted additional decorative elements for brevity */}
    </div>
  );
};

export default About;
