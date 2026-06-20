"use client";

import { useEffect, useRef, useState } from "react";

import createGlobe from "cobe";

import { cn } from "@/lib/utils";

const locations = [
  {
    city: "London, UK",
    country: "United Kingdom",
    location: [51.51, -0.13] as [number, number],
    size: 0.045,
    id: "london",
  },
  {
    city: "Virginia, US",
    country: "United States",
    location: [37.43, -78.66] as [number, number],
    size: 0.04,
    id: "virginia",
  },
  {
    city: "Riyadh, SA",
    country: "Saudi Arabia",
    location: [24.71, 46.67] as [number, number],
    size: 0.04,
    id: "riyadh",
  },
  {
    city: "Karachi, PK",
    country: "Pakistan",
    location: [24.86, 67.01] as [number, number],
    size: 0.04,
    id: "karachi",
  },
];

const stats = [
  "four active regions",
  "24/7 delivery window",
  "global client reach",
];

function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({
    isDragging: false,
    lastX: 0,
    lastY: 0,
    phi: -0.48,
    theta: 0.22,
  });
  const [size, setSize] = useState(520);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setSize(Math.max(280, Math.min(560, width)));
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let phi = pointerRef.current.phi;
    let theta = pointerRef.current.theta;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio,
      width: size,
      height: size,
      phi,
      theta,
      dark: 0,
      diffuse: 1.25,
      mapSamples: 18000,
      mapBrightness: 5.9,
      mapBaseBrightness: 0.03,
      baseColor: [0.96, 0.96, 0.93],
      markerColor: [0.08, 0.08, 0.08],
      glowColor: [1, 1, 0.96],
      markers: locations.map(({ location, size, id }) => ({
        location,
        size,
        id,
      })),
      markerElevation: 0.02,
      scale: 1,
      opacity: 1,
      context: {
        alpha: true,
        antialias: true,
      },
    });

    const animate = () => {
      if (!pointerRef.current.isDragging) {
        phi += 0.0018;
      } else {
        phi = pointerRef.current.phi;
        theta = pointerRef.current.theta;
      }

      pointerRef.current.phi = phi;
      pointerRef.current.theta = theta;
      globe.update({ phi, theta });
      frame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      globe.destroy();
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[35rem] cursor-grab touch-none active:cursor-grabbing"
      onPointerDown={(event) => {
        pointerRef.current.isDragging = true;
        pointerRef.current.lastX = event.clientX;
        pointerRef.current.lastY = event.clientY;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!pointerRef.current.isDragging) {
          return;
        }

        const deltaX = event.clientX - pointerRef.current.lastX;
        const deltaY = event.clientY - pointerRef.current.lastY;

        pointerRef.current.lastX = event.clientX;
        pointerRef.current.lastY = event.clientY;
        pointerRef.current.phi += deltaX * 0.008;
        pointerRef.current.theta = Math.max(
          -0.55,
          Math.min(0.55, pointerRef.current.theta - deltaY * 0.006),
        );
      }}
      onPointerUp={(event) => {
        pointerRef.current.isDragging = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => {
        pointerRef.current.isDragging = false;
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-95"
        style={{ width: size, height: size }}
      />
      {locations.map((location) => (
        <div
          key={location.id}
          className="bg-background/90 border-border/70 pointer-events-none absolute z-10 -translate-x-1/2 rounded-full border px-2.5 py-1 text-center text-[10px] leading-none font-semibold tracking-[0.08em] whitespace-nowrap text-zinc-950 uppercase opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 dark:bg-zinc-950/88 dark:text-white"
          style={
            {
              positionAnchor: `--cobe-${location.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              marginBottom: "9px",
              opacity: `var(--cobe-visible-${location.id}, 0)`,
            } as React.CSSProperties
          }
        >
          <span>{location.city}</span>
        </div>
      ))}
    </div>
  );
}

export function GlobalPresence({ className }: { className?: string }) {
  return (
    <section
      id="global"
      className={cn(
        "text-foreground w-full overflow-hidden py-20 lg:py-28",
        className,
      )}
    >
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Global teams
          </h2>
          <p className="text-muted-foreground mt-3 text-sm font-medium">
            Distributed engineering power across four continents.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden py-1">
            <CobeGlobe />
          </div>

          <div className="text-muted-foreground mt-6 text-center text-xs font-medium tracking-[0.16em] uppercase sm:text-[13px]">
            {stats.map((item, index) => (
              <span key={item} className="inline">
                {index > 0 && (
                  <span className="mx-2 text-muted-foreground/60">·</span>
                )}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
