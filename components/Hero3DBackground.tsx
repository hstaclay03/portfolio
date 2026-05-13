"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.1} />
        
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={5}
          saturation={1}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
