import Link from "next/link";

import { ContactSubmissionForm } from "@/components/blocks/contact-submission-form";

export default function Contact() {
  return (
    <section className="bg-background text-foreground min-h-screen px-6 pt-32 pb-20 md:px-12 md:pt-40 lg:pt-44">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.25fr] lg:gap-24 xl:gap-32">
        <div className="contents lg:block">
          <div className="order-first lg:order-none">
            <p className="text-muted-foreground font-mono text-xs tracking-[0.32em] uppercase">
              Contact
            </p>
            <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-tight text-balance md:text-7xl lg:text-8xl">
              let&apos;s build.
            </h1>
            <p className="text-muted-foreground mt-9 max-w-md text-lg leading-relaxed md:text-xl">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          <div className="order-last mt-4 space-y-9 text-center lg:mt-20 lg:text-left">
            <div>
              <p className="text-muted-foreground font-mono text-xs tracking-[0.28em] uppercase">
                Primary HQ
              </p>
              <p className="mt-3 text-base font-medium">
                London, United Kingdom
              </p>
            </div>

            <div>
              <p className="text-muted-foreground font-mono text-xs tracking-[0.28em] uppercase">
                Email
              </p>
              <Link
                href="mailto:support@acesols.com"
                className="hover:text-muted-foreground mt-3 inline-block text-base font-medium transition-colors"
              >
                support@acesols.com
              </Link>
            </div>
          </div>
        </div>

        <ContactSubmissionForm variant="full" />
      </div>
    </section>
  );
}
