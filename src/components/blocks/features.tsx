"use client";

import type { ReactNode } from "react";

import Link from "next/link";

import {
  ArrowUpRight,
  Bot,
  Building2,
  Cloud,
  Code2,
  Lock,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Enterprise Solutions",
    description:
      "Custom systems, automation, dashboards, and internal tools built around your business operations.",
    className: "md:col-span-2",
    visual: "enterprise",
  },
  {
    title: "AI Chatbots & Agents",
    description:
      "Intelligent assistants that handle support, lead capture, workflows, and business-specific tasks.",
    visual: "ai",
  },
  {
    title: "Web & App Development",
    description:
      "High-performance websites, SaaS platforms, mobile apps, and customer-facing digital products.",
    visual: "dev",
  },
  {
    title: "Cyber Security",
    description:
      "Security reviews, monitoring, hardening, and protection for your systems, users, and data.",
    visual: "security",
  },
  {
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure, deployment pipelines, hosting, migrations, and ongoing optimisation.",
    visual: "cloud",
  },
];

function VisualShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-muted/55 dark:bg-muted/30 relative h-full w-full overflow-hidden rounded-lg">
      {children}
    </div>
  );
}

function StaticPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-border/70 bg-background/88 dark:bg-card/84 absolute rounded-lg border shadow-[0_8px_24px_rgba(15,23,42,0.07)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.22)] ${className}`}
    >
      {children}
    </div>
  );
}

function EnterpriseVisual() {
  const steps = [
    { icon: Building2, label: "CRM updated", sub: "New client record created" },
    { icon: Server, label: "ERP synced", sub: "Invoice #4821 dispatched" },
    {
      icon: Sparkles,
      label: "Workflow complete",
      sub: "3 tasks auto-assigned",
    },
  ];

  return (
    <VisualShell>
      <div className="from-border absolute top-8 left-1/2 h-[130px] w-px -translate-x-1/2 bg-linear-to-b to-transparent" />

      <div className="border-border/70 bg-background/90 dark:bg-card/86 absolute top-6 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 shadow-sm">
        <span className="text-muted-foreground text-[10px] font-medium">
          New client signed
        </span>
      </div>

      <div className="absolute top-16 right-6 left-6 space-y-2">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border-border/70 bg-background/90 dark:bg-card/86 flex items-center gap-3 rounded-lg border px-3.5 py-2.5 shadow-[0_8px_22px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_26px_rgba(0,0,0,0.2)]"
          >
            <div className="bg-muted grid h-7 w-7 shrink-0 place-items-center rounded-md shadow-inner">
              <step.icon size={13} className="text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-foreground text-[11px] font-semibold">
                {step.label}
              </div>
              <div className="text-muted-foreground truncate text-[10px]">
                {step.sub}
              </div>
            </div>
            <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 dark:bg-emerald-300" />
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.16,
            ease: "easeInOut",
          }}
          className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-zinc-400"
        />
      ))}
    </div>
  );
}

function AIVisual() {
  return (
    <VisualShell>
      <div className="border-border/70 bg-background/88 dark:bg-card/82 absolute top-5 right-5 left-5 overflow-hidden rounded-lg border shadow-sm">
        <div className="border-border/70 flex items-center gap-3 border-b px-4 py-3">
          <div className="bg-foreground text-background grid h-8 w-8 place-items-center rounded-full">
            <Bot size={15} />
          </div>
          <div>
            <div className="text-foreground text-[12px] font-semibold">
              AI Sales Agent
            </div>
            <div className="text-muted-foreground text-[10px]">Online now</div>
          </div>
        </div>

        <div className="space-y-3 px-4 py-4">
          <div className="bg-foreground text-background ml-auto max-w-[78%] rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[11px] leading-relaxed">
            Can you qualify this lead and book a call?
          </div>
          <div className="border-border/70 bg-muted/55 text-muted-foreground max-w-[82%] rounded-2xl rounded-tl-md border px-3.5 py-2.5 text-[11px] leading-relaxed">
            Absolutely. I'll check their needs, budget, and preferred time.
          </div>
          <div className="border-border/70 bg-muted/55 inline-flex rounded-2xl rounded-tl-md border px-3.5 py-3">
            <TypingDots />
          </div>
        </div>

        <div className="border-border/70 flex items-center gap-2 border-t px-3 py-3">
          <div className="bg-muted/70 text-muted-foreground flex-1 rounded-full px-4 py-2 text-[11px]">
            Message your agent...
          </div>
          <div className="bg-foreground text-background grid h-8 w-8 place-items-center rounded-full">
            <Send size={13} />
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function DevVisual() {
  return (
    <VisualShell>
      <StaticPanel className="top-10 left-6 w-[calc(100%-3rem)] px-4 py-3">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-slate-800 dark:text-zinc-100">
          <Code2 size={14} /> Product build
        </div>
        <div className="space-y-2">
          <div className="h-2 w-40 max-w-full rounded bg-slate-200 dark:bg-zinc-700" />
          <div className="h-2 w-28 rounded bg-slate-200 dark:bg-zinc-700" />
          <div className="h-2 w-36 rounded bg-slate-200 dark:bg-zinc-700" />
        </div>
      </StaticPanel>
      <div className="border-border/70 bg-background/86 dark:bg-card/82 absolute bottom-12 left-7 h-10 w-36 rounded-lg border shadow-sm">
        <div className="flex h-full items-center px-3 text-[10px] font-medium text-slate-500 dark:text-zinc-400">
          deploying build...
        </div>
      </div>
    </VisualShell>
  );
}

function SecurityVisual() {
  return (
    <VisualShell>
      <div className="border-border/70 bg-background/90 dark:bg-card/86 absolute top-10 left-1/2 grid h-24 w-24 -translate-x-1/2 place-items-center rounded-lg border shadow-[0_12px_28px_rgba(15,23,42,0.08)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.24)]">
        <ShieldCheck className="text-slate-800 dark:text-zinc-100" size={34} />
      </div>
      {[
        "top-[58px] left-[62px]",
        "top-[58px] right-[62px]",
        "bottom-[44px] left-[76px]",
        "bottom-[44px] right-[76px]",
      ].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos} border-border/60 bg-background/90 dark:bg-card/86 grid h-8 w-8 place-items-center rounded-full border shadow-[0_8px_20px_rgba(15,23,42,0.07)] dark:shadow-[0_9px_22px_rgba(0,0,0,0.22)]`}
        >
          <Lock size={12} className="text-slate-500 dark:text-zinc-400" />
        </div>
      ))}
    </VisualShell>
  );
}

