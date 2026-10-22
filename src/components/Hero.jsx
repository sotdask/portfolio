import React from "react";
import { background, computer } from "../assets";

function Hero() {
  return (
    <section>
      <div className="h-dvh w-d lg:h-[80dvh] relative flex justify-center items-center">
        <img
          src={background}
          alt="backrgound image"
          className="h-full w-full object-cover absolute "
        />
        <div className="section-padding flex flex-col lg:flex-row absolute justify-between items-center max-md:top-0 max-md:h-full max-md:justify-center max-md:gap-6 max-md:py-8">
          <div className="wrapper max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:gap-6">
            <h1 className="uppercase text-3xl md:text-3xl lg:text-5xl xl:text-7xl text-center lg:text-start leading-tight mb-0 md:mb-16 lg:mb-20 xl:mb-24">
              <span className="text-primary">sotiris </span>
              <span className="text-secondary">daskalou</span>
            </h1>
            <div>
              <h3 className="text-[#FDF4E7] uppercase text-md md:text-xl xl:text-2xl text-center lg:text-start">
                retro vibes.
              </h3>
              <h3 className="text-[#FDF4E7] uppercase text-md md:text-xl xl:text-2xl text-center lg:text-start">
                modern designs.
              </h3>
            </div>
            <div className="wrapper flex w-full flex-col gap-6 md:w-auto md:flex-row md:gap-5 lg:gap-8 xl:gap-10 mt-7 max-md:mt-0 lg:mt-10 justify-center lg:justify-start">
              <a
                href="#"
                className="retro-press uppercase p-4 bg-secondary flex items-center justify-center text-center text-sm max-md:h-14 shadow-[4px_4px_0_0_var(--color-primary)]"
              >
                view work
              </a>
              <a
                href="#"
                className="retro-press uppercase text-primary p-4 flex items-center justify-center text-center bg-transparent border text-sm border-primary max-md:h-14 shadow-[4px_4px_0_0_var(--color-secondary)]"
              >
                download cv
              </a>
            </div>
          </div>
          <img
            src={computer}
            alt=""
            className="max-md:h-auto max-md:w-full max-md:max-h-56 max-md:object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
