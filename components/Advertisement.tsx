import Section from "./UI/Section";
import Reveal from "./UI/Reveal";

const Advertisement = () => {
  return (
    <Section>
      <div className="max-w-[1080px] mx-auto">
        <Reveal>
          <p className="font-semibold text-5xl leading-12 uppercase md:text-[64px] md:leading-[70px] xl:text-[76px] xl:leading-[80px]">
            <span className="bg-neutral-green text-neutral-white">
              Discount up to 40%!{" "}
            </span>
            Taste the vitamins and keep your health
          </p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Advertisement;
