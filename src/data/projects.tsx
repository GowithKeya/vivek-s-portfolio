import { VideoPlayer } from "@/components/video-player";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Film, Sparkles, Layers } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/backgrounds";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 my-4 mb-6">
      <Link
        className="font-mono flex items-center gap-2"
        rel="noopener noreferrer"
        target="_blank"
        href={config.social.linkedin}
      >
        <Button variant={"default"} size={"sm"} className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-medium flex items-center gap-1.5 shadow-sm">
          <SiLinkedin className="w-4 h-4 fill-current" />
          LinkedIn Profile
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
      <Link
        className="font-mono flex items-center gap-2"
        rel="noopener noreferrer"
        target="_blank"
        href={config.social.instagram}
      >
        <Button variant={"outline"} size={"sm"} className="border-pink-500/40 hover:bg-pink-500/10 text-foreground font-medium flex items-center gap-1.5">
          <SiInstagram className="w-4 h-4 text-[#e4405f]" />
          Instagram @me_vvk_
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
      {live && live !== "#" && (
        <Link
          className="font-mono flex items-center gap-2"
          href={live}
        >
          <Button variant={"secondary"} size={"sm"} className="flex items-center gap-1.5">
            Inquire About Editing
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  photoshop: brand("Photoshop", "photoshop.svg"),
  illustrator: brand("Illustrator", "illustrator.svg"),
  premiere: brand("Premiere Pro", "premierepro.svg"),
  aftereffects: brand("After Effects", "aftereffects.svg"),
  coreldraw: brand("CorelDRAW", "coreldraw.svg"),
  figma: brand("Figma", "figma.svg"),
  storyline: brand("Articulate Storyline", "storyline.svg"),
  aitools: brand("AI Workflow", "aitools.svg"),
  msoffice: brand("MS Office", "msoffice.svg"),
  motion: brand("Motion Graphics", "motion.svg"),
  print: brand("Print & Prepress", "print.svg"),
  branding: brand("Brand Identity", "branding.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  videoSrc?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  hasVideo?: boolean;
};

const projects: Project[] = [
  // 1. Asopalav Realty Commercial
  {
    id: "asopalav-realty",
    category: "Commercial Real Estate Ad",
    title: "Asopalav Realty Architectural Commercial",
    src: `${BASE_PATH}/storekit.jpg`,
    videoSrc: "/assets/VIDEO EDITING/Asopalav Realty Ad .mp4",
    screenshots: ["storekit.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.aitools,
        PROJECT_SKILLS.branding,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Commercial Real Estate Film
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Asopalav Realty Architectural Commercial Film
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A high-end architectural commercial film edited for Asopalav Realty. Captures panoramic aerial drone sweeps, smooth interior gimbal walkthroughs, and modern interior aesthetics to convert luxury home buyers through emotional visual storytelling.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Asopalav Realty Commercial Film",
                subtitle: "Final Broadcast Master",
                src: "/assets/VIDEO EDITING/Asopalav Realty Ad .mp4",
                aspectRatio: "16/9",
                tag: "1080p 16:9",
                duration: "0:45",
                description:
                  "Comprehensive post-production edit combining high-altitude drone tracking shots with interior walkthroughs and custom kinetic lower-thirds. Synchronized to an orchestral ambient score to evoke prestige and luxury.",
                techniques: [
                  "Warm architectural color grading enhancing golden hour daylight",
                  "Speed ramps and stabilized motion tracking on aerial drone sweeps",
                  "Custom motion typography highlighting square footage and amenities",
                  "Multitrack sound design layering ambient environmental acoustics with music score",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "Lumetri Color", "Essential Sound"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Post-Production Strategy
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Real estate commercial videos demand pacing that feels expansive yet engaging. The edit was structured around the viewer journey: opening with high-impact drone establishing shots, transitioning into luxury interiors, and concluding with a clear, branded call-to-action.
          </p>
        </div>
      );
    },
  },

  // 2. Luxury Bag Product Film
  {
    id: "luxury-bag",
    category: "Commercial Product Video",
    title: "Handcrafted Luxury Product Showcase Film",
    src: `${BASE_PATH}/kanbi.jpg`,
    videoSrc: "/assets/VIDEO EDITING/bag 1 final (1).mp4",
    screenshots: ["kanbi.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.aitools,
        PROJECT_SKILLS.branding,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Commercial Product Film
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Luxury Leather Accessories Product Film
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A high-energy commercial product film celebrating artisanal craftsmanship and luxury leather aesthetics. Shot in low-key studio lighting with macro lenses, edited with precision cuts that accent texture, metallic zippers, and premium leather grain.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Handcrafted Bag Commercial Cut",
                subtitle: "Studio Master Cut",
                src: "/assets/VIDEO EDITING/bag 1 final (1).mp4",
                aspectRatio: "16/9",
                tag: "Product Film",
                duration: "0:30",
                description:
                  "Designed for e-commerce advertising and brand awareness. Utilizes rhythm-based cutting where camera rotations and focal shifts match electronic bass pulses to keep the viewer locked onto the product details.",
                techniques: [
                  "Beat-synchronized cut timing matching the electronic music tempo",
                  "Macro focal pulls and speed ramps spotlighting leather stitching",
                  "Specular highlight enhancement and studio contrast curves",
                  "E-commerce retention hooks structured for high consumer engagement",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Audition"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Editing Focus
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Product commercial editing requires balancing aesthetics with information. By synchronizing camera moves with musical accents, the video presents the product not merely as an object, but as a lifestyle statement with tangible quality.
          </p>
        </div>
      );
    },
  },

  // 3. Smartphone Tech Comparison
  {
    id: "mobile-comparison",
    category: "Tech Review & Motion Graphics",
    title: "Smartphone Tech Comparison & Specs Breakdown",
    src: `${BASE_PATH}/peakposts.jpg`,
    videoSrc: "/assets/VIDEO EDITING/Mobile Comparison Video Linked Comp 02.mp4",
    screenshots: ["peakposts.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.illustrator,
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.aitools,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Motion Graphics &amp; Tech Review
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Smartphone Tech Comparison &amp; Linked Compositions
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A fast-paced tech review and smartphone comparison video engineered for YouTube tech audiences. Features Adobe After Effects Dynamic Link comps, split-screen comparisons, and motion graphics that dissect smartphone performance.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Smartphone Comparison Linked Comp",
                subtitle: "Motion Graphics Edit",
                src: "/assets/VIDEO EDITING/Mobile Comparison Video Linked Comp 02.mp4",
                aspectRatio: "16/9",
                tag: "After Effects Comp",
                duration: "1:00",
                description:
                  "High-retention tech breakdown featuring side-by-side spec comparisons, camera sensor evaluation, and animated graphic cards created in After Effects and linked directly into Adobe Premiere Pro for seamless editing.",
                techniques: [
                  "Synchronized split-screen framing for direct hardware comparison",
                  "Kinetic typography and spec charts built with vector keyframing",
                  "Punch-in camera transitions with motion blur and directional wipes",
                  "Sound effects layer: whoosh transitions, digital UI clicks, and risers",
                ],
                tools: ["Adobe After Effects", "Adobe Premiere Pro", "Dynamic Link", "Illustrator"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Dynamic Motion Graphics Workflow
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Tech audiences demand rapid information delivery without visual fatigue. Leveraging Adobe Dynamic Link enabled real-time iteration on complex After Effects compositions while maintaining smooth timeline playback in Premiere Pro.
          </p>
        </div>
      );
    },
  },

  // 4. Nitish Reel #3 (Viral Reel)
  {
    id: "nitish-reel",
    category: "Short-Form Video & Reels (9:16)",
    title: "Nitish Kumar - Personal Brand & Viral Reel",
    src: `${BASE_PATH}/waku.jpg`,
    videoSrc: "/assets/VIDEO EDITING/Nitish Reel_3.mp4",
    screenshots: ["waku.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.aitools,
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.branding,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Creator Viral Reel (9:16)
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Nitish Kumar Personal Branding &amp; Retention Reel
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A high-retention vertical reel engineered for creator Nitish. Crafted specifically for Instagram Reels and YouTube Shorts algorithms to hook viewers within 1.5 seconds and maximize completion rate.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Nitish Reel #3",
                subtitle: "Personal Branding & Retention Hook",
                src: "/assets/VIDEO EDITING/Nitish Reel_3.mp4",
                aspectRatio: "9/16",
                tag: "Reel 9:16",
                duration: "0:25",
                description:
                  "High-retention personal branding reel edited for influencer Nitish. Engineered to keep viewers watching past the 3-second drop-off mark with animated bold subtitles, dynamic zooms, and sound design.",
                techniques: [
                  "Dynamic pop-up typography with animated emphasis words",
                  "Punch-in focal changes every 2 to 3 seconds for visual pacing",
                  "Audio sweetening with crisp vocal equalization and background music ducking",
                  "Seamless loop transition back to opening hook",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "AI Auto-Captions", "Audition"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Retention Engineering
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Modern social video algorithms prioritize Average Percentage Viewed (APV) and Completion Rate. Every cut, audio cue, and graphic pop-up in this reel is intentionally placed to re-engage the viewer before cognitive fatigue sets in.
          </p>
        </div>
      );
    },
  },

  // 5. Suraj Bhai Reel #2 (High-Energy Lifestyle)
  {
    id: "suraj-reel",
    category: "Creator Reels & Lifestyle (9:16)",
    title: "Suraj Bhai - High-Energy Lifestyle Reel",
    src: `${BASE_PATH}/portfolio.jpg`,
    videoSrc: "/assets/VIDEO EDITING/SURAJ BHAI REEL 2.mp4",
    screenshots: ["portfolio.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.branding,
        PROJECT_SKILLS.aitools,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> High-Energy Lifestyle Reel (9:16)
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Suraj Bhai Lifestyle &amp; Persona Reel
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A fast-paced vertical lifestyle reel synchronized to upbeat music, featuring rapid whip transitions, kinetic motion typography, and vibrant color grading tailored for maximum social engagement.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Suraj Reel #2",
                subtitle: "High-Energy Lifestyle & Persona",
                src: "/assets/VIDEO EDITING/SURAJ BHAI REEL 2.mp4",
                aspectRatio: "9/16",
                tag: "Reel 9:16",
                duration: "0:35",
                description:
                  "High-energy vertical lifestyle reel featuring dynamic cuts, sound sync, visual effects, and punchy typography tailored for algorithmic social media distribution.",
                techniques: [
                  "Beat-synced jump cuts and whip transitions",
                  "Vibrant color grading enhancing skin tones and clothing contrast",
                  "Motion-tracked text overlays and sound effect accents",
                  "Mobile-first vertical framing with safe margin alignment",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Motion"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Visual Pacing &amp; Beat Matching
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Lifestyle content lives and dies by rhythm. Every cut in this video lands squarely on musical transients, pairing visual motion blur with punchy audio cues to give the sequence an infectious cadence.
          </p>
        </div>
      );
    },
  },

  // 6. Shreeji Agarbatti Commercial (FMCG)
  {
    id: "shreeji-agarbatti",
    category: "FMCG Product Commercial (9:16)",
    title: "Shreeji Agarbatti - FMCG Sensory Commercial",
    src: `${BASE_PATH}/gumbalup.jpg`,
    videoSrc: "/assets/VIDEO EDITING/Shreeji Agarbatti Reel 1 date.mp4",
    screenshots: ["gumbalup.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.branding,
      ],
      backend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.illustrator,
        PROJECT_SKILLS.aitools,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> FMCG Commercial Ad (9:16)
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Shreeji Agarbatti Sensory Fragrance Product Ad
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            Commercial product film produced for Shreeji Agarbatti incense brand. Focuses on sensory imagery: slow-motion fragrance smoke plumes, warm divine color grading, spiritual audio mixing, and prominent retail packaging spotlight.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Shreeji Agarbatti Commercial",
                subtitle: "FMCG Sensory Product Reel",
                src: "/assets/VIDEO EDITING/Shreeji Agarbatti Reel 1 date.mp4",
                aspectRatio: "9/16",
                tag: "FMCG 9:16",
                duration: "0:30",
                description:
                  "Commercial product reel produced for Shreeji Agarbatti. Focuses on sensory storytelling: slow-motion fragrance smoke swirls, warm divine color grading, spiritual music pacing, and prominent packaging presentation.",
                techniques: [
                  "Atmospheric color grading with warm gold, saffron, and amber hues",
                  "Slow-motion speed ramping on rising smoke plumes and rituals",
                  "Sacred ambient sound design with bells and resonant chimes",
                  "Clear FMCG brand identification and packaging close-ups",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Photoshop"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Sensory Storytelling
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Advertising an aroma product visually requires evoking the sense of smell through color and motion. Slowed smoke dynamics paired with warm golden illumination trigger sensory associations that give the commercial a spiritual resonance.
          </p>
        </div>
      );
    },
  },

  // 7. Corporate Brand Campaign
  {
    id: "corporate-brand",
    category: "Corporate Commercial Film",
    title: "Corporate Brand Vision & Promotional Film",
    src: `${BASE_PATH}/storekit.jpg`,
    videoSrc: "/assets/VIDEO EDITING/Copy of project 4.mp4",
    screenshots: ["storekit.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.branding,
      ],
      backend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.aitools,
        PROJECT_SKILLS.msoffice,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Corporate Brand Campaign (16:9)
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Corporate Brand Vision &amp; Promotional Film
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A high-level corporate brand campaign video combining executive narrative framing, clean lower thirds, and cinematic storytelling to communicate company vision, culture, and business capabilities.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Corporate Brand Campaign",
                subtitle: "Promotional Brand Film",
                src: "/assets/VIDEO EDITING/Copy of project 4.mp4",
                aspectRatio: "16/9",
                tag: "Brand 16:9",
                duration: "0:40",
                description:
                  "High-level brand campaign film combining corporate storytelling, polished pacing, and clean typography to communicate company vision and service excellence.",
                techniques: [
                  "Narrative editing pacing suited for corporate B2B audiences",
                  "Clean lower thirds and brand guideline compliance",
                  "Balanced audio leveling between voiceover and score",
                  "Cinematic aspect ratio framing with elegant letterboxing",
                ],
                tools: ["Adobe Premiere Pro", "After Effects", "Brand Identity", "Audition"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Corporate Brand Storytelling
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Corporate films demand executive authority and brand clarity. By combining measured interview pacing, high-contrast grading, and uncluttered kinetic typography, the edit inspires trust and credibility with clients and stakeholders.
          </p>
        </div>
      );
    },
  },

  // 8. Event Promo & Brand Teaser Reel
  {
    id: "promo-teaser",
    category: "Event Teaser & Social Cut (9:16)",
    title: "Dynamic Event Promo & Brand Teaser Reel",
    src: `${BASE_PATH}/kanbi.jpg`,
    videoSrc: "/assets/VIDEO EDITING/VID-20260517-WA0001.mp4",
    screenshots: ["kanbi.jpg"],
    hasVideo: true,
    skills: {
      frontend: [
        PROJECT_SKILLS.premiere,
        PROJECT_SKILLS.aftereffects,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.aitools,
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.branding,
      ],
    },
    live: "#contact",
    get content() {
      return (
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
            <Film className="w-4 h-4" /> Promotional Teaser Cut (9:16)
          </div>
          <TypographyP className="font-mono text-2xl font-bold">
            Dynamic Event Promo &amp; Brand Teaser Reel
          </TypographyP>
          <TypographyP className="font-mono text-muted-foreground">
            A fast-paced promotional teaser cut crafted for instant social media buzz and event announcements. Features rapid-fire montage cuts, rhythmic audio beats, and high-impact visual hooks.
          </TypographyP>

          <VideoPlayer
            videos={[
              {
                title: "Social Promo Reel",
                subtitle: "Event & Brand Teaser Cut",
                src: "/assets/VIDEO EDITING/VID-20260517-WA0001.mp4",
                aspectRatio: "9/16",
                tag: "Promo 9:16",
                duration: "0:20",
                description:
                  "Snappy vertical teaser reel edited for rapid social sharing. Features quick cutaways and energetic pacing designed for mobile feeds.",
                techniques: [
                  "Fast-paced visual montage cutting for maximum energy",
                  "Optimized audio compression for mobile speaker playback",
                  "High-contrast color styling for smartphone displays",
                  "Quick-hit CTA end screen card",
                ],
                tools: ["Adobe Premiere Pro", "Color Grading", "Mobile Optimization"],
              },
            ]}
          />

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Teaser Dynamics
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground leading-relaxed">
            Teaser videos must create intrigue in seconds. The editing builds continuous momentum through accelerating cut intervals, climaxing in a crisp branded resolution.
          </p>
        </div>
      );
    },
  },
];

export default projects;
