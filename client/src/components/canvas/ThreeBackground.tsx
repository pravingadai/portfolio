import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useStore } from "@/lib/store";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useStore();

  // Scene setup
  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(() => {
    const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cam.position.z = 3;
    return cam;
  }, []);

  const renderer = useMemo(() => new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true 
  }), []);

  // Particles setup
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    return geometry;
  }, []);

  const particlesMaterial = useMemo(() => new THREE.PointsMaterial({
    size: 0.01,
    transparent: true,
    blending: THREE.AdditiveBlending,
    color: 0x6C63FF
  }), []);

  const particlesMesh = useMemo(
    () => new THREE.Points(particlesGeometry, particlesMaterial),
    [particlesGeometry, particlesMaterial]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    scene.add(particlesMesh);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const animate = () => {
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0002;
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      container.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [camera, renderer, particlesMesh, scene, particlesGeometry, particlesMaterial]);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}