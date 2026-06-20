import Image from "next/image";

import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
            { src: "/about/2.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="The team"
          paragraphs={[
            "Ace brings together product thinkers, software engineers, cloud specialists, data practitioners, and security experts around one shared objective: making difficult technology feel clear and manageable.",
            "We keep teams focused and communication direct. The people shaping the solution stay involved in delivery, so context is preserved and important decisions do not get lost between layers.",
            "Every engagement is built around the client’s environment, constraints, and long-term goals—not a fixed playbook.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="How we work"
          paragraphs={[
            "We begin by understanding the operation behind the brief: the users, risks, integrations, commercial priorities, and conditions the system must survive. From there, we define the smallest clear path to meaningful progress.",
            "Our work spans modern web and mobile products, enterprise platforms, AI-enabled workflows, cloud transformation, data engineering, and cybersecurity. We design for reliability, observability, and future change from the beginning.",
            "The result is technology that is easier to operate, easier to extend, and aligned with what the business is actually trying to achieve.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Modern workspace" },
            { src: "/about/4.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
}

export function TextSection({ title, paragraphs }: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
