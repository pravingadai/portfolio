import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useStore } from "@/lib/store";

function Particles({ count = 2000 }) {
  const { theme } = useStore();
  const points = useRef<THREE.Points>(null!);
  
  // Generate random sphere points
  const positions = random.inSphere(new Float32Array(count * 3), { radius: 1.5 });
  
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.01;
      points.current.rotation.y += delta * 0.015;
    }
  });
  
  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === "dark" ? "#6C63FF" : "#6C63FF"}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={2}
      />
    </Points>
  );
}

export default function ParticleField() {
  const { isLoading } = useStore();
  
  // Make sure the particles render only after loading is complete
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
