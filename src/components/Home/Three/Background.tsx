import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Post() {
    return (
        <group>
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={5} />
            </EffectComposer>
        </group>
    );
}

function ShootingStar() {
    const ref = useRef<THREE.Mesh>(null);
    const [len, setlen] = useState(0.1);
    const origin = [-600, 700, 1200];
    const start = Math.random() * 500;
    let timer = 0;
    let curpos = origin;
    let speed = 2;
    let t = 0;
    let a = 0.9;
    let b = Math.random();
    let additionConstant = Math.random() + speed;

    useFrame(() => {
        if (false) {
            timer++;
        } else {
            t += additionConstant;
            let y = curpos[1] - t * a + b * 2000;
            if (y < -200) {
                curpos = origin;
                t = start;
                b = Math.random();
                setlen(0.1);
            } else {
                setlen(8);
            }
            ref.current?.position.set(curpos[0], y, curpos[2] - t);
        }
    });
    return (
        <Trail
            width={7}
            length={len}
            decay={speed}
            color={new THREE.Color(3, 2, 7)}
            attenuation={(t: number) => t * t}
        >
            <mesh ref={ref}>
                <sphereGeometry args={[0.25]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
            </mesh>
        </Trail>
    );
}
function Floor() {
    return (
        <mesh position={[-100, -101, 0]} rotation={[0, 9.8, 0]}>
            <boxGeometry args={[1, 200, 1000]} />
            <meshBasicMaterial color={new THREE.Color(0.017, 0.022, 0.036)} />
        </mesh>
    );
}

export default { Post, ShootingStar, Floor };
