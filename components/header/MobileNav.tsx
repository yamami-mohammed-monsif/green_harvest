import { NavLinks } from "@/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MotionProvider } from "../utils/MotionProvider";
import {
  sidebar,
  menuVariants,
  menuItemVariants,
} from "@/constants/animations";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <MotionProvider>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Expanding circle - now responsive */}
            <motion.div
              variants={sidebar}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 md:left-1/2 bg-primary z-20"
              custom={window.innerHeight}
            />

            {/* Navigation content container */}
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 md:left-1/2 md:right-0 z-30 flex flex-col items-center justify-center gap-40"
            >
              <motion.ul
                variants={menuVariants}
                className="flex flex-col items-center gap-6 w-full px-4 md:px-8"
              >
                {NavLinks.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={menuItemVariants}
                    className="py-3 w-[115px] text-center border border-white rounded-xl bg-transparent text-white"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full font-medium text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* SHOP NOW button */}
              <motion.button
                variants={menuItemVariants}
                className="uppercase text-primary bg-white py-4 px-10 rounded-full font-semi-bold text-sm md:text-lg cursor-pointer mx-auto"
              >
                SHOP NOW
              </motion.button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </MotionProvider>
  );
};

export default MobileNav;
