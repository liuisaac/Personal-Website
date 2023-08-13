import * as THREE from "three";
import { useMemo, useCallback, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars, useScroll } from "@react-three/drei";
import { wavepoint } from "../../../assets";
import "../../../index.css";

let t = 0; // time // controls the speed of the animation
const f = 0.0035; // frequency // HIGHER = higher frequency / faster bobbing, LOWER = loewr frequency / slower bobbing
const rippleFactor = 0.03; // wave travel distance // HIGHER = less travel, LOWER = more travel
// eslint-disable-next-line prefer-const
let a = 1; // variable amplitude // isolated amplitude control
const count = 150;

function Points({ SScrollPosition} : { SScrollPosition: Function; }) {
    const imgTex = useLoader(THREE.TextureLoader, wavepoint);
    const bufferRef = useRef<THREE.BufferAttribute | null>();
    const [Previous, setPrevious] = useState(0);
    const distance = useScroll();


    const graph = useCallback(
        (x: number, z: number) => {
            const circle = x ** 2 + z ** 2;
            return (
                Math.sin(f * (circle - t)) *
                a *
                rippleFactor *
                ((1 / rippleFactor) * Math.E ** (-circle * f * rippleFactor))
            );
        },
        [t, f, a]
    );
    const sep = 1.8;

    //loop
    let positions = useMemo(() => {
        let positions = [];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                if ((xi - count / 2) ** 2 + (zi - count / 2) ** 2 < 5000) {
                    let x = sep * (xi - count / 2);
                    let z = sep * (zi - count / 2);
                    let y = graph(x, z);
                    positions.push(x, y, z);
                } else {
                    positions.push(0, 0, 0);
                }
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph]);

    useFrame(() => {
        t += 15;

        const positions = bufferRef.current?.array;
        // console.log(positions == null)
        if (positions) {
            let i = 0;
            for (let xi = 0; xi < count; xi++) {
                for (let zi = 0; zi < count; zi++) {
                    let x = sep * (xi - count / 2);
                    let z = sep * (zi - count / 2);

                    positions[i + 1] = graph(x, z);
                    i += 3;
                }
            }
        }
        if (bufferRef && bufferRef.current) {
            bufferRef.current.needsUpdate = true;
        }
        if (distance.offset < 0.2 && (Math.abs(distance.offset-Previous) > 0.05)) {
            setPrevious(distance.offset)
            SScrollPosition(distance.offset)
        }
        // if (distance.offset > 0.3) {
        //     console.log("switch");
        // }
        //Camera control
        // state.camera.position.set(120, 10 - scroll.offset * 20, 10)
        // console.log(10-scroll.offset);
    });

    return (
        <group>
            {/* Stars */}
            <Stars
                radius={100}
                depth={102}
                count={2000}
                factor={4}
                saturation={0}
                fade
                speed={2}
            />

            {/* wavePoints */}
            <points>
                <bufferGeometry attach={"geometry"}>
                    <bufferAttribute
                        ref={
                            bufferRef as React.MutableRefObject<THREE.BufferAttribute>
                        }
                        attach={"attributes-position"}
                        array={positions}
                        count={positions.length / 3}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    attach={"material"}
                    map={imgTex}
                    color={0x596cce}
                    size={0.7}
                    sizeAttenuation
                    transparent={false}
                    alphaTest={0.5}
                    opacity={1}
                ></pointsMaterial>
            </points>
        </group>
    );
}

function Boat() {
    const [boatHeight, setBoatHeight] = useState(0);
    const [wobbling, setWobbling] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [time, setTime] = useState(0);
    const gltf = useLoader(GLTFLoader, "src/assets/Home/Hero/Three/benchy.glb");
    
    function runSpin() {
        if (!wobbling) {
            setWobbling(true);
        }
    }

    const graph = useCallback(
        (x: number, z: number) => {
            const circle = x ** 2 + z ** 2;
            return (
                Math.sin(f * (circle - t)) *
                a *
                rippleFactor *
                ((1 / rippleFactor) * Math.E ** (-circle * f * rippleFactor))
            );
        },
        [t, f, a]
    );

    const rocker = useCallback(
        (t: number) => {
            const offset = t - 3;
            const slope = 1;
            const amplitude = 6.28;
            const bottom = 0.2;
            let ans =
                (amplitude + bottom) / (1 + Math.E ** (-slope * offset)) -
                bottom;
            if (t > 12) {
                ans = 0;
                setWobbling(false);
            }

            setRotation(ans);
        },
        [t]
    );

    useFrame(() => {
        setBoatHeight(graph(0, 0) - (1 + a / 2));

        if (wobbling) {
            rocker(time);
            setTime(time + 0.15);
        } else {
            setTime(0);
        }

        //6.28
        //3.54318885548 <- integralConst
    });
    return (
        <group
            position={[0, boatHeight, 0]}
            rotation={[0, rotation, 0]}
            onClick={() => runSpin()}
        >
            <primitive object={gltf.scene} />
        </group>
    );
}


export default { Points, Boat };
