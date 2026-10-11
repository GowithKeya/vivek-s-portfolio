import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
  sticky = false,
}: {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
  sticky?: boolean;
}) => {
  return (
    <div className={cn(sticky ? "top-[70px] sticky mb-12" : "relative mb-12", "text-center", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto line-clamp-4 max-w-3xl font-medium text-sm md:text-base text-center text-muted-foreground mt-3">
          {desc}
        </p>
      )}
    </div>
  );
};
