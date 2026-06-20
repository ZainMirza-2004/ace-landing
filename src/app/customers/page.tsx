import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: "ibm",
    company: "IBM",
    logoSrc: "/ibm-new.svg",
    logoAlt: "IBM logo",
    logoClassName: "max-h-10 md:max-h-12",
    title: "Enterprise integration layer",
    industry: "Technology",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM%20CHQ%20-%20Oct%202014.jpg",
    imageAlt: "IBM corporate headquarters in Armonk, New York",
    overview:
      "IBM is a global technology and consulting company focused on hybrid cloud, AI, automation, and enterprise platforms that support mission-critical systems across regulated industries.",
    problem:
      "Enterprise teams were working across mainframe, private-cloud, and public-cloud environments with inconsistent APIs, duplicated integration work, and release processes that made modernization expensive to repeat.",
    solution:
      "Ace engineered a governed integration layer with standardized APIs, reusable service templates, deployment automation, and monitoring patterns that helped teams connect legacy systems to cloud-native workloads without rebuilding the same plumbing for every program.",
    results: [
      "Reduced integration cost across repeatable delivery programs",
      "Faster onboarding for new internal and partner-facing services",
      "Consistent API governance across hybrid estates",
      "Improved release confidence through automated deployment pipelines",
    ],
  },
  {
    id: "sophos",
    company: "Sophos",
    logoSrc: "/sophos-new.svg",
    logoAlt: "Sophos logo",
    logoClassName: "max-h-12 md:max-h-14",
    title: "Unified security operations",
    industry: "Cybersecurity",
    image:
      "https://www.sophos.com/sites/default/files/2024-10/xgs-128-2100-7500-light-atomsphere_0.png",
    imageAlt: "Sophos XGS firewall appliances",
    overview:
      "Sophos is a cybersecurity company delivering endpoint, network, email, cloud security, MDR, and advisory services for organizations that need coordinated protection across distributed environments.",
    problem:
      "Security operations teams needed a clearer operating layer between firewall telemetry, endpoint events, analyst queues, and incident handoffs so active threats could be contained quickly without overwhelming responders.",
    solution:
      "Ace built a unified security operations workflow that normalized telemetry, enriched alerts, routed incidents by severity, and connected response playbooks with SOC tooling so analysts could move from signal to containment faster.",
    results: [
      "Faster threat triage across endpoint and network signals",
      "Lower alert duplication for front-line analysts",
      "Clearer escalation paths for MDR and incident response teams",
      "Improved containment workflows for distributed customers",
    ],
  },
  {
    id: "ifinance",
    company: "iFinance Canada",
    logoSrc: "/ifinance-new.svg",
    logoAlt: "iFinance Canada logo",
    logoClassName: "max-h-14 md:max-h-16",
    title: "Composable lending stack",
    industry: "FinTech",
    image: "/customers/ifinance-platform.webp",
    imageAlt: "Digital lending and payment-plan platform interface",
    overview:
      "iFinance Canada provides personal loans and point-of-sale financing for medical, dental, veterinary, automotive, retail, and other consumer needs through brands including Medicard, Dentalcard, and Petcard.",
    problem:
      "Loan origination relied on batch-heavy scoring, fragmented provider workflows, and manual review steps that slowed approvals for patients, clinics, and service providers.",
    solution:
      "Ace designed a composable lending platform with real-time application intake, streaming eligibility checks, provider-facing status tools, and modular decision services that could support multiple financing verticals from one core stack.",
    results: [
      "Faster application decisions for customers and providers",
      "Reusable workflows across Medicard, Dentalcard, and Petcard programs",
      "Improved visibility into origination and approval bottlenecks",
      "Scalable foundation for new financing products",
    ],
  },
  {
    id: "ecs",
    company: "ECS",
    logoSrc: "/ecs.svg",
    logoAlt: "ECS logo",
    logoClassName: "max-h-16 md:max-h-20",
    title: "Managed platform rollout",
    industry: "IT services",
    image:
      "https://everforthecs.com/wp-content/uploads/2022/10/cloud-header-2022-web-2-2048x992.jpg",
    imageAlt: "ECS cloud solutions visual",
    overview:
      "ECS is a technology services company headquartered in Fairfax, Virginia, delivering cloud, cybersecurity, AI, digital transformation, science, and engineering solutions for public and private-sector customers.",
    problem:
      "Large platform migrations had to be coordinated across strict service windows, multiple vendor teams, and SLA-sensitive environments where a delayed release could disrupt customer operations.",
    solution:
      "Ace provided rollout engineering for migration planning, release orchestration, observability, rollback readiness, and delivery governance so platform changes could move through complex environments with predictable control.",
    results: [
      "Higher delivery throughput across managed release windows",
      "Improved production visibility during migration events",
      "Reduced manual coordination between delivery and operations teams",
      "Repeatable rollout model for future customer environments",
    ],
  },
  {
    id: "nbk",
    company: "NBK",
    logoSrc: "/nbk.svg",
    logoAlt: "NBK logo",
    logoClassName: "max-h-16 md:max-h-20",
    title: "Digital channels hardened",
    industry: "Banking",
    image: "/customers/nbk-wikimedia.jpg",
    imageAlt: "National Bank of Kuwait headquarters in Kuwait City",
    overview:
      "National Bank of Kuwait is a major banking group founded in 1952, serving retail, corporate, private banking, treasury, and digital banking customers across Kuwait and international markets.",
    problem:
      "High-volume payment paths and digital channels needed stronger resilience under peak usage, with tighter visibility into latency, failure points, and third-party service dependencies.",
    solution:
      "Ace hardened critical banking journeys by load-testing payment and account workflows, optimizing API paths, adding service-level observability, and validating failover behavior across mobile, branch, and back-office systems.",
    results: [
      "Improved availability for core digital services",
      "More reliable payment performance at peak volume",
      "Faster incident diagnosis through service-level telemetry",
      "Stronger operational readiness for mobile and branch channels",
    ],
  },
  {
    id: "arbisoft",
    company: "Arbisoft",
    logoSrc: "/arbisoft.svg",
    logoAlt: "Arbisoft logo",
    logoClassName: "max-h-10 md:max-h-12",
    title: "Product engineering at scale",
    industry: "Enterprise software",
    image: "/architect3.png",
    imageAlt: "Product architecture and release planning interface",
    overview:
      "Arbisoft is a global software and product development company working across data engineering, AI, e-commerce, travel, healthcare, finance, education, and enterprise technology.",
    problem:
      "Rapid product delivery across multiple client programs required consistent quality gates, reusable engineering practices, and a cleaner path from feature development to release.",
    solution:
      "Ace partnered on product engineering operations by standardizing CI/CD workflows, automated test gates, release reporting, and delivery dashboards that gave distributed teams a shared operating rhythm.",
    results: [
      "Faster delivery cycles across product squads",
      "More predictable release quality through automated gates",
      "Improved visibility into build, test, and deployment health",
      "Reusable delivery workflows for multi-client engineering programs",
    ],
  },
];

