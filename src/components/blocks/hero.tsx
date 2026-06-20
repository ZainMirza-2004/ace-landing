import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-foreground text-6xl tracking-tight md:text-7xl lg:text-8xl">
            Engineering Your Future, Together
          </h1>

          <p className="hero-description text-muted-foreground mt-6 max-w-3xl text-xl md:text-2xl">
            We design, build, and scale your software, so you can focus on
            growing your business.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-2.5 md:flex-row md:gap-4 lg:flex-nowrap">
            <Button className="w-[13.75rem] md:w-auto" asChild>
              <a href="/contact" target="_self">
                Start a Project
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background w-[13.75rem] gap-2 bg-linear-to-r to-transparent shadow-md md:w-auto"
              asChild
            >
              <a
                href="#services"
                target="_self"
                className="w-full justify-center text-center md:w-auto md:max-w-none"
              >
                Explore Capabilities
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 px-4 md:mt-20 lg:container lg:mt-24">
        <div className="relative mx-auto aspect-[3/2] w-full max-w-[1200px] overflow-hidden rounded-2xl shadow-2xl dark:hidden">
          <Image
            src="/hero7.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 1200px, calc(100vw - 2rem)"
          />
          <div className="absolute inset-[5%] md:inset-[6%] lg:inset-[7%]">
            <Image
              src="/hero_dash.png"
              alt="Dashboard interface"
              fill
              priority
              className="rounded-xl object-contain drop-shadow-2xl"
              sizes="(min-width: 1280px) 1040px, 88vw"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset dark:ring-white/10"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto hidden aspect-[400/243] w-full max-w-[1200px] overflow-hidden rounded-xl shadow-2xl dark:block">
          <Image
            src="/hero_dash.png"
            alt="Dashboard interface"
            fill
            priority
            className="object-contain"
            sizes="(min-width: 1280px) 1200px, calc(100vw - 2rem)"
          />
        </div>
      </div>
    </section>
  );
};
