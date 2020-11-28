import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <header className="bg-gray-900">
        <div className="flex items-center px-4 py-3 justify-between">
          <div>
            <img
              className="h-8"
              src="/img/logo-inverted.svg"
              alt="Workcation"
            />
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={() => setisOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={"px-2 pt-2 pb-4 sm:p-0 sm:flex " + (isOpen ? "block" : "hidden")}
        >
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Services
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Blog
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
