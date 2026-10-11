"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, MapPin, Check, Copy } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(config.email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = config.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      toast({
        title: "Email Copied!",
        description: `${config.email} copied to clipboard.`,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      toast({
        title: "Email Copied!",
        description: `${config.email} copied to clipboard.`,
      });
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="w-full max-w-4xl mx-auto z-[9999] px-2 sm:px-4">
        <Card className="w-full bg-card/85 dark:bg-card/75 border border-border shadow-xl backdrop-blur-md rounded-xl mt-6 sm:mt-10 md:mt-16 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Form</CardTitle>
            <CardDescription className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Click to copy email address"
                  title="Click to copy email address"
                  className="inline-flex max-w-full flex-wrap items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/20 transition-all font-medium text-xs shadow-sm hover:scale-105 active:scale-95 cursor-pointer break-all sm:break-normal"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-emerald-500 font-semibold">{config.email}</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-1.5 py-0.5 rounded-full font-mono ml-1">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>{config.email}</span>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground ml-1 opacity-70 group-hover:opacity-100" />
                    </>
                  )}
                </button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/917678532861"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                  className="inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-foreground border border-emerald-500/30 transition-all font-medium text-xs shadow-sm hover:scale-105 active:scale-95 break-all sm:break-normal"
                >
                  <SiWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp: +91 76785 32861</span>
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span>Based in Loni, Ghaziabad – 201102, UP, India</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
