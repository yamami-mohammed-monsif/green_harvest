"use client";

import Image from "next/image";
import Reveal from "./UI/Reveal";
import { motion, MotionProvider } from "./utils/MotionProvider";
import { menuVariants, menuItemVariants } from "@/constants/animations";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="grid xl:grid-cols-2 h-full">
        <div className="w-full bg-primary px-5 md:px-8 lg:px-[100px] py-10 md:py-[100px] xl:py-[100px]">
          <div className="relative max-w-[640px] rounded-[30px] overflow-hidden mx-auto h-[450px] md:h-[640px] xl:h-[559px]">
            <Image
              src="/images/how-it-works-img.webp"
              alt="woman in kitchen cooking a healthy meal"
              fill
              sizes="(min-width: 1280px) 430px, (min-width: 768px) 640px, 335px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-neutral-green text-neutral-white px-5 py-20 md:px-[159px] md:py-[100px] xl:px-[100px] flex flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col gap-4 md:gap-6 max-w-[580px] mx-auto">
            <Reveal threshold={0.25}>
              <p className="text-[28px] leading-[28px] font-semibold uppercase">
                To order your <span className="light-span">vegetable</span>{" "}
                basket, simply follow these{" "}
                <span className="light-span">easy steps</span>
              </p>
            </Reveal>
            <Reveal delay={0.2} threshold={0.25}>
              <p className="description">
                Our baskets are assembled with care and delivered straight to
                your doorstep, so you can enjoy the taste of fresh fruit without
                ever leaving your home.
              </p>
            </Reveal>
          </div>
          <MotionProvider>
            <motion.ul
              variants={menuVariants}
              initial="closed"
              whileInView="open"
              viewport={{ once: true }}
              className="flex flex-col gap-5 max-w-[600px] mx-auto"
            >
              <motion.li
                variants={menuItemVariants}
                className="flex items-center gap-6 bg-neutral-white text-neutral-dark text-xs leading-3.5 font-medium md:text-base md:leading-5 py-3 px-6 rounded-2xl"
              >
                <span className="list-number">1</span>
                <div>
                  Just choose <span className="bold-span">the vegetable</span>{" "}
                  you want to order by clicking on the checkboxes{" "}
                  <span className="bold-span">next to it</span>.
                </div>
              </motion.li>
              <motion.li
                variants={menuItemVariants}
                className="flex items-center gap-6 bg-neutral-white text-neutral-dark text-xs leading-3.5 font-medium md:text-base md:leading-5 py-3 px-6 rounded-2xl"
              >
                <span className="list-number">2</span>
                <div>
                  Click on <span className="bold-span">the basket</span> and
                  fill out the form.
                </div>
              </motion.li>
              <motion.li
                variants={menuItemVariants}
                className="flex items-center gap-6 bg-neutral-white text-neutral-dark text-xs leading-3.5 font-medium md:text-base md:leading-5 py-3 px-6 rounded-2xl"
              >
                <span className="list-number">3</span>
                <div>
                  Sit back and relax! Your{" "}
                  <span className="bold-span">fresh vegetables</span> basket
                  will be delivered.
                </div>
              </motion.li>
            </motion.ul>
          </MotionProvider>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
