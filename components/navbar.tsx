import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <header className="bg-gradient-to-r from-green-600 to-blue-600 mb-5 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center px-4 py-3 sm:p-0 justify-between">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link aria-label="Go back to Home Page" href="/">
              <a>
                <div className="font-bold tracking-tighter leading-tight md:pr-8">
                  <span className="text-gray-100">Agile Import</span>
                </div>
              </a>
            </Link>
          </h2>
          <div className="sm:hidden">
            <button
              aria-label="Open Mobile Menu"
              type="button"
              className="block text-gray-200 hover:text-white focus:text-white rounded hover:bg-green-500 focus:outline-none"
              onClick={() => setisOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`px-2 pt-2 pb-4 sm:p-0 sm:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            aria-label="Go to Services Page"
            href="/services"
            className="block px-2 py-1 text-white font-semibold rounded sm:hover:bg-green-500 hover:bg-blue-500"
          >
            Services
          </a>
          <a
            aria-label="Go to About Page"
            href="/about"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded sm:hover:bg-green-500 hover:bg-blue-500 sm:mt-0 sm:ml-2"
          >
            About
          </a>
          <a
            aria-label="Go to Blog Page"
            href="/blog"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded sm:hover:bg-green-500 hover:bg-blue-500 sm:mt-0 sm:ml-2"
          >
            Blog
          </a>{" "}
          <a
            aria-label="Go to contacts Page"
            href="/contact"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded sm:hover:bg-green-500 hover:bg-blue-500 sm:mt-0 sm:ml-2"
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
