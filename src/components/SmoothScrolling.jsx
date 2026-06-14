"use client";

import React from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
