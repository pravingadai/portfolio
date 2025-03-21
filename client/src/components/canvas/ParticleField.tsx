import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// No need to change the import, just make sure the type declaration file exists
import * as random from "maath/random/dist/maath-random.esm";
import { useStore } from "@/lib/store";
import * as THREE from "three";

function Particles({ count = 2000 }: { count?: number }) {
  const { theme } = useStore();
  const points = useRef<THREE.Points>(null!);
  
  const positions = random.inSphere(new Float32Array(count * 3), 1.5);
  
  useFrame((_state: unknown, delta: number) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.01;
      points.current.rotation.y += delta * 0.015;
    }
  });
  
  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6C63FF"
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
  
  return isLoading ? null : (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}