import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Dynamically load Canvas for SSR
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
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
    if (groupRef.current) groupRef.current.rotation.y += 0.001;
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
  // Big stats data
  const stats = [
    { value: '10+', label: 'Projects' },
    // { value: '5M+', label: 'Records Processed' },
    // { value: '10', label: 'ML Models in Production' },
    // { value: '95%+', label: 'Average Model Accuracy' },
    // { value: '4', label: 'Data Pipelines Deployed' },
    { value: '50K+', label: 'Compute Hours' },
    { value: '3', label: 'Publications & Reports' },
    { value: '4', label: 'Certifications' }
  ];

  return (
    <section
      id="hero"
      className="scroll-mt-20 pt-20 min-h-screen flex flex-col justify-center items-center px-20 bg-background"
    >
    
      {/* Intro & Graph Row */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left side: intro text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-primary text-2xl">Hi, my name is</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Kumareshan Subramaniyan</h1>
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            Data Scientist &amp; Machine Learning Engineer
          </h2>
          <p className="max-w-xl text-lg mb-8">
            I specialize in building data-driven solutions and scalable machine learning pipelines. With experience in Python,
            TensorFlow, and cloud deployments, I turn raw data into actionable insights and predictive models that drive
            real-world impact.
          </p>
          <div className="space-x-4">
          <a
    href="#projects"
    className="hidden md:inline-block border border-primary px-6 py-3 rounded hover:bg-primary/10 transition text-base sm:text-lg"
  >
    Check out my work
  </a>
  <a
    href="/KumareshanS_Resume.pdf"
    download
    className="inline-block bg-primary text-background px-6 py-3 rounded hover:bg-primary/90 transition text-base sm:text-lg"
  >
    Download Resume
  </a>

          </div>
        </div>

        {/* Right side: 3D network graph (hidden on mobile) */}
        <div className="hidden md:block md:w-1/2 h-96">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <NetworkGraph />
          </Canvas>
        </div>
      </div>

      {/* Stats Badges Row */}
      <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface/20 p-6 rounded-lg flex flex-col items-center"
          >
            <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-accent text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}