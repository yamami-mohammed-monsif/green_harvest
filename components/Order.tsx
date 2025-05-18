"use client";

import Section from "./UI/Section";
import OrderForm from "./OrderForm";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./UI/Reveal";
import { motion, MotionProvider } from "./utils/MotionProvider";
import { menuVariants, menuItemVariants } from "@/constants/animations";

const Order = () => {
  return (
    <Section className="bg-primary text-neutral-white">
      <div>
        <div className="flex flex-col gap-6 mb-10 md:mb-[50px] max-w-[751px]">
          <Reveal>
            <h2>
              Fresh <span className="light-span">Harvest</span> Box has got you
              covered
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="description">
              Our boxes are packed with delicious, nutritious vegetables,
              perfect for anyone looking to eat healthier or support local
              farmers. Order your box today and start enjoying the best that
              nature has to offer!
            </p>
          </Reveal>
        </div>
        <MotionProvider>
          <motion.div
            variants={menuVariants}
            initial="closed"
            whileInView="open"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 xl:grid-cols-2 xl:items-center"
          >
            <motion.div variants={menuItemVariants}>
              <OrderForm />
            </motion.div>
            <motion.div
              variants={menuItemVariants}
              className="bg-neutral-green rounded-[30px] py-10 px-5 md:p-[50px] flex flex-col gap-5 md:gap-[50px] xl:min-h-full"
            >
              <div className="w-full">
                <div className="relative rounded-[15px] overflow-hidden mx-auto h-[450px] md:h-[320px]">
                  <Image
                    src="/images/order-image.webp"
                    alt="woman putting fruits in the mixing bowl"
                    fill
                    sizes="(min-width: 1280px) 427px, (min-width: 768px) 528px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-[18px] opacity-50 md:text-[18px] md:leading-5">
                  Follow us on our social networks:
                </p>
                <div className="text-2xl leading-[26px] font-semibold md:text-[32px] md:leading-8 flex items-center gap-3">
                  <Link href="instagram" className="hover:opacity-50">
                    instagram
                  </Link>
                  <span>/</span>
                  <Link href="facebook" className="hover:opacity-50">
                    facebook
                  </Link>
                  <span>/</span>
                  <Link href="youtube" className="hover:opacity-50">
                    youtube
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </MotionProvider>
      </div>
    </Section>
  );
};

export default Order;
