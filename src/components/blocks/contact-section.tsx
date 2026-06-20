import { ContactSubmissionForm } from "@/components/blocks/contact-submission-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 lg:py-28">
      <div className="container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Let&apos;s build what&apos;s next for your business
        </h2>

        <ContactSubmissionForm variant="compact" />
      </div>
    </section>
  );
}
