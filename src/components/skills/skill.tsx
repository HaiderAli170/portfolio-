import react from '../../assets/images/react.gif';
import javascript from '../../assets/images/javascript.gif';
import typescript from '../../assets/images/typescript.png'
import tailwind from '../../assets/images/tailwind.png'
import html from '../../assets/images/html5.gif'
import redux from '../../assets/images/redux.png'

const people = [
  {
    name: 'React',
    title: 'Front-end Library',
    role: '1.5 Year Experience',
    imageUrl:react,
  },
  {
    name: 'Java Script',
    title: 'Programming language',
    role: '1.5 Year Experience',
    imageUrl:javascript,
  },
  {
    name: 'Type Script',
    title: 'High-level programming language',
    role: '0.5 Year Experience',
    imageUrl:typescript,
  },
  {
    name: 'Tailwind Css',
    title: 'UI Library',
    role: '1.5 Year Experience',
    imageUrl:tailwind,
  },
  {
    name: 'HTML5',
    title: 'Hypertext Markup Language 5',
    role: '1.5 Year Experience',
    imageUrl:html,
  },
  {
    name: 'Redux Toolkit /RTK Query',
    title: 'State Management /Api data Fetching',
    role: '1.5 Year Experience',
    imageUrl:redux,
  },
  

]

export default function Skills() {
  return (
    <div id='skill' className="mx-auto shadow-md w-full px-6 lg:px-8 bg-[url('/src/assets//images/attendance.jpg')] bg-cover bg-center  py-20">
      <h1 className=" cursor-pointer tracking-wide hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
        Skills
      </h1>
    
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-2 ">
      {people.map((person) => (
        <li
          key={person.title}
          className="col-span-1 flex flex-col backdrop-grayscale-0 bg-white/5   divide-y divide-gray-200 rounded-lg    font-poppin tracking-wide text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8   rounded-lg ">
            <img className="mx-auto h-32 w-32 flex-shrink-1  rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-3xl font-medium text-white font-great-vibes tracking-wide">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dd className="text-sm text-gray-300 font-poppin tracking-wide">{person.title}</dd>
              <dd className="">
                <span className="inline-flex items-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 cursor-pointer  bg-next px-2 py-1 text-xs font-medium text-white font-poppin tracking-wide ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
       
        </li>
      ))}
    </ul>
    </div>
  )
}