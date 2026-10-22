import React from "react";
import { titlebar, design, develop, optimize, support } from "../assets";

function Services() {
  const service_cards = [
    {
      id: 1,
      title: "design",
      img: design,
      alt: "color palette",
      text: "Bold designs, elegant colors, timeless layouts.",
    },
        {
      id: 2,
      title: "develop",
      img: develop,
      alt: "develop files",
      text: "Clean, semantic code that works everywhere.",
    },    {
      id: 3,
      title: "optimize",
      img: optimize,
      alt: "optimize speedometer",
      text: "Fast loading built for even potato devices.",
    },    {
      id: 4,
      title: "support",
      img: support,
      alt: "technical support",
      text: "Technical support 24/7 (no bots here either)",
    },
  ];

  return (
    <section className="bg-[#F2DFBA] font-pixel">
      <div className="section-padding py-10 lg:py-12 xl:py-18 gap-10 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {service_cards.map((service_card) => (
          <article
            key={service_card.id}
            className="card flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border-2 border-black shadow-2xl"
          >
            <div className="wrapper flex items-center justify-between gap-4 bg-violet-400 px-5 py-3">
              <h5 className="uppercase text-3xl tracking-wider text-white">
                {service_card.title}
              </h5>
              <img
                src={titlebar}
                alt="titlebar icon"
                className="h-7 w-auto shrink-0"
              />
            </div>
            <div className="wrapper flex flex-col items-center gap-4 bg-[#EBE4D8] px-6 py-6 text-center">
              <img
                src={service_card.img}
                alt={service_card.alt}
                className="h-40 w-auto"
              />
              <p className="text-2xl leading-tight">{service_card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
