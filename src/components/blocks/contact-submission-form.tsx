"use client";

import { useState, type FormEvent } from "react";

import { ArrowUpRight, Check, LoaderCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/support@acesols.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactSubmissionFormProps {
  variant: "compact" | "full";
}

const sharedFields = [
  {
    label: "Name",
    fullLabel: "Full name *",
    name: "name",
    placeholder: "Your name",
    type: "text",
    required: true,
  },
  {
    label: "Company",
    fullLabel: "Company *",
    name: "company",
    placeholder: "Company name",
    type: "text",
    required: false,
  },
  {
    label: "Email",
    fullLabel: "Work email *",
    name: "email",
    placeholder: "you@company.com",
    type: "email",
    required: true,
  },
];

export function ContactSubmissionForm({
  variant,
}: ContactSubmissionFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const isFull = variant === "full";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error(result.message || "Unable to submit form");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          isFull
            ? "order-2 min-h-[470px] pt-4 lg:order-none lg:pt-10"
            : "border-border/80 bg-background/70 mx-auto mt-12 min-h-[360px] max-w-[560px] rounded-2xl border p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-14",
        )}
        role="status"
      >
        <motion.div
          initial={{ scale: 0.72 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.08, type: "spring", stiffness: 280, damping: 18 }}
          className="relative flex size-16 items-center justify-center rounded-full bg-zinc-950 text-white"
        >
          <motion.span
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
          >
            <Check className="size-7" strokeWidth={2.25} />
          </motion.span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-zinc-950"
          />
        </motion.div>
        <h2 className="mt-7 text-2xl font-semibold tracking-tight">
          We&apos;ve got it.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-sm text-base leading-relaxed">
          Your project details are with our team. We&apos;ll review everything
          and get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-muted-foreground mt-7 text-sm font-semibold underline underline-offset-4 transition hover:text-zinc-950"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/support@acesols.com"
      method="post"
      onSubmit={handleSubmit}
      className={cn(
        isFull
          ? "order-2 grid gap-x-8 gap-y-8 pt-4 md:grid-cols-2 lg:order-none lg:pt-10"
          : "border-border/80 bg-background/70 mx-auto mt-12 flex max-w-[560px] flex-col gap-5 rounded-2xl border p-6 text-left shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-14 sm:p-8",
      )}
    >
      <input
        type="hidden"
        name="_subject"
        value="New project enquiry from Ace Solutions"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value="Ace Solutions website" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {sharedFields.map((field) => (
        <label
          key={field.name}
          className={cn(
            "block",
            isFull && field.name === "company" && "md:order-2",
            isFull && field.name === "email" && "md:order-3",
          )}
        >
          <span
            className={cn(
              "text-muted-foreground",
              isFull
                ? "font-mono text-xs tracking-[0.28em] uppercase"
                : "text-sm font-semibold",
            )}
          >
            {isFull ? field.fullLabel : field.label}
          </span>
          <input
            type={field.type}
            name={field.name}
            required={field.required || (isFull && field.name === "company")}
            placeholder={field.placeholder}
            className={cn(
              "w-full outline-none transition",
              isFull
                ? "text-foreground mt-5 h-12 border-0 border-b border-zinc-950/38 bg-transparent px-0 text-base shadow-none placeholder:text-zinc-950/35 focus:border-zinc-950"
                : "border-input bg-background/80 mt-2 h-11 rounded-lg border px-4 text-sm text-zinc-950 shadow-xs placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-3 focus:ring-zinc-950/10",
            )}
          />
        </label>
      ))}

      {isFull && (
        <label className="block md:order-4">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.28em] uppercase">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Optional"
            className="text-foreground mt-5 h-12 w-full border-0 border-b border-zinc-950/38 bg-transparent px-0 text-base shadow-none transition outline-none placeholder:text-zinc-950/35 focus:border-zinc-950"
          />
        </label>
      )}

      <label className={cn("block", isFull && "md:order-5 md:col-span-2")}>
        <span
          className={cn(
            "text-muted-foreground",
            isFull
              ? "font-mono text-xs tracking-[0.28em] uppercase"
              : "text-sm font-semibold",
          )}
        >
          {isFull ? "Project description *" : "Project details"}
        </span>
        <textarea
          name="message"
          required
          placeholder={
            isFull
              ? "Tell us about your project, goals, and timeline..."
              : "Tell us about your goals, timeline, and stack."
          }
          className={cn(
            "w-full resize-y outline-none transition",
            isFull
              ? "text-foreground mt-5 min-h-36 border-0 border-b border-zinc-950/38 bg-transparent px-0 py-2 text-base shadow-none placeholder:text-zinc-950/35 focus:border-zinc-950"
              : "border-input bg-background/80 mt-2 min-h-[130px] rounded-lg border px-4 py-3 text-sm text-zinc-950 shadow-xs placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-3 focus:ring-zinc-950/10",
          )}
        />
      </label>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "text-sm text-red-600",
              isFull && "md:order-6 md:col-span-2 md:text-center",
            )}
            role="alert"
          >
            Something went wrong. Please try again or email{" "}
            <a className="underline" href="mailto:support@acesols.com">
              support@acesols.com
            </a>
            .
          </motion.p>
        )}
      </AnimatePresence>

      <div
        className={cn(
          isFull ? "flex justify-center pt-5 md:order-7 md:col-span-2" : "",
        )}
      >
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex h-12 items-center justify-center gap-3 font-semibold transition disabled:cursor-wait disabled:opacity-65",
            isFull
              ? "bg-zinc-950 px-8 text-sm text-white hover:bg-zinc-800 focus-visible:ring-3 focus-visible:ring-zinc-950/20 focus-visible:outline-none"
              : "from-foreground to-foreground/80 text-background w-full rounded-full bg-linear-to-b px-8 text-sm shadow-sm hover:opacity-90 focus-visible:ring-3 focus-visible:ring-zinc-950/20 focus-visible:outline-none",
          )}
        >
          {status === "submitting" ? (
            <>
              Sending
              <LoaderCircle className="size-4 animate-spin" />
            </>
          ) : (
            <>
              {isFull ? "Send message" : "Start a Project"}
              {isFull ? (
                <Send className="size-4" />
              ) : (
                <ArrowUpRight className="size-4" />
              )}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
