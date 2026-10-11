"use client";

import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const ResponsiveDialog = Dialog;
const ResponsiveDialogTrigger = DialogTrigger;
const ResponsiveDialogClose = DialogClose;
const ResponsiveDialogHeader = DialogHeader;
const ResponsiveDialogFooter = DialogFooter;
const ResponsiveDialogTitle = DialogTitle;
const ResponsiveDialogDescription = DialogDescription;

function ResponsiveDialogContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      className={cn(
        "w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] max-w-4xl",
        "h-[92vh] max-h-[92dvh] flex flex-col p-0 gap-0 overflow-hidden",
        "rounded-2xl border border-border/80 bg-background shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </DialogContent>
  );
}

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogFooter,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
  ResponsiveDialogClose,
};
