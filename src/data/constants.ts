export enum SkillNames {
  PHOTOSHOP = "photoshop",
  ILLUSTRATOR = "illustrator",
  PREMIERE = "premiere",
  AFTEREFFECTS = "aftereffects",
  CORELDRAW = "coreldraw",
  FIGMA = "figma",
  STORYLINE = "storyline",
  AITOOLS = "aitools",
  MSOFFICE = "msoffice",
  MOTION = "motion",
  PRINT = "print",
  BRANDING = "branding",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PHOTOSHOP]: {
    id: 1,
    name: "photoshop",
    label: "Photoshop",
    shortDescription: "Photo manipulation, eye-catching thumbnails, retouching & composite art! 🎨✨",
    color: "#31A8FF",
    icon: "/assets/skills/photoshop.svg",
    keyboardIcon: "/assets/keyboard/logos/photoshop.svg",
    keyboardColor: "#001e36",
  },
  [SkillNames.ILLUSTRATOR]: {
    id: 2,
    name: "illustrator",
    label: "Illustrator",
    shortDescription: "Vector precision, brand logos, badges & scalable vector graphics! ✒️📐",
    color: "#FF9A00",
    icon: "/assets/skills/illustrator.svg",
    keyboardIcon: "/assets/keyboard/logos/illustrator.svg",
    keyboardColor: "#330000",
  },
  [SkillNames.PREMIERE]: {
    id: 3,
    name: "premiere",
    label: "Premiere Pro",
    shortDescription: "High-impact video editing, seamless cuts, pacing & commercial storytelling! 🎬✂️",
    color: "#EA77FF",
    icon: "/assets/skills/premierepro.svg",
    keyboardIcon: "/assets/keyboard/logos/premierepro.svg",
    keyboardColor: "#00005b",
  },
  [SkillNames.AFTEREFFECTS]: {
    id: 4,
    name: "aftereffects",
    label: "After Effects",
    shortDescription: "Dynamic visual effects, kinetic typography & high-impact motion graphics! ⚡🎥",
    color: "#9999FF",
    icon: "/assets/skills/aftereffects.svg",
    keyboardIcon: "/assets/keyboard/logos/aftereffects.svg",
    keyboardColor: "#00005b",
  },
  [SkillNames.MOTION]: {
    id: 5,
    name: "motion",
    label: "Motion Graphics",
    shortDescription: "Kinetic typography, animated logo reveals & high-retention video hooks! 💫🔥",
    color: "#E11D48",
    icon: "/assets/skills/motion.svg",
    keyboardIcon: "/assets/keyboard/logos/motion.svg",
    keyboardColor: "#9f1239",
  },
  [SkillNames.CORELDRAW]: {
    id: 6,
    name: "coreldraw",
    label: "CorelDRAW",
    shortDescription: "Flawless vector layouts, print collateral & prepress signage design! 🖨️🟢",
    color: "#2CB34A",
    icon: "/assets/skills/coreldraw.svg",
    keyboardIcon: "/assets/keyboard/logos/coreldraw.svg",
    keyboardColor: "#1d7831",
  },
  [SkillNames.FIGMA]: {
    id: 7,
    name: "figma",
    label: "Figma",
    shortDescription: "UI/UX wireframing, component design & interactive prototyping! 📱🎨",
    color: "#F24E1E",
    icon: "/assets/skills/figma.svg",
    keyboardIcon: "/assets/keyboard/logos/figma.svg",
    keyboardColor: "#2c2d30",
  },
  [SkillNames.AITOOLS]: {
    id: 8,
    name: "aitools",
    label: "AI Tools",
    shortDescription: "AI-assisted workflows for rapid concepting, editing & iteration! 🤖🚀",
    color: "#10A37F",
    icon: "/assets/skills/aitools.svg",
    keyboardIcon: "/assets/keyboard/logos/aitools.svg",
    keyboardColor: "#0b6650",
  },
  [SkillNames.BRANDING]: {
    id: 9,
    name: "branding",
    label: "Brand Identity",
    shortDescription: "Cohesive visual identity, typography systems & brand style guides! 💎🏷️",
    color: "#8B5CF6",
    icon: "/assets/skills/branding.svg",
    keyboardIcon: "/assets/keyboard/logos/branding.svg",
    keyboardColor: "#6d28d9",
  },
  [SkillNames.PRINT]: {
    id: 10,
    name: "print",
    label: "Print Collaterals",
    shortDescription: "Brochures, promotional flyers, posters & prepress standards! 📄📦",
    color: "#0284C7",
    icon: "/assets/skills/print.svg",
    keyboardIcon: "/assets/keyboard/logos/print.svg",
    keyboardColor: "#0369a1",
  },
  [SkillNames.STORYLINE]: {
    id: 11,
    name: "storyline",
    label: "Articulate Storyline",
    shortDescription: "Interactive e-learning modules, motion slides & digital media! 📚💡",
    color: "#FF6F00",
    icon: "/assets/skills/storyline.svg",
    keyboardIcon: "/assets/keyboard/logos/storyline.svg",
    keyboardColor: "#d95a00",
  },
  [SkillNames.MSOFFICE]: {
    id: 12,
    name: "msoffice",
    label: "MS Office",
    shortDescription: "PowerPoint decks, video storyboards, docs & asset trackers! 📊📑",
    color: "#D83B01",
    icon: "/assets/skills/msoffice.svg",
    keyboardIcon: "/assets/keyboard/logos/msoffice.svg",
    keyboardColor: "#a32c00",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2023",
    endDate: "2024",
    title: "Video Editor & Graphic Designer",
    company: "Shambhavi Art Enterprises · Ghaziabad, UP",
    description: [
      "Led end-to-end commercial video editing, promo reels, and digital visual campaigns for corporate and brand clients.",
      "Produced high-energy promotional cuts, social media reels, and presentation videos using Premiere Pro and After Effects.",
      "Integrated kinetic typography, audio mixing, color grading, and dynamic visual hooks that elevated viewer retention.",
      "Created supporting graphic design assets, brand identities, and digital marketing banners using Photoshop and Illustrator.",
    ],
    skills: [
      SkillNames.PREMIERE,
      SkillNames.AFTEREFFECTS,
      SkillNames.MOTION,
      SkillNames.AITOOLS,
      SkillNames.PHOTOSHOP,
      SkillNames.ILLUSTRATOR,
      SkillNames.BRANDING,
    ],
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "2023 (6 Months)",
    title: "Graphic Designer & Visual Media Specialist",
    company: "Akansha Enterprises · Ghaziabad, UP",
    description: [
      "Designed commercial marketing collaterals, print assets, flyers, and large-format signage using CorelDRAW and Illustrator.",
      "Supervised print output specifications, prepress CMYK profiles, and rigorous brand standards.",
      "Supported visual storytelling initiatives with composite graphics and layout mockups in Photoshop.",
    ],
    skills: [
      SkillNames.CORELDRAW,
      SkillNames.ILLUSTRATOR,
      SkillNames.PHOTOSHOP,
      SkillNames.PRINT,
      SkillNames.BRANDING,
    ],
  },
  {
    id: 3,
    startDate: "2022",
    endDate: "2022 (6 Months)",
    title: "Video & Design Intern",
    company: "Secret Box · India",
    description: [
      "Assisted senior editors with video assembly, footage tagging, audio sync, and graphic overlay preparation.",
      "Gained foundational mastery across Adobe Creative Suite in a fast-paced media studio environment.",
      "Supported asset creation, digital layout sizing, and creative presentation decks.",
    ],
    skills: [
      SkillNames.PREMIERE,
      SkillNames.PHOTOSHOP,
      SkillNames.ILLUSTRATOR,
      SkillNames.FIGMA,
      SkillNames.MSOFFICE,
    ],
  },
];

export type Education = {
  id: number;
  degree: string;
  institution: string;
  status: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Commerce (B.Com)",
    institution: "University / College",
    status: "Pursuing",
  },
  {
    id: 2,
    degree: "12th Standard",
    institution: "CBSE Board",
    status: "Completed",
  },
  {
    id: 3,
    degree: "10th Standard",
    institution: "CBSE Board",
    status: "Completed",
  },
];

export const PERSONAL_INFO = {
  name: "Vivek Shakya",
  dob: "23 September 2005",
  gender: "Male",
  fatherName: "Devender Kumar",
  address: "H. No. B-87, East Jawahar Nagar, Near Shiv Vihar Metro Station, Pillar No. 59, Loni, Ghaziabad – 201102",
  phone: "+91 76785 32861",
  email: "vivekshakya2395@gmail.com",
  languages: [
    { name: "Hindi", proficiency: "Native" },
    { name: "English", proficiency: "Proficient" },
  ],
  softSkills: ["Problem Solving", "Attention to Detail", "Team Collaboration"],
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
