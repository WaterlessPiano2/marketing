const Navbar = () => {
  return (
    <div>
      <header className="flex bg-gray-900 items-center px-4 py-3 justify-between">
          <div>
            <img
              className="h-8"
              src="/img/logo-inverted.svg"
              alt="Workcation"
            />
          </div>
          <div className="">
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              // "block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
      </header>
    </div>
  );
};

export default Navbar;
