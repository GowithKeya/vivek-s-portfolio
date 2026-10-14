"use client";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { Play } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { motion } from "motion/react";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";

import projects, { Project } from "@/data/projects";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4 pointer-events-auto">
      <SectionHeader id="projects" title="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
        <p className="text-sm text-muted-foreground font-mono">
          Featured video editing portfolio • All {projects.length}{" "}commercial cuts &amp; reels
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-background/80 hover:bg-muted text-foreground transition-all duration-200 shadow-sm"
          >
            <SiLinkedin className="w-3.5 h-3.5 text-[#0077b5]" />
            LinkedIn Profile
          </Link>
          <Link
            href={config.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-pink-500/30 bg-background/80 hover:bg-pink-500/10 text-foreground transition-all duration-200 shadow-sm"
          >
            <SiInstagram className="w-3.5 h-3.5 text-[#e4405f]" />
            Instagram @me_vvk_
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectVideoThumbnail = ({
  src,
  poster,
  isHovered = false,
}: {
  src: string;
  poster?: string;
  isHovered?: boolean;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // Initialize video settings (muted, paused on initial frame)
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const handleLoaded = () => {
      setIsVideoLoaded(true);
      if (!isHovered) {
        try {
          video.currentTime = 0.001;
          video.pause();
        } catch {
          // ignore
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("loadeddata", handleLoaded);

    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("loadeddata", handleLoaded);
    };
  }, []);

  // Hover playback: play when hovered, pause & reset to first frame when unhovered
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled silently if interrupted by quick mouse exit
        });
      }
    } else {
      video.pause();
      try {
        video.currentTime = 0.001;
      } catch {
        // ignore
      }
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden pointer-events-none">
      {/* Paused video serves as the primary thumbnail and plays on hover */}
      <video
        ref={videoRef}
        src={`${encodeURI(src)}#t=0.001`}
        muted
        loop
        playsInline
        preload="metadata"
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 ease-out",
          isHovered ? "scale-105" : "scale-100",
          isVideoLoaded ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Fallback poster while video frame is initialising */}
      {!isVideoLoaded && poster && (
        <img
          src={poster}
          alt="Project preview"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center pointer-events-auto w-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger asChild>
          <button
            type="button"
            className="group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/10 shadow-lg cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-300 active:scale-[0.98]"
            style={{ aspectRatio: "3/2" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {project.videoSrc ? (
              <ProjectVideoThumbnail
                src={project.videoSrc}
                poster={project.src}
                isHovered={isHovered}
              />
            ) : (
              <ScrollingPreview
                src={project.src}
                alt={project.title}
                bg={`/assets/backgrounds/${project.id}.jpg`}
                isHovered={isHovered}
              />
            )}

            {project.hasVideo && (
              <>
                {/* Status badge in top right */}
                <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                  <span
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase font-mono shadow-md backdrop-blur-md border transition-all duration-300",
                      isHovered
                        ? "bg-emerald-600/90 text-white border-emerald-400/40 shadow-emerald-950/40"
                        : "bg-red-600/90 text-white border-white/20"
                    )}
                  >
                    {isHovered ? (
                      <>
                        <span className="size-1.5 rounded-full bg-white animate-pulse" />
                        Previewing
                      </>
                    ) : (
                      <>
                        <Play className="w-2.5 h-2.5 fill-current" />
                        Video
                      </>
                    )}
                  </span>
                </div>

                {/* Center play icon: visible when paused, fades out when playing on hover so video is completely unobstructed */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-all duration-300",
                    isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  )}
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-black/50 text-white shadow-2xl backdrop-blur-sm border border-white/25 transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                  </div>
                </div>
              </>
            )}
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-base sm:text-lg font-semibold text-left text-foreground dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.8)] line-clamp-1">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2 mt-1">
                  {project.category}
                </div>
              </div>
            </div>
          </button>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky responsive header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                <h4 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="shrink-0 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5 hidden xs:inline-block">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <Link
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted text-foreground transition-colors shadow-sm"
                >
                  <SiLinkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </Link>
                <Link
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-pink-500/30 bg-background hover:bg-pink-500/10 text-foreground transition-colors shadow-sm"
                >
                  <SiInstagram className="w-3.5 h-3.5 text-[#e4405f]" />
                  <span className="hidden sm:inline">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scrollable content with responsive spacing */}
          <ScrollArea className="flex-1 overflow-y-auto" type="always" data-lenis-prevent>
            <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Primary Tools
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Deliverables &amp; Workflow
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
