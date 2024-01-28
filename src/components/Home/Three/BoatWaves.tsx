import * as THREE from "three";
import { useMemo, useCallback, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";
// import { wavepoint } from "../../../assets";
import "../../../index.css";

let t = 0; // time // controls the speed of the animation
const f = 0.02; // frequency // HIGHER = higher frequency / faster bobbing, LOWER = loewr frequency / slower bobbing
const rippleFactor = 0.07; // wave travel distance // HIGHER = less travel, LOWER = more travel
// eslint-disable-next-line prefer-const
let a = 3; // variable amplitude // isolated amplitude control
const count = 25;

// const vertexShader = `
//   precision mediump float; // Set precision to mediump

//   attribute float scale;
  
//   void main() {
//     vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    
//     gl_PointSize = scale * (300.0 / -mvPosition.z);
//     gl_Position = projectionMatrix * mvPosition;
//   }
// `;

const vertexShader = `
  precision mediump float; // Set precision to mediump

  attribute float scale;

  void main() {
    gl_PointSize = min(scale, 2.0); 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float; // Set precision to mediump

  uniform vec3 color;
  
  void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function Points() {
    // const imgTex = useLoader(THREE.TextureLoader, wavepoint);
    const positionBufferRef = useRef<THREE.BufferAttribute | null>();
    const scaleBufferRef = useRef<THREE.BufferAttribute | null>();

    const graph = useCallback(
        (x: number) => {
            return Math.sin(f * (x - t)) * a;
        },
        [t, f, a]
    );
    const sep = 5;

    //loop
    let positions = useMemo(() => {
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

    let scal = useMemo(() => {
        let scal: number[] = [];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                scal.push(1);
            }
        }

        return new Float32Array(scal);
    }, [count, sep, graph]);

    useFrame(() => {
        t += 1;

        const positions = positionBufferRef.current?.array;
        const scal = scaleBufferRef.current?.array;
        // console.log(positions == null)
        if (positions && scal) {
            let i = 0;
            let s = 0;
            for (let xi = 0; xi < count; xi++) {
                for (let zi = 0; zi < count; zi++) {
                    let x = sep * (xi - count / 2);

                    positions[i + 1] = graph(x);
                    scal[s] = (4 * positions[i + 1] + 1) / 2;

                    i += 3;
                    s++;
                }
            }
        }
        if (positionBufferRef && positionBufferRef.current) {
            positionBufferRef.current.needsUpdate = true;
        }
        if (scaleBufferRef && scaleBufferRef.current) {
            scaleBufferRef.current.needsUpdate = true;
        }

        // if (distance.offset > 0.3) {
        //     console.log("switch");
        // }
        //Camera control
        //state.camera.position.set(120, 10 - scroll.offset * 20, 10)
        // console.log(10-scroll.offset);
    });

    return (
        <group>
            {/* Stars */}
            {/* <Stars
                radius={100}
                depth={102}
                count={500}
                factor={4}
                saturation={0}
                fade
                speed={2}
            /> */}

            {/* wavePoints */}
            <points>
                <bufferGeometry attach={"geometry"}>
                    <bufferAttribute
                        ref={
                            positionBufferRef as React.MutableRefObject<THREE.BufferAttribute>
                        }
                        attach={"attributes-position"}
                        array={positions}
                        count={positions.length / 3}
                        itemSize={3}
                    />
                    <bufferAttribute
                        ref={
                            scaleBufferRef as React.MutableRefObject<THREE.BufferAttribute>
                        }
                        attach={"attributes-scale"}
                        array={scal}
                        count={scal.length}
                        itemSize={1}
                    />
                </bufferGeometry>
                <shaderMaterial
                    attach="material"
                    uniforms={{
                        color: { value: new THREE.Color(0xffffff) },
                        // map: { value: imgTex },
                    }}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />
                {/* <pointsMaterial attach="material" /> */}
            </points>
        </group>
    );
}

// function Boat({ path }: { path: string }) {
//     const [boatHeight, setBoatHeight] = useState(0);
//     const gltf = useLoader(GLTFLoader, path);

//     const graph = useCallback(
//         (x: number, z: number) => {
//             const circle = x ** 2 + z ** 2;
//             return (
//                 Math.sin(f * (circle - t)) *
//                 1.5 *
//                 rippleFactor *
//                 ((1 / rippleFactor) * Math.E ** (-circle * f * rippleFactor))
//             );
//         },
//         [t, f, a]
//     );

//     useFrame(() => {
//         setBoatHeight(graph(0, 0) - (1 + a / 2));
//         //6.28
//         //3.54318885548 <- integralConst
//     });
//     return (
//         <group position={[0, boatHeight, 0]} rotation={[0, 0, 0]}>
//             <primitive object={gltf.scene} />
//         </group>
//     );
// }

// function City({ path }: { path: string }) {
//     const gltf = useLoader(GLTFLoader, path);

//     return (
//         <group position={[0, 10, 0]} rotation={[0, 0, 0]}>
//             <primitive object={gltf.scene} />
//         </group>
//     );
// }

function City({ path }: { path: string }) {
    const [boatHeight, setBoatHeight] = useState(0);
    const gltf = useLoader(GLTFLoader, path);

    const graph = useCallback(
        (x: number, z: number) => {
            const circle = x ** 2 + z ** 2;
            return (
                Math.sin(f * (circle - t)) *
                0.8 *
                rippleFactor *
                ((1 / rippleFactor) * Math.E ** (-circle * f * rippleFactor))
            );
        },
        [t, f, a]
    );

    useFrame(() => {
        setBoatHeight(graph(0, 0) - (1 + a / 2));
        //6.28
        //3.54318885548 <- integralConst
    });
    return (
        <group position={[0, boatHeight + 15, 0]} rotation={[0, 0, 0]}>
            <primitive object={gltf.scene} />
        </group>
    );
}

export default { Points, City };
