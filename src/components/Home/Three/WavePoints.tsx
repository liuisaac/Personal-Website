import * as THREE from "three";
import { useMemo, useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";

let t = 0;
const f = 0.06;
const a = 1;
const count = 50;

export default function WavePoints() {
  const positionBufferRef = useRef<THREE.BufferAttribute | null>();
  const scaleBufferRef = useRef<THREE.BufferAttribute | null>();

  const graph = useCallback(
    (x: number) => {
      return Math.sin(f * (x - t)) * a;
    },
    [t, f, a]
  );

  const sep = 5;

  const positions = useMemo(() => {
    let positions: number[] = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  const scales = useMemo(() => {
    return new Float32Array(count * count).fill(1);
  }, [count]);

  useFrame(() => {
    t += 0.5;

    const positions = positionBufferRef.current?.array;
    const scales = scaleBufferRef.current?.array;

    if (positions && scales) {
      let i = 0;
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          let x = sep * (xi - count / 2);
          positions[i + 1] = graph(x);
          scales[i / 3] = (positions[i + 1] + 1) * 0.5 + 0.5; // Scale based on height
          i += 3;
        }
      }
    }

    if (positionBufferRef.current) positionBufferRef.current.needsUpdate = true;
    if (scaleBufferRef.current) scaleBufferRef.current.needsUpdate = true;
  });

  const vertexShader = `
    attribute float scale;
    varying float vScale;
    void main() {
      vScale = scale;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = scale * 2.0 * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vScale;
    void main() {
      if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
      gl_FragColor = vec4(vec3(vScale), 0.1);
    }
  `;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          ref={positionBufferRef as React.MutableRefObject<THREE.BufferAttribute>}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          ref={scaleBufferRef as React.MutableRefObject<THREE.BufferAttribute>}
          attach="attributes-scale"
          array={scales}
          count={scales.length}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </points>
  );
}