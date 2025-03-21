import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useStore } from "@/lib/store";
import * as THREE from "three";

function Particles({ count = 2000 }: { count?: number }) {
  const { theme } = useStore();
  const points = useRef<THREE.Points>(null!);
  
  // Generate random sphere points
  const positions = random.inSphere(new Float32Array(count * 3), 1.5);
  
  useFrame((state, delta: number) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.01;
      points.current.rotation.y += delta * 0.015;
    }
  });
  
  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6C63FF" // Simplified since both themes use same color
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticleField() {
  const { isLoading } = useStore();
  
  if (isLoading) return null;
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}