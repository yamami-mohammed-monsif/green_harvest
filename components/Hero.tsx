import Reveal from "./UI/Reveal";

const Hero = () => {
  return (
    <section className="relative bg-neutral-green text-neutral-white flex flex-col gap-10 md:gap-[50px] xl:flex-row xl:pt-[120px] xl:h-screen">
      <div className="p-4 md:p-8 lg:pl-[100px] flex flex-col gap-5 md:gap-6 xl:gap-[128px] xl:mt-[60px] xl:max-w-[650px] border">
        <Reveal>
          <h1>organic vegetables to your diet today!</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="description max-w-[650px]">
            Our expertly curated vegetable baskets are made with the freshest,
            highest quality vegetables available. Fresh Harvest Box has got you
            covered. Fresh, high-quality vegetables in expertly curated
            vegetable baskets delivered to you.
          </p>
        </Reveal>
      </div>
      <div className="xl:absolute xl:right-0 xl:top-0 xl:h-full xl:w-[50%]">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/images/hero-desktop.webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-tablet.webp"
          />
          <img
            src="/images/hero-mobile.webp"
            alt="Hero Image"
            className="w-full h-full object-cover lg:object-left"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
