import Container from "./container";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div className="bg-grey-light font-sans leading-normal tracking-normal">
      <nav className="bg-gray-500 p-2 fixed w-full z-10 pin-t">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-blue-500 font-extrabold">
            <a
              className="text-red-500 no-underline hover:text-white hover:no-underline"
              href="#"
            >
              <span className="text-2xl pl-2">
                <i className="em em-grinning"></i> Brand McBrandface
              </span>
            </a>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-blue-500 no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Alert;
