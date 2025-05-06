// components/Hero.tsx
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Text3D from '@react-three/drei/core/Text3D';
import OrbitControls from '@react-three/drei/core/OrbitControls';

import * as THREE from 'three';

// Dynamically load Canvas to prevent SSR issues
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

function RotatingName() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/helvetiker_bold.typeface.json"
      size={2}
      height={0.4}
      bevelEnabled={true}
      bevelThickness={0.02}
      bevelSize={0.05}
      curveSegments={12}
    >
      Kumareshan
      <meshStandardMaterial color="#64ffda" />
    </Text3D>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center px-20 bg-background">
      {/* Left Column: Text */}
      <div className="md:w-1/2 space-y-6 z-10">
        <p className="text-accent mb-2">Hi, my name is</p>
        <h1 className="invisible">Kumareshan</h1>
        <h2 className="text-3xl md:text-5xl text-white mb-4">
          Data Scientist &amp; Machine Learning Engineer
        </h2>
        <p className="max-w-xl text-lg">
          I specialize in building data-driven solutions and scalable machine learning pipelines. With experience in Python,
          TensorFlow, and cloud deployments, I turn raw data into actionable insights and predictive models that drive
          real-world impact.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block border border-primary px-6 py-3 rounded hover:bg-primary/10 transition"
        >
          Check out my work
        </a>
      </div>
      {/* Right Column: 3D Canvas */}
      <div className="md:w-1/2 h-96">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <RotatingName />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}