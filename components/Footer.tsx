"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-white py-10 px-5 md:p-8 xl:py-[50px] xl:px-[100px]">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-6 max-w-[265px]">
          <picture className="w-[168px] h-4 md:w-[194px] md:h-[18px]">
            <source
              media="(min-width: 768px)"
              srcSet="/images/desktop-logo.svg"
            />
            <img src="/images/mobile-logo.svg" alt="Green Harvest Logo" />
          </picture>
          <p className="description">
            Whether you're looking for a healthy snack or a thoughtful gift, our
            fruit baskets are the perfect choice.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:gap-[64px] xl:flex-row xl:gap-[121px]">
          <ul className="flex flex-col gap-4 md:gap-6">
            {NavLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="font-semibold text-[28px] leading-7 md:text-[32px] md:leading-8 hover:opacity-50"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-4 md:gap-6">
            <p>+380 (68) 443-94-26</p>
            <p>1678 S. Pioneer Road Salt Lake City UT 84104</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