function CloudVisual() {
  return (
    <VisualShell>
      <StaticPanel className="top-9 left-6 w-[calc(100%-3rem)] px-4 py-3.5">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-slate-800 dark:text-zinc-100">
          <Cloud size={14} /> Cloud stack
        </div>
        <div className="flex h-[72px] items-end gap-2">
          {[28, 45, 34, 58, 42, 70].map((h, i) => (
            <div
              key={i}
              className="w-4 rounded-t border border-slate-300/70 bg-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_14px_rgba(15,23,42,0.08)] dark:border-zinc-600 dark:bg-zinc-500 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_7px_16px_rgba(0,0,0,0.24)]"
              style={{ height: h }}
            />
          ))}
        </div>
      </StaticPanel>
      <div className="border-border/70 bg-background/90 dark:bg-card/86 absolute right-8 bottom-9 rounded-full border px-3.5 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.07)] dark:shadow-[0_9px_22px_rgba(0,0,0,0.22)]">
        <div className="text-[10px] font-medium text-slate-600 dark:text-zinc-300">
          99.9% uptime
        </div>
      </div>
    </VisualShell>
  );
}

function Visual({ type }: { type: string }) {
  if (type === "enterprise") return <EnterpriseVisual />;
  if (type === "ai") return <AIVisual />;
  if (type === "dev") return <DevVisual />;
  if (type === "security") return <SecurityVisual />;
  return <CloudVisual />;
}

export const Features = () => {
  return (
    <section id="services" className="text-foreground w-full py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Our services
          </h2>
          <p className="text-muted-foreground mt-3 text-sm font-medium">
            Technology that feels custom-built for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`bg-card/80 border-border/80 overflow-hidden rounded-xl border p-5 shadow-sm backdrop-blur-sm dark:bg-zinc-950/45 ${service.className || ""}`}
            >
              <div className="mb-6 h-52 overflow-hidden rounded-xl">
                <Visual type={service.visual} />
              </div>
              <h3 className="text-foreground text-base font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-md text-sm leading-6">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/80 bg-background text-foreground hover:bg-accent rounded-full px-6"
            asChild
          >
            <Link href="/services" target="_self">
              View all services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
