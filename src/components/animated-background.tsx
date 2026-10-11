"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { usePreloader } from "./preloader";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { setSceneStatus, useSceneStatus } from "@/lib/scene-health";

const KeyboardScene = dynamic(() => import("./keyboard/keyboard-scene"), { ssr: false });

class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    setSceneStatus("failed");
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function SceneSession({ maxDpr }: { maxDpr: number }) {
  const status = useSceneStatus();
  const { bypassLoading } = usePreloader();

  useEffect(() => {
    let context: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
      const canvas = document.createElement("canvas");
      context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    } catch {
      // Browser policy or driver failures can throw instead of returning null.
    }
    if (!context) {
      setSceneStatus("failed");
      return;
    }
    context.getExtension("WEBGL_lose_context")?.loseContext();
    setSceneStatus("loading");
  }, []);

  useEffect(() => {
    if (status === "failed") bypassLoading();
  }, [status, bypassLoading]);

  // A ready scene must not be failed by its loading deadline. Shortened from 20s to 3s for fast loads.
  useEffect(() => {
    if (status !== "loading") return;
    const timeout = window.setTimeout(() => {
      setSceneStatus("failed");
      bypassLoading();
    }, 3_000);
    return () => window.clearTimeout(timeout);
  }, [status, bypassLoading]);

  if (status === "idle" || status === "failed") return null;
  return (
    <SceneErrorBoundary>
      <KeyboardScene maxDpr={maxDpr} />
    </SceneErrorBoundary>
  );
}

const AnimatedBackground = () => {
  const { disable3D, maxDpr, ready } = usePerfProfile();
  if (!ready || disable3D) return null;
  return <SceneSession maxDpr={maxDpr} />;
};

export default AnimatedBackground;
