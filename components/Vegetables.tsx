"use client";

import Section from "./UI/Section";
import { Vegetables as VegetablesList } from "@/constants";
import Reveal from "./UI/Reveal";
import { motion, MotionProvider } from "./utils/MotionProvider";
import { menuVariants, menuItemVariants } from "@/constants/animations";

const Vegetables = () => {
  return (
    <Section id="vegetables" className="bg-primary">
      <div>
        <div className="flex flex-col gap-6 md:gap-12 xl:gap-6 mb-10 md:mb-[50px]">
          <Reveal>
            <h2 className="text-neutral-white">
              organic <span className="light-span">vegetables</span>{" "}
            </h2>
          </Reveal>
          <Reveal>
            <p className="description text-neutral-white">
              Our organic vegetables are hand-picked from local farms and
              delivered straight to your doorstep, ensuring that you get the
              freshest and most nutritious produce possible.
            </p>
          </Reveal>
        </div>
        <MotionProvider>
          <motion.ul
            variants={menuVariants}
            initial="closed"
            whileInView="open"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-y-7"
          >
            {VegetablesList.map((item) => {
              return (
                <motion.li
                  key={item.id}
                  variants={menuItemVariants}
                  className="border bg-neutral-white rounded-[40px] py-8 px-6 md:px-7 xl:p-8 flex flex-col gap-4 md:gap-2.5"
                >
                  <p className="text-primary font-semibold text-[28px] leading-7 md:text-[32px] md:leading-8">
                    {item.name}
                  </p>
                  <p className="font-semibold text-sm leading-[18px]">
                    {item.price}
                  </p>
                  <img src={item.image} alt={item.name} />
                </motion.li>
              );
            })}
          </motion.ul>
        </MotionProvider>
      </div>
    </Section>
  );
};

export default Vegetables;
