"use client";

import { useMemo, useRef, useState, useEffect, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

// 1. Sub-component to render the node and line network in 3D space
function ThreeClusterNetwork({
  nodes,
  lines,
  isInteracting,
}: {
  nodes: any[];
  lines: any[];
  isInteracting: RefObject<boolean | null>; // Using the correct React type definition
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Apply a subtle auto-rotation when the user is not interacting
  useFrame((state) => {
    if (!groupRef.current) return;
    if (!isInteracting.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1.1 Render connecting network lines (edges) */}
      {lines.map((line, idx) => (
        <Line
          key={idx}
          points={[line.start, line.end]}
          color="#8B5CF6"
          lineWidth={1.2}
          opacity={0.35}
          transparent
        />
      ))}

      {/* 1.2 Render cluster nodes as 3D Spheres */}
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshBasicMaterial color={node.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function ClusterViz() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isInteracting = useRef<boolean>(false);

  // Performance optimization: Render only when the element is visible in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.01 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Memoized logic to map node positions and create 3D matrix connections
  const { processedNodes, processedLines } = useMemo(() => {
    // Convert the previous 2D mathematical formula into 3D coordinates
    const rawNodes = Array.from({ length: 40 }).map((_, i) => {
      const angle = (i / 40) * Math.PI * 2;
      const radius = 2.0 + ((i * 7) % 20) / 20; // Downscale to fit the 3D grid viewport boundaries

      // Calculate X, Y, and Z positions to introduce depth instead of a flat circular plane
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.sin(i * 0.5) * 0.4;

      return {
        position: new THREE.Vector3(x, y, z),
        size: 0.035 + ((i * 3) % 10) / 250,
        color: i % 3 === 0 ? "#38BDF8" : "#C084FC",
      };
    });

    // Generate up to 112 network edges between adjacent nodes
    const rawLines: any[] = [];
    rawNodes.forEach((node, i) => {
      rawNodes.slice(i + 1, i + 4).forEach((next) => {
        rawLines.push({
          start: node.position,
          end: next.position,
        });
      });
    });

    return { processedNodes: rawNodes, processedLines: rawLines };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center overflow-visible z-30 select-none"
    >
      {/* 3. Three.js Canvas Layer */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          frameloop={isInView ? "always" : "never"}
        >
          <ambientLight intensity={0.8} />

          <ThreeClusterNetwork
            nodes={processedNodes}
            lines={processedLines}
            isInteracting={isInteracting}
          />

          {/* Mouse drag configuration supporting left/right click rotation and physics damping */}
          <OrbitControls
            enableDamping={true}
            dampingFactor={0.05}
            enableZoom={true}
            onStart={() => {
              isInteracting.current = true;
            }}
            onEnd={() => {
              // Pause auto-rotation temporarily, resuming 1.5s after the user releases click
              setTimeout(() => {
                isInteracting.current = false;
              }, 1500);
            }}
          />
        </Canvas>
      </div>

      {/* Background glow matrix layer */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none -z-10">
        <div className="h-40 w-40 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Screen interface telemetry overlay */}
      <div className="eyebrow absolute left-6 top-6 pointer-events-none opacity-60 text-[10px] tracking-wider uppercase font-mono">
        cluster.render / v2.4
      </div>

      <div className="eyebrow absolute bottom-6 right-6 text-primary/80 pointer-events-none opacity-60 text-[10px] tracking-wider uppercase font-mono">
        40 nodes · 112 edges
      </div>
    </div>
  );
}
