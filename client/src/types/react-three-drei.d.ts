declare module '@react-three/drei' {
  import * as THREE from 'three';
  import { ReactNode } from 'react';

  export interface PointsProps {
    positions?: Float32Array;
    stride?: number;
    frustumCulled?: boolean;
    children?: ReactNode;
    ref?: React.RefObject<THREE.Points>;
  }

  export interface PointMaterialProps {
    transparent?: boolean;
    color?: string | number;
    size?: number;
    sizeAttenuation?: boolean;
    depthWrite?: boolean;
    blending?: THREE.Blending;
  }

  export function Points(props: PointsProps): JSX.Element;
  export function PointMaterial(props: PointMaterialProps): JSX.Element;
}