import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a>
          <div className="font-bold tracking-tighter leading-tight md:pr-8">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Agile import
            </span>
          </div>
        </a>
      </Link>
    </h2>
  );
};

export default Header;
