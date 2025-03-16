import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/lib/store";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useStore();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: containerRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      transparent: true,
      color: 0x6C63FF,
      blending: THREE.AdditiveBlending,
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0002;
      
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Update renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  // Update particle color based on theme
  useEffect(() => {
    if (!containerRef.current) return;
    
    const canvas = containerRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = renderer.getScene?.();
    
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Points) {
          const material = child.material as THREE.PointsMaterial;
          material.color.set(theme === "dark" ? 0x6C63FF : 0x6C63FF);
          material.needsUpdate = true;
        }
      });
    }
  }, [theme]);
  
  return (
    <canvas
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
