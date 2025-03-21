declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(buffer: Float32Array, radius: number): Float32Array;
  export function onSphere(buffer: Float32Array, radius: number): Float32Array;
  export function inBox(buffer: Float32Array, size: number | [number, number, number]): Float32Array;
  export function onBox(buffer: Float32Array, size: number | [number, number, number]): Float32Array;
  export function inCircle(buffer: Float32Array, radius: number): Float32Array;
  export function onCircle(buffer: Float32Array, radius: number): Float32Array;
  export function inRect(buffer: Float32Array, width: number, height: number): Float32Array;
  export function onRect(buffer: Float32Array, width: number, height: number): Float32Array;
  export function inTorus(buffer: Float32Array, radius: number, tubularRadius: number): Float32Array;
  export function onTorus(buffer: Float32Array, radius: number, tubularRadius: number): Float32Array;
}