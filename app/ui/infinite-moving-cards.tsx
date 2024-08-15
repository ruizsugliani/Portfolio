"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MovingCard } from "../data/data";
import { AnimatedTooltip } from "./animated-tooltip";
import Link from "next/link";
import { url } from "inspector";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: MovingCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={crypto.randomUUID()}
          >
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                  {item.image && <Image alt="alt" src={`/${item.image}`} height={500} width={500} className="w-full rounded-2xl"/>}
                  {item.quote && <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">item.quote</span>}
                <div className="relative z-20 mt-6 flex items-center justify-between">
                    {item.name && <span className="text-sm leading-[1.6] text-gray-400 font-normal">{item.name}</span>}
                    {item.title && <span className=" text-lg leading-[1.6] text-white font-normal">{item.title}</span>}
                </div>
                <div className="flex mt-2 justify-between items-center align-middle">
                    {
                        <AnimatedTooltip items={item.technologies} />
                    }
                </div>
              </blockquote>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
