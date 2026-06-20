import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "AI",
    label: "Intelligent systems",
  },
  {
    value: "Cloud",
    label: "Modern platforms",
  },
  {
    value: "Secure",
    label: "By design",
  },
  {
    value: "Scale",
    label: "Built for growth",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Democratising quality software
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Ace turns ambitious ideas into dependable digital systems.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Ace Solutions designs and engineers software for organisations with
            complex goals and no room for fragile technology. We work across
            product development, AI, cloud infrastructure, data, and security
            to create systems that perform in the real world.
            <br />
            <br />
            Our teams stay close to the problem from discovery through launch.
            That means clear decisions, pragmatic engineering, and technology
            that remains useful long after the first release.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
