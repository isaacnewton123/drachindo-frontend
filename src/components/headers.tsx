import logoImg from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";


const Headers = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <img className="h-8 w-auto" src={logoImg} />
            <div className="hidden md:flex items-baseline space-x-4">
              <a
                href="index.html"
                className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Beranda
              </a>
              <a
                href="film.html"
                className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Film
              </a>
              <a
                href="serial-tv.html"
                className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Serial TV
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className='text-gray-200'/>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-gray-300 bg-slate-800 border border-transparent rounded-md focus:border-red-500 focus:outline-none focus:ring focus:ring-red-500/50"
                  placeholder="Cari..."
                />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-slate-800 focus:ring-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="index.html"
            className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Beranda
          </a>
          <a
            href="film.html"
            className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Film
          </a>
          <a
            href="serial-tv.html"
            className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Serial TV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Headers;
