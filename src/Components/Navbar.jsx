import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="/public/image/logoedu.png" alt="" />
          </a>
          <div className="flex md:order-2">
            <a href="/Register">
              <button
                type="button"
                className="py-2 px-4 mr-2 text-sm font-medium text-gray-600 focus:outline-none bg-white rounded-lg border hover:bg-gold hover:text-black focus:ring-4 focus:ring-gray-200"
              >
                Sign Up
              </button>
            </a>
            <a href="/login">
              <button
                type="button"
                className="py-2 px-4 mr-2 text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary hover:bg-gold hover:text-black focus:ring-4 focus:ring-gray-200"
              >
                Log In
              </button>
            </a>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-[99px] bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
              <li>
                <a
                  href="/Home"
                  className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:text-gold hover:bg-transparent md:p-0"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center focus:outline-none text-gray-300 hover:text-gold"
                >
                  <span className="mr-1">Service</span>
                  <span
                    className={`ml-1 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                  >
                    &#9662;
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute bg-black text-white mt-2 p-0 rounded-md border border-gray-700 shadow-xl"
                  >
                    {/* Dropdown Content Here */}
                    <a
                      href="/services/advice"
                      className="block py-2 px-6 hover:text-gold"
                    >
                      <span className="inline-block ml-2 whitespace-nowrap">
                        Advices
                      </span>
                    </a>
                    <hr className="border-t border-gray-600" />
                    <a
                      href="/services/HardSkill"
                      className="block py-2 px-6 w-full text-left hover:text-gold"
                    >
                      <span className="inline-block ml-2 whitespace-nowrap">
                        Hard Skill
                      </span>
                    </a>
                    <hr className="border-t border-gray-600" />
                    <a
                      href="/services/SoftSkill"
                      className="block py-2 px-6 w-full text-left hover:text-gold"
                    >
                      <span className="inline-block ml-2 whitespace-nowrap">
                        Soft Skill
                      </span>
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="/About"
                  className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:text-gold hover:bg-transparent md:p-0"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
