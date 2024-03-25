import profile from '../../assets/images/profile-pic.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer() {
    const NavigateToProfile = (url: any) => {
        window.open(url, "_blank");
      };
      
  return (
    <footer className="bg-black border-t dark:bg-gray-900 mx-auto min-w-0 shadow-md w-full px-4 lg:px-6">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={profile} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl text-white font-poppin tracking-wide font-semibold whitespace-nowrap dark:text-white">Haider Ali</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 font-poppin uppercase dark:text-white">Follow Me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a  onClick={() => NavigateToProfile('https://github.com/HaiderAli170')}className=" cursor-pointer hover:underline flex items-center "><FaGithub/>Github</a>
                </li>
                <li>
                  <a onClick={() => NavigateToProfile('https://www.linkedin.com/in/haider-ali-849814276/')} className=" cursor-pointer hover:underline flex items-center"><FaLinkedin/>Linkedin</a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Haider Ali. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a  onClick={() => NavigateToProfile('https://github.com/HaiderAli170')} className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-4"><FaGithub /></a>
            <a onClick={() => NavigateToProfile('https://www.linkedin.com/in/haider-ali-849814276/')}className="text-gray-500 hover:text-gray-900 dark:hover:text-white mr-4"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
