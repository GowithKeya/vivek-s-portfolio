"use client";

import React, { useState, useRef } from "react";
import { Play, Film, Sparkles, CheckCircle2, Volume2 } from "lucide-react";

export interface VideoItem {
  title: string;
  subtitle?: string;
  src: string;
  aspectRatio?: "16/9" | "9/16" | "4/3" | "auto";
  tag?: string;
  duration?: string;
  description?: string;
  techniques?: string[];
  tools?: string[];
}

interface VideoPlayerProps {
  videos: VideoItem[];
  defaultIndex?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videos,
  defaultIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideo = videos[currentIndex] || videos[0];

  if (!currentVideo) return null;

  const isPortrait = currentVideo.aspectRatio === "9/16";

  const handleSelectVideo = (idx: number) => {
    setCurrentIndex(idx);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <div className="w-full space-y-6 my-6">
      {/* Video Playlist Selector if more than 1 video */}
      {videos.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-muted/40 rounded-xl border border-border/50">
          <span className="text-xs font-semibold px-2 text-muted-foreground flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-primary" /> Cuts &amp; Versions:
          </span>
          {videos.map((vid, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectVideo(idx)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${
                idx === currentIndex
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
                  : "bg-background/80 hover:bg-muted text-foreground border border-border/40"
              }`}
            >
              <Play className="w-3 h-3 fill-current opacity-80" />
              <span>{vid.title}</span>
              {vid.tag && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    idx === currentIndex
                      ? "bg-black/20 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {vid.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Video Container Frame */}
      <div className="relative group rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-b from-neutral-950 to-neutral-900 shadow-2xl p-2 sm:p-3">
        {/* Top Header bar with status indicators */}
        <div className="flex items-center justify-between pb-2 px-1 text-xs text-muted-foreground border-b border-white/5 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-foreground text-sm">
              {currentVideo.title}
            </span>
            {currentVideo.subtitle && (
              <span className="hidden sm:inline-block text-xs text-muted-foreground">
                • {currentVideo.subtitle}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {currentVideo.duration && (
              <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded text-white/90">
                {currentVideo.duration}
              </span>
            )}
            <span className="text-[10px] font-mono uppercase bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full font-semibold">
              {isPortrait ? "9:16 Vertical Reel" : "16:9 Widescreen"}
            </span>
          </div>
        </div>

        {/* Video Player */}
        <div
          className={`relative mx-auto rounded-xl overflow-hidden bg-black flex items-center justify-center ${
            isPortrait
              ? "max-w-[340px] aspect-[9/16] shadow-xl ring-1 ring-white/10"
              : "w-full aspect-video shadow-xl ring-1 ring-white/10"
          }`}
        >
          <video
            ref={videoRef}
            key={currentVideo.src}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src={encodeURI(currentVideo.src)} type="video/mp4" />
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Quick hint beneath player */}
        <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-primary" /> Turn audio on for sound design &amp; audio sync experience
          </span>
          <span className="font-mono text-[10px]">1080p Master Export</span>
        </div>
      </div>

      {/* Video Details & Editing Breakdown */}
      {currentVideo.description && (
        <div className="bg-muted/30 border border-border/50 rounded-xl p-5 space-y-4">
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase font-mono mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Case Study &amp; Editing Breakdown
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground font-sans">
              {currentVideo.description}
            </p>
          </div>

          {/* Editing Techniques Grid */}
          {currentVideo.techniques && currentVideo.techniques.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-foreground mb-2">
                Key Editing &amp; Post-Production Highlights:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentVideo.techniques.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground bg-background/60 p-2.5 rounded-lg border border-border/40"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Used Pills */}
          {currentVideo.tools && currentVideo.tools.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-border/30">
              <span className="text-[11px] font-mono text-muted-foreground mr-1">
                Workflow Tools:
              </span>
              {currentVideo.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
