// client/src/types/react-three-fiber.d.ts
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';
import { ReactNode } from 'react';

declare module '@react-three/fiber' {
  export interface RootState {
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    size: { width: number; height: number };
    viewport: { width: number; height: number; factor: number };
    clock: THREE.Clock;
    mouse: THREE.Vector2;
    raycaster: THREE.Raycaster;
    performance: { current: number; min: number; max: number; debounce: number };
    frameloop: 'always' | 'demand' | 'never';
    invalidate: () => void;
    advance: (timestamp: number, runGlobalEffects?: boolean) => void;
    setSize: (width: number, height: number) => void;
    setDpr: (dpr: number) => void;
    setFrameloop: (frameloop: 'always' | 'demand' | 'never') => void;
    events: { connected: boolean };
  }

  export type FrameCallback<T = any> = (state: RootState, delta: number, frame?: T) => void;

  export interface CanvasProps {
    children: ReactNode;
    camera?: Partial<THREE.PerspectiveCamera> | 
             Partial<THREE.OrthographicCamera> | 
             { position: THREE.Vector3 | [number, number, number] };
    gl?: Partial<THREE.WebGLRenderer>;
    shadows?: boolean | Partial<THREE.ShadowMapType>;
    raycaster?: Partial<THREE.Raycaster>;
    frameloop?: 'always' | 'demand' | 'never';
    resize?: { scroll: boolean; debounce: number };
    orthographic?: boolean;
    dpr?: number | [min: number, max: number];
    linear?: boolean;
    flat?: boolean;
    legacy?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onCreated?: (state: RootState) => void;
    onPointerMissed?: (event: MouseEvent) => void;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
  export function useFrame(callback: FrameCallback, renderPriority?: number): void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ThreeElements['ambientLight'];
      points: ThreeElements['points'];
    }
  }
}