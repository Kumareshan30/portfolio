// components/Hero.tsx
import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Dynamically import Canvas and OrbitControls to prevent SSR issues
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);
const OrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

// 3D rotating network graph component
function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null!);
  const [nodes, setNodes] = React.useState<THREE.Vector3[]>([]);
  const [edges, setEdges] = React.useState<[number, number][]>([]);

  useEffect(() => {
    const N = 50;
    const newNodes: THREE.Vector3[] = [];
    const newEdges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      newNodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        )
      );
    }
    for (let i = 0; i < N; i++) {
      newEdges.push([i, Math.floor(Math.random() * N)]);
    }
    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#64ffda" />
        </mesh>
      ))}
      {edges.map(([a, b], idx) => (
        <line key={idx}>
          <bufferGeometry
            attach="geometry"
            {...new THREE.BufferGeometry().setFromPoints([nodes[a], nodes[b]])}
          />
          <lineBasicMaterial attach="material" color="#8892b0" linewidth={1} />
        </line>
      ))}
    </group>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-20 bg-background"
    >
      {/* Left side: intro text */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-primary mb-2">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
          Kumareshan
        </h1>
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          Data Scientist &amp; Machine Learning Engineer
        </h2>
        <p className="max-w-xl text-lg mb-8">
          I specialize in building data-driven solutions and scalable machine learning pipelines. With experience in Python,
          TensorFlow, and cloud deployments, I turn raw data into actionable insights and predictive models that drive
          real-world impact.
        </p>
        <a
          href="#projects"
          className="inline-block border border-primary px-6 py-3 rounded hover:bg-primary/10 transition"
        >
          Check out my work
        </a>
      </div>

      {/* Right side: 3D network graph */}
      <div className="md:w-1/2 h-96">
        <Canvas camera={{ position: [1, 1,8], fov: 70 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[30, 50, 50]} intensity={50} />
          <NetworkGraph />
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
      </div>
    </section>
  );
}
