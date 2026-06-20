import Image from "next/image";

import { cn } from "@/lib/utils";

interface Certification {
  id: string;
  title: string;
  logoSrc: string;
}

const certifications: Certification[] = [
  { id: "cissp", title: "CISSP", logoSrc: "/cissp.png" },
  { id: "oscp", title: "OSCP", logoSrc: "/oscp.png" },
  { id: "vision2030", title: "Vision 2030", logoSrc: "/vision.png" },
  { id: "cmmi", title: "CMMI DEV 3 certified", logoSrc: "/cmmi1.webp" },
  { id: "iso27001", title: "ISO 27001 certified", logoSrc: "/iso27001.svg" },
  { id: "iso20000", title: "ISO 20000 certified", logoSrc: "/iso20000.svg" },
  { id: "iso9001", title: "ISO 9001 certified", logoSrc: "/iso9001.svg" },
];

const logoClass: Record<string, string> = {
  cissp: "max-h-[58px] sm:max-h-[78px]",
  oscp: "max-h-[64px] sm:max-h-[88px]",
  iso27001: "max-h-[62px] sm:max-h-[82px]",
  cmmi: "max-h-[68px] sm:max-h-[92px]",
  vision2030: "max-h-[64px] sm:max-h-[88px]",
  iso20000: "max-h-[62px] sm:max-h-[82px]",
  iso9001: "max-h-[62px] sm:max-h-[82px]",
};

function CertCell({
  item,
  className,
}: {
  item: Certification;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex min-h-[190px] flex-col items-center px-4 pt-11 pb-8 text-center sm:min-h-[224px] sm:px-6 sm:pt-12 lg:min-h-[244px]",
        className,
      )}
    >
      <p className="font-mono text-[12px] leading-[1.55] font-medium tracking-[0.1em] text-[#111827] uppercase">
        {item.title}
      </p>
      <div className="relative mt-9 flex h-[92px] w-full max-w-[210px] items-center justify-center sm:mt-10 sm:max-w-[240px]">
        <Image
          src={item.logoSrc}
          alt={item.title}
          width={280}
          height={92}
          className={cn(
            "h-auto w-auto max-w-full object-contain",
            logoClass[item.id],
          )}
          sizes="(max-width: 1024px) 45vw, 280px"
        />
      </div>
    </article>
  );
}

export function Certifications({ className }: { className?: string }) {
  const row1 = certifications.slice(0, 4);
  const row2 = certifications.slice(4);

  return (
    <section
      id="certifications"
      className={cn("w-full overflow-hidden py-20 lg:py-28", className)}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-3 sm:gap-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Certified by the best, trusted to deliver
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-medium">
              Recognized credentials for secure, reliable, enterprise-grade
              execution.
            </p>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-2 border-t border-zinc-300/90">
            {certifications.map((item, index) => (
              <CertCell
                key={item.id}
                item={item}
                className={cn(
                  "min-h-[178px] border border-zinc-300/90",
                  index === certifications.length - 1 &&
                    "col-span-2 mx-auto w-1/2",
                )}
              />
            ))}
          </div>
        </div>

        <div className="hidden w-full lg:block">
          <div className="mx-auto grid w-full grid-cols-4">
            {row1.map((item, index) => (
              <CertCell
                key={item.id}
                item={item}
                className={cn(
                  index < row1.length - 1 && "border-r border-zinc-300/90",
                )}
              />
            ))}
          </div>

          <div className="mx-auto w-full border-t border-zinc-300/90">
            <div className="mx-auto grid w-[80%] grid-cols-3">
              {row2.map((item, index) => (
                <CertCell
                  key={item.id}
                  item={item}
                  className={cn(
                    "min-h-[224px] border-r border-zinc-300/90",
                    index === 0 && "border-l",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
