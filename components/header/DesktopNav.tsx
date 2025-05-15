import { NavLinks } from "@/constants";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-2">
      {NavLinks.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.href}
            className="p-3 border border-neutral-white rounded-xl bg-transparent text-white hover:bg-white hover:text-neutral-green transition-all duration-300"
          >
            {item.label}
          </Link>
        );
      })}
      <button className="uppercase ml-5 bg-primary text-white py-4 px-8 rounded-4xl cursor-pointer hover:bg-transparent hover:scale-110 hover:outline transition-all duration-300">
        shop now
      </button>
    </nav>
  );
};

export default DesktopNav;
