"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const [firstName, ...lastNameParts] = config.author.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-[100dvh] flex flex-col justify-center")}>
      <div className="grid md:grid-cols-2 w-full">
        <div
          className={cn(
            "min-h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-start",
            "pt-20 pb-16 px-4 sm:px-8 md:py-16 md:pl-12 md:pr-6 lg:py-20 lg:pl-16 lg:pr-8 xl:py-24 xl:pl-20 xl:pr-10"
          )}
        >
          <div className="flex flex-col w-full max-w-xl 2xl:max-w-2xl">
            <div>
              <BlurIn delay={0.2}>
                <p
                  className={cn(
                    "font-medium text-sm sm:text-lg md:text-xl text-slate-500 dark:text-zinc-400",
                    "cursor-default whitespace-normal sm:whitespace-nowrap bg-clip-text"
                  )}
                >
                  Hi, I am
                </p>
              </BlurIn>

              <BlurIn delay={0.4}>
                <h1
                  className={cn(
                    "-ml-[2px] sm:-ml-[4px] md:-ml-[6px] leading-[0.98] sm:leading-[0.92] text-left",
                    "text-foreground",
                    "font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7.5rem]",
                    "cursor-default font-display select-none tracking-tight"
                  )}
                >
                  <span className="block whitespace-nowrap">{firstName}</span>
                  <span className="block whitespace-nowrap">{lastName}</span>
                </h1>
              </BlurIn>

              <BlurIn delay={0.6}>
                <p
                  className={cn(
                    "mt-3 md:mt-4 font-medium text-base sm:text-xl md:text-xl text-slate-500 dark:text-zinc-400",
                    "cursor-default whitespace-normal sm:whitespace-nowrap bg-clip-text"
                  )}
                >
                  Video Editor &amp; Graphic Designer
                </p>
              </BlurIn>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-fit">
              <Link href={"/resume"} className="w-full sm:w-auto">
                <BoxReveal delay={0.8} width="100%">
                  <Button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-11 text-sm font-semibold shadow-sm">
                    <File size={20} />
                    <span>View Résumé</span>
                  </Button>
                </BoxReveal>
              </Link>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href={"#contact"} className="flex-1 sm:flex-none">
                      <Button
                        variant={"outline"}
                        className="w-full sm:w-auto h-11 px-5 text-sm font-medium"
                      >
                        Hire Me
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>pls 🥹 🙏</p>
                  </TooltipContent>
                </Tooltip>
                {(Boolean(config.social.linkedin) || Boolean(config.social.instagram)) && (
                  <div className="flex items-center h-full gap-2">
                    {config.social.linkedin && (
                      <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        title="Connect on LinkedIn"
                        className="cursor-can-hover inline-flex items-center justify-center h-11 w-11 rounded-md border border-input bg-background hover:bg-muted hover:text-[#0077b5] transition-colors"
                      >
                        <SiLinkedin size={20} />
                      </a>
                    )}
                    {config.social.instagram && (
                      <a
                        href={config.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Profile"
                        title="Follow on Instagram"
                        className="cursor-can-hover inline-flex items-center justify-center h-11 w-11 rounded-md border border-input bg-background hover:bg-muted hover:text-[#e4405f] transition-colors"
                      >
                        <SiInstagram size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="hidden sm:block absolute bottom-8 left-[50%] translate-x-[-50%] pointer-events-none">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
