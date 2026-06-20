"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    tab: "1. Discover",
    headline: "Start with clarity",
    description:
      "We map your objectives, user journeys, technical constraints, and business requirements so the build starts with clarity.",
    visual: "discover",
  },
  {
    number: "02",
    title: "Architect",
    tab: "2. Architect",
    headline: "Design for scale",
    description:
      "We plan the architecture, data flows, integrations, infrastructure, and delivery roadmap before execution begins.",
    visual: "architect",
  },
  {
    number: "03",
    title: "Build",
    tab: "3. Build",
    headline: "Build with precision",
    description:
      "We develop, test, deploy, and iterate with clean engineering standards, fast feedback loops, and focused delivery.",
    visual: "build",
  },
  {
    number: "04",
    title: "Scale",
    tab: "4. Scale",
    headline: "Evolve as you grow",
    description:
      "We improve performance, reliability, infrastructure, analytics, and product capabilities as usage increases.",
    visual: "scale",
  },
];

const PROCESS_STEP_DURATION = 4.8;
const PROCESS_VISUAL_FRAME = "aspect-[3/2]";

function VisualCanvas({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-[#f7f7f4] ${className}`}
    >
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

function ImageVisual({
  src,
  alt,
  className,
  objectFit = "object-cover",
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  className: string;
  objectFit?: "object-cover" | "object-contain";
  objectPosition?: string;
}) {
  return (
    <VisualCanvas className={className}>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className={`${objectFit} ${objectPosition}`}
          sizes="(min-width: 1024px) 660px, calc(100vw - 4rem)"
        />
      </div>
    </VisualCanvas>
  );
}

function RiveVisual({
  src,
  className,
  alignment = Alignment.Center,
}: {
  src: string;
  className: string;
  alignment?: Alignment;
}) {
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment,
    }),
  });

  return (
    <VisualCanvas className={className}>
      <div className="absolute inset-0">
        <RiveComponent className="h-full w-full" />
      </div>
    </VisualCanvas>
  );
}

function StepVisual({ type }: { type: string }) {
  if (type === "discover") {
    return (
      <ImageVisual
        src="/discover1.png"
        alt="Discovery process visual"
        className={PROCESS_VISUAL_FRAME}
      />
    );
  }
  if (type === "architect") {
    return (
      <ImageVisual
        src="/architect7.png"
        alt="Architecture process visual"
        className={PROCESS_VISUAL_FRAME}
        objectFit="object-contain"
      />
    );
  }
  if (type === "build") {
    return (
      <RiveVisual
        src="/build.riv"
        className={PROCESS_VISUAL_FRAME}
        alignment={Alignment.CenterLeft}
      />
    );
  }
  return (
    <ImageVisual
      src="/scale10.png"
      alt="Scale process visual"
      className={PROCESS_VISUAL_FRAME}
      objectFit="object-contain"
    />
  );
}

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = useMemo(() => steps[activeStep], [activeStep]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, PROCESS_STEP_DURATION * 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="text-foreground relative w-full overflow-hidden py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl pb-14 text-center">
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Our process
          </h2>
          <p className="text-muted-foreground mt-3 text-sm font-medium">
            Building digital systems in four precise stages
          </p>
        </div>

        <div className="space-y-10 md:hidden">
          {steps.map((item, index) => (
            <div key={item.title} className="relative">
              {index < steps.length - 1 && (
                <div className="bg-border absolute top-full left-1/2 h-10 w-px -translate-x-1/2" />
              )}
              <article className="border-border/80 bg-muted/32 overflow-hidden rounded-lg border">
                <div className="px-5 pt-6 pb-5">
                  <div className="border-border/70 bg-background text-muted-foreground mb-4 inline-flex rounded-full border px-3 py-1.5 text-xs font-black tracking-[0.18em] shadow-sm">
                    {item.number}
                  </div>
                  <h3 className="text-foreground text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
                <div className="px-5 pb-5">
                  <StepVisual type={item.visual} />
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="border-border/80 bg-muted/45 dark:bg-muted/24 grid grid-cols-2 overflow-hidden rounded-t-lg border md:grid-cols-4">
            {steps.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`border-border/80 relative h-16 overflow-hidden border-r px-3 text-center text-sm font-semibold transition last:border-r-0 md:h-20 ${
                  activeStep === index
                    ? "bg-background text-foreground"
                    : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                }`}
              >
                {activeStep === index && (
                  <motion.span
                    key={activeStep}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: PROCESS_STEP_DURATION,
                      ease: "linear",
                    }}
                    className="bg-foreground/75 absolute top-0 left-0 h-[2px] shadow-[0_0_14px_rgba(18,18,18,0.22),0_0_26px_rgba(18,18,18,0.12)] dark:bg-white/80 dark:shadow-[0_0_14px_rgba(255,255,255,0.75),0_0_26px_rgba(255,255,255,0.35)]"
                  />
                )}
                {item.tab}
              </button>
            ))}
          </div>

          <div className="border-border/80 bg-muted/32 dark:bg-muted/18 grid overflow-hidden rounded-b-lg border-x border-b lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-border/80 flex items-center border-b px-6 py-12 lg:border-r lg:border-b-0 lg:px-8 xl:px-10">
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-xl"
              >
                <div className="border-border/70 bg-background text-muted-foreground mb-7 inline-flex rounded-full border px-4 py-2 text-xs font-black tracking-[0.18em] shadow-sm">
                  STEP {step.number}
                </div>
                <h3 className="text-foreground text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                  {step.headline}
                </h3>
                <p className="text-muted-foreground mt-7 text-base leading-8">
                  {step.description}
                </p>
              </motion.div>
            </div>

            <div className="flex min-w-0 items-center justify-center p-0">
              <motion.div
                key={step.visual}
                initial={{ opacity: 0, scale: 0.985, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="w-full"
              >
                <StepVisual type={step.visual} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
