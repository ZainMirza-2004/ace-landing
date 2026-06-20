import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { name: "Homepage", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Customers", href: "/customers" },
  { name: "Global", href: "/#global" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "#" },
  { name: "Security", href: "/#certifications" },
  { name: "Compliance", href: "/#certifications" },
];

export function Footer() {
  return (
    <footer className="relative mx-auto mt-2.5 w-[calc(100%-1.25rem)] overflow-hidden rounded-[1.35rem] bg-[#1b1d20] text-white ring-1 ring-black/10 lg:mt-4 lg:w-[calc(100%-2rem)]">
      <div className="relative z-10 mx-auto max-w-[min(88vw,1680px)] px-6 pt-14 pb-8 text-center sm:px-10 lg:pt-[clamp(4rem,5vw,7rem)]">
        <Link href="/" target="_self" className="mx-auto block w-fit">
          <Image
            src="/ace_logo footer.png"
            alt="Ace"
            width={320}
            height={320}
            className="h-[clamp(10rem,13vw,18rem)] w-[clamp(10rem,13vw,18rem)] object-contain"
          />
        </Link>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/34 lg:text-base">
          Enterprise software, AI systems, and secure cloud platforms for teams
          building what comes next.
        </p>

        <nav className="mt-[clamp(2.25rem,3vw,4rem)] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm lg:gap-x-12">
          {primaryLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_self"
              className="text-white/82 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="mailto:support@acesols.com"
          className="mt-7 inline-block text-sm text-white/46 transition-colors hover:text-white"
        >
          support@acesols.com
        </Link>

        <div className="mx-auto mt-[clamp(3.5rem,5vw,6.5rem)] h-px max-w-6xl bg-white/14" />

        <div className="mx-auto mt-7 flex max-w-6xl flex-col gap-4 text-sm text-white/34 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Ace.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_self"
                className="transition-colors hover:text-white/80"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[min(88vw,1680px)] px-5 pb-8">
        <div className="bg-black/10 px-5 py-5 text-left text-[13px] leading-relaxed text-white/34 sm:text-sm">
          <p>
            1 Ace Inc. is a software engineering and AI systems company, not a
            bank or financial institution. Services are provided for planning,
            implementation, integration, and ongoing technical support.
          </p>
          <p>
            2 Project timelines, availability, and delivery estimates depend on
            scope, technical complexity, vendor approvals, and customer
            responsiveness. Final deliverables are governed by the applicable
            statement of work and master services agreement.
          </p>
          <p>
            3 Security, compliance, and certification references describe
            internal delivery standards and/or customer-facing capabilities.
            Customers remain responsible for validating regulatory requirements
            in their own operating environments.
          </p>
          <p>
            4 Third-party platforms, cloud providers, and software vendors may
            change features, pricing, limits, or terms independently. Ace Inc.
            is not responsible for outages or policy changes controlled by third
            parties.
          </p>
          <p>
            5 By contacting Ace Inc., you agree that submitted project details
            may be reviewed by our team for qualification, scoping, and follow
            up. Confidential information should be shared only after an
            appropriate agreement is in place.
          </p>
        </div>
      </div>

      <div className="relative h-[clamp(12rem,24vw,32rem)] overflow-hidden">
        <p className="pointer-events-none absolute top-0 left-1/2 w-[150%] -translate-x-1/2 text-center font-sans text-[clamp(13rem,28vw,42rem)] leading-none font-black text-[#282a2d] select-none">
          Ace Inc.
        </p>
      </div>
    </footer>
  );
}
