import React from "react";
import { smile } from "../assets";

function Introduction() {
  return (
    <section className="bg-primary w-full font-pixel py-6 md:py-2">
      <div className="section-padding flex flex-col lg:flex-row gap-0 lg:gap-20 xl:gap-30">
        <div className="wrapper flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center">
          <img src={smile} alt="smiley emoji" />
          <h2 className="uppercase text-5xl md:text-7xl">hello!</h2>
        </div>
        <div className="wrapper text-2xl md:text-3xl flex flex-col items-center justify-center my-2 lg:my-10 text-center lg:text-start">
          <p>
            Welcome to my Portfolio. Since you're here, sit back, relax and take
            a look around.
          </p>
          <p>
            I design and build websites with (human) soul. Let’s make something
            awesome together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
