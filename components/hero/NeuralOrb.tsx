"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// Added OrbitControls to the import list below
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { Brain } from "lucide-react";
import * as THREE from "three";

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate 412 custom nodes arranged in a sphere shell
  const positions = useMemo(() => {
    const arr = new Float32Array(412 * 3);

    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < 412; i++) {
      const u = random();
      const v = random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5; // radius

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    // Keep subtle auto-rotation, but users can override it by dragging
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function NeuralOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Detect if the component is visible on the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-threejs-scene="hero-neural-core"
      className="relative mx-auto mt-14 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.16_290/0.15),transparent_60%)]" />

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 60 }}
          frameloop={isInView ? "always" : "never"}
        >
          <ambientLight intensity={0.5} />
          <ParticleSphere />

          {/* OrbitControls enables:
            - Left Click + Drag: Rotates the view
            - Right Click + Drag: Pans (moves) the view left/right/up/down
            - Scroll: Zooms in/out
            enableDamping adds smooth physics to the movement
          */}
          <OrbitControls
            enableDamping={true}
            dampingFactor={0.05}
            enableZoom={true}
          />
        </Canvas>
      </div>

      {/* Centered Holographic Core */}
      <div className="absolute inset-0 z-10 grid place-items-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 -m-10 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
          <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-purple-600 via-indigo-500 to-cyan-400 shadow-[0_0_50px_5px_rgba(168,85,247,0.4)]">
            <Brain className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Information Overlays */}
      <div className="absolute left-6 top-6 text-xs uppercase tracking-widest text-muted-foreground font-mono">
        Raw Data
      </div>
      <div className="absolute right-6 top-6 text-xs uppercase tracking-widest text-purple-400 font-mono">
        Structured Intelligence
      </div>
      <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-muted-foreground font-mono">
        Nodes: 412
      </div>
      <div className="absolute bottom-6 right-6 text-xs uppercase tracking-widest text-emerald-400 font-mono animate-pulse">
        Sync 99.8%
      </div>
    </div>
  );
}
