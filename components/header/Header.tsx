"use client";

import HamburgerButton from "../UI/HamburgerButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-neutral-green p-4 md:p-8 lg:px-[100px] flex items-center justify-between">
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
