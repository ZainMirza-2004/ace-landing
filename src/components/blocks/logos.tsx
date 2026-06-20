"use client";

const clientLogos = [
  { src: "/arbisoft.svg", alt: "Arbisoft", key: "arbisoft" },
  { src: "/netsol-new.svg", alt: "NETSOL", key: "netsol" },
  { src: "/zong.svg", alt: "Zong", key: "zong" },
  { src: "/ufone.svg", alt: "Ufone", key: "ufone" },
  { src: "/ifinance-new.svg", alt: "iFinance", key: "ifinance" },
  { src: "/systems.svg", alt: "Systems Limited", key: "systems" },
  { src: "/mindbridge-new.svg", alt: "MindBridge", key: "mindbridge" },
  { src: "/ecs.svg", alt: "ECS", key: "ecs" },
  { src: "/infotech-new.svg", alt: "Infotech", key: "infotech" },
  { src: "/sophos-new.svg", alt: "Sophos", key: "sophos" },
  { src: "/empiricai-final.svg", alt: "EmpiricAI", key: "empiricai" },
  { src: "/ibm-new.svg", alt: "IBM", key: "ibm" },
  { src: "/nbk.svg", alt: "NBK", key: "nbk" },
  { src: "/barracuda.svg", alt: "Barracuda", key: "barracuda" },
  { src: "/Telenor_Logo.svg", alt: "Telenor", key: "telenor" },
];

export const Logos = () => {
  const loopingLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      id="clients"
      className="clients-section mx-auto w-[calc(100%-1.25rem)] max-w-[1440px] scroll-mt-28 px-3 md:scroll-mt-32 lg:w-[calc(100%-2rem)]"
      aria-labelledby="clients-carousel-title"
    >
      <p
        id="clients-carousel-title"
        className="mb-6 px-4 text-center font-mono text-[14px] leading-normal font-normal tracking-wide text-gray-500 not-italic"
      >
        TRUSTED BY LEADING COMPANIES
      </p>
      <div className="clients-carousel">
        <div className="clients-track">
          {loopingLogos.map((logo, index) => (
            <div
              className={`client-logo client-logo--${logo.key}`}
              key={`${logo.src}-${index}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                decoding="sync"
                suppressHydrationWarning
                onError={(event) => {
                  const logoWrap = event.currentTarget.parentElement;
                  if (logoWrap) logoWrap.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
