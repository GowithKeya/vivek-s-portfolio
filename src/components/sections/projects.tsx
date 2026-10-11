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
import { ArrowUpRight, Play } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
        <p className="text-sm text-muted-foreground font-mono">
          Featured video editing portfolio • All {projects.length} commercial cuts &amp; reels
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
}: {
  src: string;
  poster?: string;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        src={encodeURI(src)}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/10 shadow-lg"
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
                <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase font-mono bg-red-600/90 text-white shadow-md backdrop-blur-sm border border-white/20">
                    <Play className="w-2.5 h-2.5 fill-current" /> Video
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/25 backdrop-blur-[1px]">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/95 text-primary-foreground shadow-2xl backdrop-blur-md border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5 text-white" />
                    <span className="text-xs font-semibold text-white tracking-wide">Watch Project</span>
                  </div>
                </div>
              </>
            )}
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-lg font-semibold text-left text-foreground dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
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

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
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
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

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
