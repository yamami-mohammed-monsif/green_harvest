"use client";

import Section from "./UI/Section";
import { Reviews as ReviewsList } from "@/constants";
import Reveal from "./UI/Reveal";
import { motion, MotionProvider } from "./utils/MotionProvider";
import { menuVariants, menuItemVariants } from "@/constants/animations";

const Reviews = () => {
  return (
    <Section id="reviews">
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-5 md:gap-6">
          <Reveal>
            <h2>
              reviews from our{" "}
              <span className="text-neutral-green">customers</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="description">
              Words of our customers: impressions and opinions about the quality
              of our services and the freshness of our products.
            </p>
          </Reveal>
        </div>
        <MotionProvider>
          <motion.ul
            variants={menuVariants}
            initial="closed"
            whileInView="open"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-[18px] md:gap-6"
          >
            {ReviewsList.map((item, index) => {
              return (
                <motion.li
                  variants={menuItemVariants}
                  key={item.id}
                  className={`text-center border border-primary/30 rounded-3xl py-5 px-4 ${
                    index === 2 && "hidden lg:block"
                  }`}
                >
                  <img src={item.image} alt="" className="mx-auto mb-6" />
                  <p className="font-semibold text-base leading-5 md:text-[18px] md:leading-3 mb-2">
                    {item.name}
                  </p>
                  <p className="text-sm leading-4 md:text-base md:leading-[140%] opacity-40">
                    {item.review}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </MotionProvider>
      </div>
    </Section>
  );
};

export default Reviews;
