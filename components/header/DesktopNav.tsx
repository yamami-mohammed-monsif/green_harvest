"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { motion, MotionProvider } from "../utils/MotionProvider";
import { menuVariants, menuItemVariants } from "@/constants/animations";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex itmes-center">
      <MotionProvider>
        <motion.ul
          variants={menuVariants}
          initial="closed"
          animate="open"
          className="flex items-center gap-2"
        >
          {NavLinks.map((item) => {
            return (
              <motion.li variants={menuItemVariants} key={item.id}>
                <Link
                  href={item.href}
                  className="p-3 border border-neutral-white rounded-xl bg-transparent text-white hover:bg-white hover:text-neutral-green transition-all duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            );
          })}
          <motion.li variants={menuItemVariants}>
            <button className="uppercase ml-5 bg-primary text-white py-4 px-8 rounded-4xl cursor-pointer hover:scale-110 transition-all duration-300">
              shop now
            </button>
          </motion.li>
        </motion.ul>
      </MotionProvider>
    </nav>
  );
};

export default DesktopNav;
