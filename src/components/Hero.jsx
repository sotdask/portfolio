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
        <div className="section-padding flex flex-col lg:flex-row absolute justify-between items-center">
          <div className="wrapper">
            <h1 className="uppercase text-3xl md:text-3xl lg:text-5xl xl:text-7xl text-center lg:text-start leading-tight mb-10 md:mb-16 lg:mb-20 xl:mb-24">
              <span className="text-primary">sotiris </span>
              <span className="text-secondary">daskalou</span>
            </h1>
            <h3 className="text-[#FDF4E7] uppercase text-md md:text-xl xl:text-2xl text-center lg:text-start">
              retro vibes.
            </h3>
            <h3 className="text-[#FDF4E7] uppercase text-md md:text-xl xl:text-2xl text-center lg:text-start">
              modern designs.
            </h3>
            <div className="wrapper flex flex-col gap-5 md:gap:6 lg:gap-8 xl:gap-10 md:flex-row mt-7 lg:mt-10 justify-center lg:justify-start">
              <a
                href="#"
                className="retro-press uppercase p-4 bg-secondary flex items-center justify-center text-center text-sm shadow-[4px_4px_0_0_var(--color-primary)]"
              >
                view work
              </a>
              <a
                href="#"
                className="retro-press uppercase text-primary p-4 flex items-center justify-center text-center bg-transparent border text-sm border-primary shadow-[4px_4px_0_0_var(--color-secondary)]"
              >
                download cv
              </a>
            </div>
          </div>
          <img src={computer} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