const blockHeading = "font-mono text-xs uppercase tracking-[0.15em]";
const bodyText = "text-base leading-relaxed font-medium";

export default function CustomersPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="border-b border-white/10 bg-[#0f1012] pt-32 pb-16 text-center text-white md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <h1 className="mx-auto max-w-[760px] text-4xl leading-[0.95] font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Selected work.
          </h1>
          <p className="mx-auto mt-8 max-w-[540px] text-lg leading-relaxed text-white/45 md:text-xl">
            Real challenges. Engineered solutions. Measurable outcomes.
          </p>
        </div>
      </section>

      {caseStudies.map((caseStudy, index) => {
        const dark = index % 2 === 1;

        return (
          <section
            id={caseStudy.id}
            key={caseStudy.title}
            className={cn(
              "scroll-mt-28 border-b py-20 md:scroll-mt-32 md:py-28",
              dark
                ? "border-white/10 bg-[#0f1012] text-white"
                : "bg-background text-foreground border-zinc-950/10",
            )}
          >
            <div className="mx-auto max-w-[1400px] px-6 md:px-12">
              <p
                className={cn(
                  "mb-4 font-mono text-xs tracking-[0.2em] uppercase",
                  dark ? "text-white/38" : "text-muted-foreground",
                )}
              >
                {caseStudy.industry}
              </p>

              <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="max-w-[760px] text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  {caseStudy.title}
                </h2>
                <div className="flex min-h-14 shrink-0 items-start sm:justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={caseStudy.logoSrc}
                    alt={caseStudy.logoAlt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "h-auto w-auto max-w-[180px] object-contain object-right opacity-90",
                      caseStudy.logoClassName,
                      caseStudy.id === "sophos" && dark && "brightness-0 invert",
                    )}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-3xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                  dark
                    ? "border-white/10 bg-white/[0.035]"
                    : "border-zinc-950/10 bg-zinc-950/[0.035]",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0",
                    dark ? "bg-black/10" : "bg-black/[0.02]",
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="space-y-10">
                  <div>
                    <h3
                      className={cn(
                        blockHeading,
                        "mb-3",
                        dark ? "text-white/38" : "text-muted-foreground",
                      )}
                    >
                      Client overview
                    </h3>
                    <p
                      className={cn(
                        bodyText,
                        dark ? "text-white/55" : "text-muted-foreground",
                      )}
                    >
                      {caseStudy.overview}
                    </p>
                  </div>

                  <div>
                    <h3
                      className={cn(
                        blockHeading,
                        "mb-3",
                        dark ? "text-white/38" : "text-muted-foreground",
                      )}
                    >
                      The challenge
                    </h3>
                    <p
                      className={cn(
                        bodyText,
                        dark ? "text-white/55" : "text-muted-foreground",
                      )}
                    >
                      {caseStudy.problem}
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3
                      className={cn(
                        blockHeading,
                        "mb-3",
                        dark ? "text-white/38" : "text-muted-foreground",
                      )}
                    >
                      The solution
                    </h3>
                    <p
                      className={cn(
                        bodyText,
                        dark ? "text-white/55" : "text-muted-foreground",
                      )}
                    >
                      {caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h3
                      className={cn(
                        blockHeading,
                        "mb-3",
                        dark ? "text-white/38" : "text-muted-foreground",
                      )}
                    >
                      Results
                    </h3>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                              dark ? "bg-white/45" : "bg-zinc-950/45",
                            )}
                          />
                          <span
                            className={cn(
                              bodyText,
                              dark ? "text-white/55" : "text-muted-foreground",
                            )}
                          >
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-zinc-950/10 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s create your success story.
          </h2>
          <Button className="mt-10 rounded-full px-8" size="lg" asChild>
            <Link href="/contact" target="_self">
              Start your project
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
