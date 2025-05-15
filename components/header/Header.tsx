"use client";

import HamburgerButton from "../UI/HamburgerButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-neutral-green p-4 md:p-8 lg:px-[100px] flex items-center justify-between xl:absolute xl:top-0 xl:left-0 xl:w-full xl:bg-transparent xl:z-10">
      <div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/desktop-logo.svg"
          />
          <img
            src="/images/mobile-logo.svg"
            alt="Green Harvest Logo"
            className="w-full h-auto"
          />
        </picture>
      </div>
      <HamburgerButton isOpen={IsOpen} setIsOpen={setIsOpen} />
      <DesktopNav />
      <MobileNav isOpen={IsOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
