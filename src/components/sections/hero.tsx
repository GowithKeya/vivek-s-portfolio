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
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-sm sm:text-lg md:text-xl text-slate-500 dark:text-zinc-400",
                      "cursor-default whitespace-normal sm:whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "-ml-[4px] sm:-ml-[6px] leading-tight sm:leading-none text-left",
                      "text-foreground",
                      "font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
                      "cursor-default font-display break-words"
                    )}
                  >
                    {config.author.split(" ")[0]}
                    <br className="md:block hidden" />
                    {config.author.split(" ")[1]}
                  </h1>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-base sm:text-xl md:text-xl text-slate-500 dark:text-zinc-400",
                      "cursor-default whitespace-normal sm:whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Video Editor &amp; Graphic Designer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit max-w-full">
                <Link
                  href={"/resume"}
                  className="flex-1"
                >
                  <BoxReveal delay={1.4} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>View Résumé</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex flex-wrap gap-2.5 sm:gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
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
                          className="cursor-can-hover inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-muted hover:text-[#0077b5] transition-colors"
                        >
                          <SiLinkedin size={22} />
                        </a>
                      )}
                      {config.social.instagram && (
                        <a
                          href={config.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram Profile"
                          title="Follow on Instagram"
                          className="cursor-can-hover inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-muted hover:text-[#e4405f] transition-colors"
                        >
                          <SiInstagram size={22} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
