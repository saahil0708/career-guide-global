"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

const Earth = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 16000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let globe = null;
    let phi = 0;
    let currentWidth = 0;

    const onResize = () => {
      if (canvasRef.current) {
        currentWidth = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const timeout = setTimeout(() => {
      if (!canvasRef.current) return;
      // Default to 500 if offsetWidth is 0 initially
      const width = currentWidth > 0 ? currentWidth : 500;

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: theta,
        dark: dark,
        scale: scale,
        diffuse: diffuse,
        mapSamples: mapSamples,
        mapBrightness: mapBrightness,
        baseColor: baseColor,
        markerColor: markerColor,
        glowColor: glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
          // Ensure width and height are updated dynamically
          if (canvasRef.current && canvasRef.current.offsetWidth > 0) {
            state.width = canvasRef.current.offsetWidth * 2;
            state.height = canvasRef.current.offsetWidth * 2;
          }
        },
      });
    }, 100);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
      if (globe) globe.destroy();
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    JSON.stringify(baseColor),
    JSON.stringify(markerColor),
    JSON.stringify(glowColor)
  ]);

  return (
    <div
      className={cn(
        "z-[10] mx-auto flex w-full max-w-[350px] items-center justify-center aspect-square",
        className,
      )}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
};

export default Earth;