"use client";

import React from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const SocialMediaButtons = () => {
  return (
    <div className="z-10 flex items-center gap-1.5" suppressHydrationWarning>
      <a
        href={config.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        title="Connect on LinkedIn"
        className="p-2 rounded-lg text-muted-foreground hover:text-[#0077b5] hover:bg-muted/60 transition-all duration-200 cursor-pointer"
      >
        <SiLinkedin size={22} />
      </a>
      <a
        href={config.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        title="Follow on Instagram"
        className="p-2 rounded-lg text-muted-foreground hover:text-[#e4405f] hover:bg-muted/60 transition-all duration-200 cursor-pointer"
      >
        <SiInstagram size={22} />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
