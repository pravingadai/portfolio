import * as THREE from 'three';

declare global {
  namespace THREE {
    interface Points {
      geometry: THREE.BufferGeometry;
      material: THREE.Material;
      rotation: THREE.Euler;
      position: THREE.Vector3;
    }
  }
}