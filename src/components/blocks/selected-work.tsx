"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import Link from "next/link";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Story {
  logoKey: string;
  logoSrc: string;
  logoAlt: string;
  href: string;
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
}

const stories: Story[] = [
  {
    logoKey: "ibm",
    logoSrc: "/ibm-new.svg",
    logoAlt: "IBM",
    href: "/customers#ibm",
    company: "IBM",
    industry: "Technology",
    metric: "40%",
    metricLabel: "Reduction in integration cost",
    title: "Enterprise integration layer",
    description:
      "Standardized APIs and governance across mainframe and cloud estates with repeatable deployment pipelines.",
  },
  {
    logoKey: "sophos",
    logoSrc: "/sophos-new.svg",
    logoAlt: "Sophos",
    href: "/customers#sophos",
    company: "Sophos",
    industry: "Cybersecurity",
    metric: "3.2x",
    metricLabel: "Faster threat containment",
    title: "Unified security operations",
    description:
      "Integrated firewall telemetry with SOC workflows, cutting mean time to respond across distributed teams.",
  },
  {
    logoKey: "ifinance",
    logoSrc: "/ifinance-new.svg",
    logoAlt: "iFinance Canada",
    href: "/customers#ifinance",
    company: "iFinance Canada",
    industry: "FinTech",
    metric: "2.8x",
    metricLabel: "Faster time to market",
    title: "Composable lending stack",
    description:
      "Replaced batch scoring with streaming data feeds, shortening origination from days to hours.",
  },
  {
    logoKey: "ecs",
    logoSrc: "/ecs.svg",
    logoAlt: "ECS",
    href: "/customers#ecs",
    company: "ECS",
    industry: "IT services",
    metric: "23%",
    metricLabel: "Higher delivery throughput",
    title: "Managed platform rollout",
    description:
      "Coordinated migration windows and observability so releases stayed predictable under strict SLAs.",
  },
  {
    logoKey: "nbk",
    logoSrc: "/nbk.svg",
    logoAlt: "NBK",
    href: "/customers#nbk",
    company: "NBK",
    industry: "Banking",
    metric: "98.7%",
    metricLabel: "Core services availability",
    title: "Digital channels hardened",
    description:
      "Load-tested and optimized payment paths so mobile and branch systems stayed responsive at volume.",
  },
  {
    logoKey: "arbisoft",
    logoSrc: "/arbisoft.svg",
    logoAlt: "Arbisoft",
    href: "/customers#arbisoft",
    company: "Arbisoft",
    industry: "Enterprise software",
    metric: "2.8x",
    metricLabel: "Faster delivery cycles",
    title: "Product engineering at scale",
    description:
      "Unified build, test, and release workflows with automated quality gates for predictable delivery.",
  },
];

const storyLogoClass: Record<string, string> = {
  sophos: "max-h-[58px]",
  ibm: "max-h-[44px]",
  ecs: "max-h-[78px] -mt-3 -ml-4",
  nbk: "max-h-[92px] -mt-4 -ml-3",
  ifinance: "max-h-[70px] -mt-3",
  arbisoft: "max-h-[40px]",
};

function SectionIntro({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 text-sm font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function StoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.48,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-story-card
      className="border-border/80 bg-background/80 group relative flex min-h-[380px] w-full min-w-full shrink-0 snap-center snap-always flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md md:h-[400px] md:w-[350px] md:min-w-0"
    >
      <div className="flex h-full min-h-0 flex-col p-6 pb-20 md:pb-7">
        <div className="mb-6 flex h-20 items-start justify-between gap-5">
          <div className="flex min-w-0 flex-1 items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.logoSrc}
              alt={story.logoAlt}
              loading="lazy"
              decoding="async"
              className={cn(
                "h-auto w-auto max-w-full object-contain object-left opacity-90 transition group-hover:opacity-100",
                storyLogoClass[story.logoKey] ?? "max-h-12",
              )}
            />
          </div>
          <span className="border-border/80 bg-muted text-muted-foreground inline-flex h-8 max-w-36 shrink-0 items-center rounded-full border px-3 text-[10px] leading-none font-semibold tracking-[0.14em] uppercase">
            <span className="truncate">{story.industry}</span>
          </span>
        </div>

        <div className="mb-5">
          <span className="text-foreground block text-5xl leading-none font-semibold tracking-tight tabular-nums">
            {story.metric}
          </span>
          <p className="text-muted-foreground mt-2 text-xs leading-snug font-semibold">
            {story.metricLabel}
          </p>
        </div>

        <div className="border-border/70 mb-5 border-t" />

        <h3 className="text-foreground mb-3 text-base font-semibold">
          {story.title}
        </h3>
        <p className="text-muted-foreground min-h-0 flex-1 text-sm leading-6">
          {story.description}
        </p>

        <div className="absolute right-6 bottom-6 flex justify-end md:static md:mt-auto md:pt-8">
          <Link
            href={story.href}
            target="_self"
            className="bg-foreground text-background flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
            aria-label={`Read the ${story.company} case study`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWork({ className }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;

    if (!el) {
      return;
    }

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);

    return () => window.removeEventListener("resize", handleScroll);
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-story-card]"),
      );
      const currentIndex = cards.reduce((closestIndex, card, index) => {
        const closestCard = cards[closestIndex];
        const cardDistance = Math.abs(card.offsetLeft - track.scrollLeft);
        const closestDistance = Math.abs(
          closestCard.offsetLeft - track.scrollLeft,
        );

        return cardDistance < closestDistance ? index : closestIndex;
      }, 0);
      const targetIndex =
        direction === "left"
          ? Math.max(currentIndex - 1, 0)
          : Math.min(currentIndex + 1, cards.length - 1);

      track.scrollTo({
        left: cards[targetIndex]?.offsetLeft ?? 0,
        behavior: "smooth",
      });

      return;
    }

    track.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      className={cn(
        "relative w-full overflow-hidden py-20 lg:py-28",
        className,
      )}
    >
      <div className="container">
        <div className="flex flex-col gap-10 sm:gap-12">
          <SectionIntro subtitle="Software that performs under real operational pressure.">
            Success stories
          </SectionIntro>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              type="button"
              variant="secondary"
              size="default"
              className="border-border bg-background hover:bg-accent rounded-full border px-5 shadow-sm"
              asChild
            >
              <Link href="/contact" target="_self">
                Discuss a project
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="border-border bg-background hover:bg-accent flex h-9 w-9 items-center justify-center rounded-full border transition disabled:opacity-30"
              aria-label="Scroll success stories left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="border-border bg-background hover:bg-accent flex h-9 w-9 items-center justify-center rounded-full border transition disabled:opacity-30"
              aria-label="Scroll success stories right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>

          <div className="relative overflow-hidden">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] md:snap-none [&::-webkit-scrollbar]:hidden"
            >
              {stories.map((story, index) => (
                <StoryCard
                  key={`${story.logoKey}-${story.title}`}
                  story={story}
                  index={index}
                />
              ))}
              <div className="w-2 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
